export class CartPage{

    verifyCartUpdate(){
        cy.contains('Shop').click()
        cy.get('[data-product_id="23"]').click()
        cy.wait(1000)
        cy.contains('Cart').click({force: true})
        cy.get('[class="plus"]').click()
        cy.get('[value="Update cart"]').click()
        cy.get('.woocommerce-message').should('contain', 'Cart updated.')
    }

}

export const cartPage = new CartPage()