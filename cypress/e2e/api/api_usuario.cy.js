/// <reference types="cypress"/>

describe('API - usuário', () => {
    it('Listar usuários', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/usuarios'
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
    
    it('cadastro de usuário', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body:{
                "nome": "Silva",
                "email": "testes1@qa.com.br",
                "password": "teste",
                "administrador": "true"
              }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })
    
    it('email ja cadstrado', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body:{
                "nome": "roger Silva",
                "email": "teste@qa.com.br",
                "password": "teste",
                "administrador": "true"
              },
              failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Este email já está sendo usado')
        })
    })
    
}) //fim
