describe('CEP', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    })

    it('Deve cadastrar um endereço consumindo a API dos correios', () => {
      
    //criado um objeto para organização e preenchimento dos campos requisitados        
        const endereco = {
            cep: 25070260,
            logradouro: 'Rua itabira',
            localidade: 'Duque de Caxias',
            uf: 'RJ'
        }
        
        //Exemplo de interceptação de serviço quando estiver fora do ar, forçando o statusCode de 200
        //Utilizado para caso a API utilizada esteja fora do ar.
        //Necessário utilizar a requisição 'GET', o link da API, abrir chaves e passar o Status 200.

        cy.intercept('GET', `https://viacep.com.br/ws/${endereco.cep}/json/`, {
            statusCode: 200,
            //o objeto é passado dentro da interceptação
            body: endereco
        }).as('getCep')
      
        
        cy.get('input[name="cep"]').type(endereco.cep)
        cy.contains('button', 'Cadastrar').click() //é utilizado o Contains devido ao texto do button, já que não tem name/id
   
        cy.wait('@getCep') // utilizado para o cypress esperar a requisição ser executada com sucesso

        cy.get('input[name="logradouro"]', {timeout: 7000}) //timeout utilizado para o sistema buscar a informação no CEP
            .should('have.value', endereco.logradouro)

        cy.get('input[name="cidade"]', {timeout: 7000}) //timeout utilizado para o sistema buscar a informação no CEP
            .should('have.value', endereco.localidade)

        cy.get('input[name="estado"]', {timeout: 7000}) //timeout utilizado para o sistema buscar a informação no CEP
            .should('have.value', endereco.uf)
    })
})