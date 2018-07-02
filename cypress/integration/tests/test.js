
describe('Bridge The Fridge', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('http://localhost:8080/')

    // review home/landing page
    cy.get('#app > nav').children('a', 'div').should('exist')
    cy.get('#app > nav > a').should("have.attr", "href", `/`)
    cy.get('#app > nav > div > a').should("have.attr", "href", `/#/cart`)
    cy.get('#app > div > div').children('h1').should('have.text', 'Shopping is Eazy!')
    cy.get('#app > div > div > p:nth-child(2)').should('exist')
    cy.get('#app > div > div > p:nth-child(4)')
      .children().eq(0).should("have.attr", "href", `#/inventory/buy`)
    cy.get('#app > div > div > p:nth-child(4)')
      .children().eq(1).should("have.attr", "href", `#/inventory/sell`)
    

    // simuate posting an item to sell
    cy.get('#app > div > div > p:nth-child(4)').children().eq(1)
      .click()
    cy.get('#app > div > div > ul')
      .children().should("have.length.above", 1)
    cy.get('#app > div > div > p:nth-child(3) > a').click()
    cy.get('#inputDefault').type('Beach Ball')
    cy.get('#price-input > div > input').type('4')
    cy.get('#exampleTextarea').type('Summertime necessity')
    cy.get('#exampleSelect1').select('3')
    cy.get('input').eq(2).type('https://images-na.ssl-images-amazon.com/images/I/71%2ByQUGOR4L._SL1491_.jpg')
    cy.get('#submit-button').click()

    // edit/delete inventory item
    cy.get('#item-container > li > div > div.card-bottom > div > button.btn.btn-secondary').eq(0).click()
    cy.get('#price-input > div > input').type('{backspace}').type('7')
    cy.get('#submit-button').click()

    cy.get('#item-container > li > div > div.card-bottom > div > button.btn.btn-danger').eq(0).click()
    cy.get('#app > nav > a').click()

    // simulate buying an item
    cy.get('#app > div > div > p:nth-child(4)').children().eq(0)
      .click()
    cy.get('#app > div > div > ul')
      .children().should("have.length.above", 1)
    cy.get('#item-container > li > div > div.card-bottom > button').eq(0).click()
    cy.get('#navbarColor01 > a').click()
    cy.get('#app > div > div > div > button').click()
    cy.get('iframe').should('exist')
  })
})
