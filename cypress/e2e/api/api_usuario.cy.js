/// <reference types="cypress"/>

describe('API - usuario',()=>{
    it ('Get usuarios',()=>{
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/usuarios',
        
    }).then((Response)=>{
        expect(Response.status).to.equal(200)
        //expect(Response.body.message).to.equal('Login realizado com sucesso')
    })

    })
})//fim