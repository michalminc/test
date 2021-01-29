// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("LogIn" , () => {
    cy.visit('https://dev.cdse.science.roche.com/',{ timeout: 1200000 })
    //click on Dataset dropdown
    cy.wait(5000)
}),


Cypress.Commands.add("multiplication", (val1, val2, res) => { 
    cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"'+val1+'")]').click({force: true});    
    cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"x")]').click({force: true});    
    cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"'+val2+'")]').click({force: true});  
    cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"=")]').click({force: true}); 
    cy.wait(1000) 
    cy.xpath('//*[@class="component-display"]').should('have.text,"'+res+'"') 

})

Cypress.Commands.add("addition", (val1, val2, res) => { 
    cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"'+val1+'")]').click({force: true});    
    cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"+")]').click({force: true});    
    cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"'+val2+'")]').click({force: true});  
    cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"=")]').click({force: true}); 
    cy.wait(1000) 
  //  cy.xpath('//*[@class="component-display"]').should('have.text', '4') 

})

Cypress.Commands.add("subtraction", (val1, val2, res) => { 
    cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"'+val1+'")]').click({force: true});    
    cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"-")]').click({force: true});    
    cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"'+val2+'")]').click({force: true});  
    cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"=")]').click({force: true}); 
    cy.wait(1000) 
  //  cy.xpath('//*[@class="component-display"]').should('have.text', '4') 

})


Cypress.Commands.add("calculation", (val1,val2,res, mathType) => { 
    cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"'+val1+'")]').click({force: true});  
    var mathType
    switch (mathType) {       
        case "multiplication":
            cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"x")]').click({force: true});  
        break;
        
        case "addition":
            cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"+")]').click({force: true});  
        break;

        case "subtraction":
           cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"-")]').click({force: true});  
            break;
      
        case "division":
            cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"÷")]').click({force: true});  
            break;

      default:
        text = "No value found";
    }
    cy.xpath('//div[starts-with(@class,"component-button")]//*[contains(text(),"'+val2+'")]').click({force: true});  
    cy.xpath('//div[starts-with(@class,"component-button orange")]//*[contains(text(),"=")]').click({force: true}); 
    cy.wait(1000) 
   // cy.xpath('//*[@class="component-display"]').should('have.text','"'+res+'"') 
    cy.xpath('//*[@class="component-display"]').contains(res)

    })