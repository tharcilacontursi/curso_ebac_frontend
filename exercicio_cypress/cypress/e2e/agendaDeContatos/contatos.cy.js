/// <reference types="cypress" />

describe('Testes para a inclusao, alteracao e remocao ', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve incluir contato', () => {
        cy.get('input[type="text"]').type('Maria')
        cy.get('input[type="email"]').type('mariaexemplo@gmail.com')
        cy.get('input[type="tel"]').type('(55) 999857144')
        cy.get('.adicionar').click()
    })

    it('Deve alterar contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').click().clear().type('Joao')
        cy.get('input[type="email"]').click().clear().type('joaoexemplo@gmail.com')
        cy.get('input[type="tel"]').click().clear().type('(51) 9898571289')
        cy.get('.alterar').click()
    })

    it('Deve remover contaro', () => {
        cy.get('.delete').first().click()
    })
})
