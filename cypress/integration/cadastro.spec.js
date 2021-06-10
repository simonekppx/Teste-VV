/// <reference types="cypress" />
context('Cadastro', () => {
    beforeEach(() => {
        cy.visit('vvtest/cadastro/');
    });
    it('Cadastro de usuário no site com dados válidos', () => {
        cy.get('#field_nome').type('Simone')
        cy.get('#field_sobrenome').type('Lima Santos')
        cy.get('#field_email').type('simone.santos.ext1@gmail.com')
        cy.get('#field_telefone').type('11986975814')
        cy.get('#field_conta-0').check()
        cy.get('#field_documento').type('32222211223')
        cy.get('.frm_button_submit').click()
        cy.get('.wp-block-columns > :nth-child(2)').should('contain', 'Cadastro efetuado com sucesso')
    });

    it('Cadastro de usuário já cadastrado no site', () => {
        cy.get('#field_nome').type('Simone')
        cy.get('#field_sobrenome').type('Santos Kovalenkinas')
        cy.get('#field_email').type('kurtmone@gmail.com')
        cy.get('#field_telefone').type('11987341255')
        cy.get('#field_conta-0').check()
        cy.get('#field_documento').type('36557753851')
        cy.get('.frm_button_submit').click()
        cy.get('.wp-block-columns > :nth-child(2)').should('contain', 've already submitted that.')
    });
});