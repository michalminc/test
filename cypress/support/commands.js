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

Cypress.Commands.add("CreateNewDataSet", (TypeOfDataSet) => { 
    cy.wait(1000)
    cy.xpath('//*[@class="dropdown-toggle nav-link" and contains(text(), "Dataset")]').click({force: true});
    cy.xpath('//*[@class="dropdown-item"and contains(text(), " - '+TypeOfDataSet+'")]').click({force: true});
})

Cypress.Commands.add("TitleAndDescription", (sumamryText, descText) => { 
    cy.wait(1000)
    cy.get('[id="version-summary-title"]').type(sumamryText);
    cy.get('textarea').type(descText);
})

Cypress.Commands.add("SetElementValue", (id,value) => { 

    cy.get('[id="'+id+'"]').should('be.visible')
    cy.get('[id="'+id+'"]').should('be.exist')
    cy.get('[id="'+id+'"]').click().contains(value).click();
})

Cypress.Commands.add("SetElementValueNew", (id,value) => { 

    if (value !== null) {
        cy.get('[id="'+id+'"]').should('be.visible')
        cy.get('[id="'+id+'"]').should('be.exist')
        cy.get('[id="'+id+'"]').click().contains(value).click();
      } 
})

Cypress.Commands.add("ClearFilterAfterSearching", (value) => { 
    cy.wait(1000)
    cy.xpath('//div[starts-with(@class,"tags_clearAll__")]//*[contains(text(),"Clear Search")]').click({force: true});
    cy.xpath('//div[starts-with(@class,"filterInput_title__")]//*[contains(text(),"'+ value+ '")]').click({force: true});
   // cy.xpath('//div[starts-with(@class,"filterInput_title__")]//*[contains(text(),"Creator")]').click({force: true});
    cy.wait(1000)
})

Cypress.Commands.add("ClearSearch", (value) => { 
    cy.wait(1000)
    cy.xpath('//div[starts-with(@class,"tags_clearAll__")]//*[contains(text(),"Clear Search")]').click({force: true});
    cy.wait(1000)
})

Cypress.Commands.add("ExpandFacet", (value) => { 
    cy.wait(500)
    cy.xpath('//div[starts-with(@class,"filterInput_title__")]//*[contains(text(),"' + value + '")]').click({force: true});
    cy.wait(500)
})

Cypress.Commands.add("ClickEnterOnSearch", () => { 
    cy.wait(500)
    cy.xpath('//*[@id="search-input"]').type('{enter}').trigger('input')
    cy.wait(1000)
})

Cypress.Commands.add("Search", (value) => { 
    cy.wait(500)
    cy.xpath('//*[@id="search-input"]').type(value)
})

Cypress.Commands.add("ClickFacetValueenAndSearch", (value) => { 
    cy.wait(500)
    cy.xpath('//*[@id="' + value + '"]').should('be.visible')
    cy.xpath('//*[@id="' + value + '"]').click({force: true});
    cy.wait(500)
   
})

Cypress.Commands.add("MultiSelect", (field, value) => { 
    if (value !== null) {
        cy.wait(500)
        cy.xpath('//*[@id="' + field + '"]').type(value)
        cy.wait(1000)
        cy.xpath('//*[@id="' + field + '_listbox_active_option" and contains(text(), "' + value + '")]').click({force: true});
    }
})
Cypress.Commands.add("SelectFacet", (value) => { 
    cy.wait(500)
   // cy.xpath('//div[starts-with(@class,"filterInput_title__")]//*[contains(text(),"' + field + '")]').click({force: true});
    cy.xpath('//div[starts-with(@class,"checkListItem_checkListItem__3CyXv")]//*[contains(text(),"'+value+'")]').click()
    cy.wait(500)
})
//div[starts-with(@class,"checkListItem_checkListItem__3CyXv")]//*[contains(text(),"ADaM")]


Cypress.Commands.add("ClickFacetNew", (facet) => { 
var facet
switch (facet) {
    
    case "Dataset Type":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(1) > div > div:nth-child(2) > span').click({force: true});
    break;
    
    case "Study":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(2) > div > div:nth-child(2) > span').click({force: true});
    break;

    case "Data Model":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(3) > div > div:nth-child(2) > span').click({force: true});
    break;

    case "Privacy":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(4) > div > div:nth-child(2) > span').click({force: true});
	break;
    
    case "SDTMv Domain":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(5) > div > div:nth-child(2) > span').click({force: true});
	break;
    
    case "Data Category":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(6) > div > div:nth-child(2) > span').click({force: true});
	break;
    
    case "Data Classification":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(7) > div > div:nth-child(2) > span').click({force: true});
	break;
    
    case "Use or Show Case":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(8) > div > div:nth-child(2) > span').click({force: true});
	break;
    
    case "Format":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(9) > div > div:nth-child(2) > span').click({force: true});
	break;
    
    case "Data Model Version":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(10) > div > div:nth-child(2) > span').click({force: true});
	break;
    
    case "Retrieved From":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(11) > div > div:nth-child(2) > span').click({force: true});
	break;
    
    case "Document Category":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(12) > div > div:nth-child(2) > span').click({force: true});
	break;

    case "ADaM Dataset Code":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(13) > div > div:nth-child(2) > span').click({force: true});
	break;

    case "Published":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(14) > div > div:nth-child(2) > span').click({force: true});
	break;

    case "Minor Versions":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(15) > div > div:nth-child(2) > span').click({force: true});
	break;

    case "Study Indication":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(16) > div > div:nth-child(2) > span').click({force: true});
	break;

    case "Therapeutic Area":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(17) > div > div:nth-child(2) > span').click({force: true});
	break;

    case "Molecule":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(18) > div > div:nth-child(2) > span').click({force: true});
	break;

    case "Creator":
    cy.get('#root > div.routing_content__3Bk2x > div > section > div > div:nth-child(19) > div > div:nth-child(2) > span').click({force: true});
    break;




        
  default:
    text = "No value found";
}
})