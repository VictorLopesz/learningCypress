describe('CEP', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    })

    it('Deve cadastrar um endereço consumindo a API dos correios', () => {
        cy.get('input[name="cep"]').type('25070260')
        cy.contains('button', 'Cadastrar').click() //é utilizado o Contains devido ao texto do button, já que não tem name/id
   
        cy.get('input[name="logradouro"]', {timeout: 7000}) //timeout utilizado para o sistema buscar a informação no CEP
            .should('have.value', 'Rua Itabira')

        cy.get('input[name="cidade"]', {timeout: 7000}) //timeout utilizado para o sistema buscar a informação no CEP
            .should('have.value', 'Duque de Caxias')

        cy.get('input[name="estado"]', {timeout: 7000}) //timeout utilizado para o sistema buscar a informação no CEP
            .should('have.value', 'RJ')
    })
})