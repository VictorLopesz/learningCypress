describe('TextArea', () => {
    
    beforeEach(() => {
        cy.goHome()
        cy.doLogin();

    })

    it('Deve preencher o campo de área de texto', () => {

        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"]').type('Bem-vindo ao curso de Cypress')

    })
}) 