describe("login", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);

    cy.visit("https://playground.cyskills.com.br/login");

    cy.contains("h2", "Faça login").should("be.visible");
  });

  it("Deve logar com sucesso", () => {
    cy.login("papito@cyskills.com.br", "showtime");

    cy.get('[data-cy="welcome-title"]')
      .should("be.visible")
      .and("have.text", "Boas vindas ao Cypress Playground");
  });

  it("Não deve logar com senha inválida", () => {
    cy.login("papito@cyskills.com.br", "123456");
    cy.noticeHave("E-mail ou senha incorretos. Por favor, tente novamente!");
  });

  it("Não deve logar com e-mail não cadastrado", () => {
    cy.login("404@cyskills.com.br", "showtime");
    cy.noticeHave("E-mail ou senha incorretos. Por favor, tente novamente!");
  });

  it("Não deve logar com e-mail incorreto", () => {
    cy.login("www.linkedin.com", "showtime");
    cy.noticeHave(
      "O formato do e-mail está incorreto. Por favor, verifique e tente novamente!"
    );
  });
});

Cypress.Commands.add("login", (email, password) => {
  cy.get('[data-cy="email"]').type(email);
  cy.get('[data-cy="password"]').type(password);
  cy.get('[data-cy="login-button"]').click();
});

Cypress.Commands.add("noticeHave", (text) => {
  cy.get(".notice p").should("be.visible").and("have.text", text);
});
