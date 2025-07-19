describe('Tables', () => {

    beforeEach(() => {
        cy.goHome();
    
        cy.login('papito@cyskills.com.br', 'showtime');
        cy.userLoggedIn();
    
        cy.goTo('/tables', 'Tables');
    });  

    it('Deve validar o github', () => {
      
        cy.contains('table tbody tr', '1004') // verifica se contém uma linha na tabela com o ID '1004'
          .should('be.visible')    // verifica se está visivel, e faz as verificações necessárias
          .should('contain', 'Github') 
          .should('contain', 'Ativo') 
          .should('contain', 'papitodev')
    })

    it.only('Deve verificar se está indisponível e inativo', () =>{

        cy.contains('table tbody tr', '1002')
            .should('be.visible')
            .should('contain', 'Facebook')
            .should('contain', 'Indisponível')
    })
})
