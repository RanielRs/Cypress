describe('', () => {
      it('Realizando a compra de Produtos', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        
        //Ordenação do Menor para o Maior em Valor
        cy.get('.product_sort_container').select("Price (low to high)")
        cy.get(':nth-child(1) > .inventory_item_label').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_label').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_label').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Adicionando ao carrinho e voltando para tela Principal
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()

        //Checagem de Quatidade de Produtos
        cy.get('.fa-layers-counter').should('have.text' , '3')

        //Verificando o Carrinho
        cy.get('[fill="currentColor"]').click()
        cy.get(':nth-child(3) > .cart_item_label').should('contain' , 'Sauce Labs Onesie')
        cy.get(':nth-child(4) > .cart_item_label').should('contain' , 'Sauce Labs Bike Light')
        cy.get(':nth-child(5) > .cart_item_label').should('contain' , 'Sauce Labs Bolt T-Shirt')
        
        //Checkout
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type("Raniel")
        cy.get('[data-test="lastName"]').type("Louko")
        cy.get('[data-test="postalCode"]').type("54753-145")
        cy.get('.btn_primary').click()

      //Verificando no Checkout
        cy.get(':nth-child(3) > .cart_item_label').should('contain' , 'Sauce Labs Onesie')
        cy.get(':nth-child(4) > .cart_item_label').should('contain' , 'Sauce Labs Bike Light')
        cy.get(':nth-child(5) > .cart_item_label').should('contain' , 'Sauce Labs Bolt T-Shirt')

      //Checagem do Valor
      cy.get('.summary_total_label').should('have.text' , 'Total: $36.69')

      //Finalizando Compra
      cy.get('.btn_action').click()

      //Compra com Sucesso
      cy.get('.complete-header').should('contain' , 'THANK YOU FOR YOUR ORDER')

  





    });
    
});