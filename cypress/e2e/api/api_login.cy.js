/// <reference types="cypress"/>

describe('API - Testes funcionalidade login',()=>{
    it ('login com sucesso',()=>{
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
        "email": "fulano@qa.com",
        "password": "teste"
        }
    }).then((Response)=>{
        expect(Response.status).to.equal(200)
        expect(Response.body.message).to.equal('Login realizado com sucesso')
    })

    })
    it ('senha invalida',()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "invalid_password"
            },
            failOnStatusCode: false
        }).then((Response)=>{
            expect(Response.status).to.equal(401)
            expect(Response.body.message).to.equal('Email e/ou senha inválidos')
        })
        
    })
    it ('usuario invalido',()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "invalid@qa.com",
                "password": "teste"
            },
            failOnStatusCode: false
        }).then((Response)=>{
            expect(Response.status).to.equal(401)
            expect(Response.body.message).to.equal('Email e/ou senha inválidos')
        })
        
    })
    it ('senha em branco',()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": ""
            },
            failOnStatusCode: false
        }).then((Response)=>{
            expect(Response.status).to.equal(400)
            expect(Response.body.password).to.equal('password não pode ficar em branco')
        })
        
    })
    it ('usuario em branco',()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "",
                "password": "teste"
            },
            failOnStatusCode: false
        }).then((Response)=>{
            expect(Response.status).to.equal(400)
            expect(Response.body.email).to.equal('email não pode ficar em branco')
        })
        
    })
})//fim