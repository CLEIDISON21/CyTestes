/// <reference types="cypress"/>

// Não há necessidade de importar o faker no Cypress
import { faker } from '@faker-js/faker'

describe('API - usuário', () => {
    it('cadastro de usuário', () => {
        const userData = {
            "nome": faker.internet.userName(),
            "email": faker.internet.email(),
            "password": faker.internet.password(),
            "administrador": "true"
        };
        cy.log('Dados do usuário:', userData)
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: userData
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })
    it('Listar usuários', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/usuarios'
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('usuarios');
        const usuarios = response.body.usuarios;
        cy.log(`Quantidade de usuários cadastrados: ${usuarios.length}`);
        })
    })
})
