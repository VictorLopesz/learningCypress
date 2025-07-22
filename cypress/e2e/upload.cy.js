describe('Upload', ()=> {

    beforeEach(() => {
        cy.goHome();
        cy.doLogin();
        cy.goTo('/upload', 'Upload');
      });   
      
    it('deve anexar um doc', () => {
        cy.get('input[name="doc"]')
        .selectFile('cypress/fixtures/CV-AnalistaTestesQA.pdf')
        //função callback
        .then(element => {
            expect(element[0].files[0].name).to.equal('CV-AnalistaTestesQA.pdf')
        })
    })
    
        it('deve anexar uma imagem', () => {
        cy.get('input[name="photo"]')
        .selectFile('cypress/fixtures/captura.png')
        //função callback
        .then(element => {
            expect(element[0].files[0].name).to.equal('captura.png')
        })

        cy.get('#image-upload') //pegando a imagem pelo id
            .find('img') // encontrando a imagem
            .should('be.visible') // verificar se a imagem está visível
            .should('have.attr', 'src') // verificar se contém os atributos
            .and('include', 'blob') //verifica se contém o texto 'blob', caso contenha, significa que carregou corretamente
    })

})