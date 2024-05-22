/// <reference types="cypress"/>

Cypress.Commands.add('login_teste',(user,password)=>{
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('login_teste_user',(password)=>{
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('login_teste_password',(user)=>{
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('#login-button').click()
})
