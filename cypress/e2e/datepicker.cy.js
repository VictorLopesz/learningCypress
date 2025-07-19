describe('Dater Picker', () => {
        beforeEach(() => {
        cy.goHome();
    
        cy.login('papito@cyskills.com.br', 'showtime');
        cy.userLoggedIn();
    
        cy.goTo('/date-picker', 'Date Picker');
      }); 

      it('Deve adicionar minha data de aniversario', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
        .click()
        
        cy.get('select[aria-label="Month"]')
        .select('Maio')

        cy.get('input[aria-label="Year"]')
        .type('1994')

        cy.get('.dayContainer span[aria-label="Maio 10, 1994"]')
        .click()
      })
})