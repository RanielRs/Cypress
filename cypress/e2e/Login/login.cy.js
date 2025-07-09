context('Teste de Login', () => {
    it('Login com sucesso', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.product_label').should('contain' , 'Products')
        
    });



     it('Validando Login Incorreto', () => {
        cy.login_teste('standard_user1','secret_sauce')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')

        
    });



     it('Validar senha Incorreta', () => {
        cy.login_teste('standard_user','secret_sauce1')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
        
    });
});