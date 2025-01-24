describe("Input Fields", () => {
    
  beforeEach(() => {
    cy.goHome();
  });

  it("Deve preencher o campo texto", () => {
    cy.login("papito@cyskills.com.br", "showtime");
    cy.userLoggedIn();

    cy.get('nav a[href="/input-fields"]').click()

    cy.contains('h2', 'Input Fields')
        .should('be.visible')

    cy.get('[data-cy="fullname"]')
        .type('Victor Lopes')

    cy.get('input[name="email"]')
        .type('victor@lopes.com')

    cy.get('input[name="number"]')
        .type(2025)
    
    cy.get('input[name="date"]')
        .type("2025-01-22")
});
});
