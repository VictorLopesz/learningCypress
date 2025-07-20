describe("login", () => {
  beforeEach(() => {
    cy.goHome()
  })

  it("Deve logar com sucesso", () => {
    cy.viewport(1920, 1080);
    cy.login("papito@cyskills.com.br", "showtime");
    cy.userLoggedIn()
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

  it('Não deve logar sem email', () => {
    cy.login('', '123456')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  });

  it('Não deve logar sem senha', () => {
    cy.login('papito@cyskills.com.br', '')
    cy.noticeHave('Por favor, digite sua senha para continuar.')
  });

  it('Não deve logar sem email e sem senha', () => {
    cy.login('', '')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  });
});
