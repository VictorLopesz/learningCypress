describe('Tables', () => {

    beforeEach(() => {
        cy.goHome();
        cy.doLogin();
        cy.goTo('/tables', 'Tables');
    });  

    it('Deve validar o github', () => {
      
        cy.contains('table tbody tr', '1004') // verifica se contém uma linha na tabela com o ID '1004'
          .should('be.visible')    // verifica se está visivel, e faz as verificações necessárias
          .should('contain', 'Github') 
          .should('contain', 'Ativo') 
          .should('contain', 'papitodev')
    })

    it('Deve verificar se está indisponível e inativo', () =>{

        cy.contains('table tbody tr', '1002')
            .should('be.visible')
            .should('contain', 'Facebook')
            .should('contain', 'Indisponível')
    })

    it('Deve remover uma rede social', () => {

        const name = 'Facebook'

        cy.contains('table tbody tr', '1002') // pegando o elemento pelo ID
            .find('.remove-item') // depois de encontra-lo
            .click() // utiliza o evento de clique

        cy.contains('button', 'Excluir') 
            .click()

        cy.get('table tbody') // faz a validação para saber se o elemento foi excluído
            .should('not.contain', name) // utiliza a constante para verificar se não contém mais ele
    })

     it('Deve permanecer na tabela ao desistir da exclusão', () => {

        const name = 'Youtube'

        cy.contains('table tbody tr', '1005') // pegando o elemento pelo ID
            .find('.remove-item') // depois de encontra-lo
            .click() // utiliza o evento de clique

        cy.contains('button', 'Cancelar') 
            .click()

        cy.get('table tbody') // faz a validação para saber se o elemento NÃO foi excluído
            .should('be.visible', name) // utiliza a constante para verificar se ele permanece lá
    })
})
