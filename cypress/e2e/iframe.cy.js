describe('Utilizando iFrame', () =>{
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe','IFrame')
    })

    it('Deve preencher o nome em uma página que tem iFrame', () => {
       
        cy.get('[data-cy="iframe-inputs"]')
            .then(($iframe) => {
             const $body = $iframe.contents().find('body')
             cy.wrap($body)
                .find('#fullname')
                .type('Victor Lopes')
            })

    })
})

// a função .wrap serve para catalogar a const, no caso $body, para obter os recursos necessários para trabalhar nativamente dentro do cypress