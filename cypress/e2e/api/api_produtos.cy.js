    /// <reference types="cypress"/>

describe('API - produtos',()=>{
    it ('Get usuarios',()=>{
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/produtos',
        
        }).then((Response)=>{
        expect(Response.status).to.equal(200)
         
        })

    })
})//fim