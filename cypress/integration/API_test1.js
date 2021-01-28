describe('API Testing', () => {
    
    Cypress.config('baseUrl', 'https://reqres.in')
    
    it('GET - read', () => {
        cy.request('/api/users?page=2').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null

        })
    })

    it('POST - create', () => {
        const item = {"name":"michal","job":"test automation engineer"}
        cy.request('POST', '/api/users', item)
        .its('status').should('eq', 201)

       .should('deep.eq', 'item')
       //.should('include', item)
    })

    it('PUT - update', () => {
        const item = {"name":"test1"}
        cy.request({method:'PUT', url:'/api/users/2', body:item, failOnStatusCode: false})
        .its('status').should('eq', 200)
    })

    it('DELETE', () => {
    
        cy.request({method:'DELETE', url:'/api/users/2', failOnStatusCode: false})
        .its('status').should('eq', 204)
    })


})