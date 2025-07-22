describe('Arrastar e Soltar', () => { //o cypress não possui uma função nativa para arrastar e soltar, então é necessário utilizar js puro
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tasks','Task Board')
    })

    it('Deve finalizar uma tarefa', () => {
        const task = 'Definir requisitos do projeto'
        
        //2. instanciar uma classe nativa do js
        //   guardar essa instancia dentro de uma constante
        //      objeto         objeto PascalCase
        // abaixo temos uma instancia sendo ativada e guardada dentro da constante
        const dataTransfer = new DataTransfer()

        cy.contains('div[draggable=true]', task)
            .trigger('dragstart', { 
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()  
            .trigger('drop', {
                dataTransfer
            })

        //verificando se a tarefa foi para a coluna Done
        cy.contains('h4', 'Done')
            .parent()
            .contains('div[draggable=true]', task)
            .should('be.visible')
    })
})



// DataTransfer() é uma classe do JavaScript que trabalha com transferência de elementos para outros elementos
// .parent() utilizada para pegar a div pai
// A função trigger() no Cypress serve para disparar manualmente um evento DOM (como click, mouseover, keydown, etc.) em um elemento.