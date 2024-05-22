/// <reference types="cypress"/>

describe('teste funcionalidade login', () => {
  it('login com sucesso', () => {
    cy.login_teste('standard_user','secret_sauce')
    cy.get('.product_label').should('contain','Products')
  })

  it('login com usuario invalido', () => {
    cy.login_teste('invalid_user','secret_sauce')
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
  })

  it('login com senha invalida', () => {
    cy.login_teste('standard_user','invalid_password')
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
  })

  it('login com usuario em branco', () => {
    cy.login_teste_user('secret_sauce')
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username is required')
  })
  it('login com senha em branco', () => {
   cy.login_teste_password('standard_user')
    cy.get('[data-test="error"]').should('contain','Epic sadface: Password is required')
  })
  

})//end