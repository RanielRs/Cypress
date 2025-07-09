/// <reference types="Cypress"/> 

Cypress.Commands.add ('Checagem_carrinho',()=>{
        cy.get(':nth-child(3) > .cart_item_label').should('contain' , 'Sauce Labs Onesie')
        cy.get(':nth-child(4) > .cart_item_label').should('contain' , 'Sauce Labs Bike Light')
        cy.get(':nth-child(5) > .cart_item_label').should('contain' , 'Sauce Labs Bolt T-Shirt')

})

Cypress.Commands.add ('Tela_Inicial',()=>{
        cy.get('.btn_primary').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click()

})