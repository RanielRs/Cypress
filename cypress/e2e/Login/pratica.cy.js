describe('Praticando', () => {
    it('Teste com sucesso', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type("problem_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
    });
});