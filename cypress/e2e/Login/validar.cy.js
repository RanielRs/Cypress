/// <reference types="Cypress"/> 

describe('', () => {
      it.only('Realizando a compra de Produtos', () => {
        cy.login_teste('standard_user','secret_sauce')
        
        //Ordenação do Menor para o Maior em Valor
        cy.get('.product_sort_container').select("Price (low to high)")
        cy.get(':nth-child(1) > .inventory_item_label').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_label').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_label').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Adicionando ao carrinho e voltando para tela Principal
        cy.contains('Sauce Labs Onesie').click()
        cy.Tela_Inicial()

        cy.contains('Sauce Labs Bike Light').click()
        cy.Tela_Inicial()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.Tela_Inicial()

        //Checagem de Quatidade de Produtos
        cy.get('.fa-layers-counter').should('have.text' , '3')

        //Verificando o Carrinho
        cy.get('[fill="currentColor"]').click()
        cy.Checagem_carrinho()
        
        //Checkout
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type("Raniel")
        cy.get('[data-test="lastName"]').type("Louko")
        cy.get('[data-test="postalCode"]').type("54753-145")
        cy.get('.btn_primary').click()

      //Verificando no Checkout
        cy.Checagem_carrinho()

      //Checagem do Valor
      cy.get('.summary_total_label').should('have.text' , 'Total: $36.69')

      //Finalizando Compra
      cy.get('.btn_action').click()

      //Compra com Sucesso
      cy.get('.complete-header').should('contain' , 'THANK YOU FOR YOUR ORDER')

  





    });
    
});