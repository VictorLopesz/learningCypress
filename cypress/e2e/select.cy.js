describe('Select', () => {
 
    beforeEach(() => {
        cy.goHome();
    
        cy.login("papito@cyskills.com.br", "showtime");
        cy.userLoggedIn();
    
        cy.goTo("/select", "Select");
      });   
    
    
    it('Deve selecionar o Cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
    })

    it.only('Deve selecionar as linguagens que utiliza Node.js', () => {

        const langs = ['TypeScript', 'JavaScript', 'Python']
        
        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()

        langs.forEach(lang => {
            cy.contains('.option-item', new RegExp ("^" + lang + "$"))
            .click()
        }) 
        
        cy.get('.language-item') 
            .should('have.length', 3  )

    })
})

