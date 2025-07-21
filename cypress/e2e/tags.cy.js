describe('Tags', () => {
     beforeEach(() => {
        cy.goHome();
        cy.doLogin();
        cy.goTo('/tags', 'Tags');
      })

      it('Deve adicionar algumas tags', () =>{

        const tags = ['Cypress', 'JavaScript', 'Nodejs']

        tags.forEach(t => {
            cy.get('.new-tag')
                .type(`${t}{enter}`) //{enter} simula apertar o botão para adicionar algo
                .should('have.value', '') //'value' armazena um valor 
                cy.wait(1000) //"thinktime", opcional, utilizado para esperar um pouco antes de escolher as opções
                         // como o usuário faria, simulando digitação proxima a realidade.
            })

        tags.forEach(t => {
            cy.get('.tag-input')
            .should('contain', t)
            //o bloco acima verifica se todas as tags estão incluidas no input
        })
      })
})
