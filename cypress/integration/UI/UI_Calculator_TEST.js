it('TC1 - run calc and check all numbers', () => {

    cy.visit('https://ahfarmer.github.io/calculator/')
    

    for (var i = 1; i < 9; i++) {

        cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"'+i+'")]').contains(i)
     }
     cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"+")]').contains("+")
     cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"-")]').contains("-")
     cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"x")]').contains("x")
     cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"÷")]').contains("÷")

})




it('TC2 - multiplication', () => {

    cy.calculation(5,5,25,'multiplication')

})



it('TC2 - addition', () => {

    cy.calculation(2,2,4,'additionaaaa')

})

it('TC3 - subtraction -1', () => {

    cy.calculation(9,2,7,'subtraction')

})

it('TC4 - subtraction -2 ', () => {

    cy.calculation(2,8,-6,'subtraction')

})


it('TC5 - division -1 ', () => {

    cy.calculation(5,5,1,'division')

})


it('TC5 - division -1 ', () => {

    cy.calculation(1,2,0.5,'division')

})




