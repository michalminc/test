describe('API TEST', function() {
  
    it('GET - test 1',function () {

        
        cy.request({
        method : 'GET',
        url : 'https://reqres.in/api/users?page=2',}).then(function(response){

           expect(response.body.support).have.property('url')
           expect(response.body.support).have.property('text')
           expect(response).to.have.property('status', 200)
           expect(response.body).to.not.be.null
       
       
        });
    });

  
    it('GET - test 2',function () {
    
            
            cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2',}).then(function(response){
    
               expect(response.body.support).to.have.property('url')
               expect(response.body.support).to.have.property('text')
               expect(response).to.have.property('status', 200)
               expect(response.body).to.not.be.null
               expect(response.body.data[0].first_name).to.eq('Michael')
               
               //test
            });
        });

        it('POST - create user',function () {
            cy.log(Cypress.env('name'))
            cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',
            body : {

                'name': Cypress.env('name'),
                'job': Cypress.env('job'),

            },

            headers : {
                'content-type' : 'application/json'

            }
    
            }).then(function(response){
    
                expect(response.body).to.have.property('job');
                cy.log('test')
                cy.log(response.body.id)
                expect(response.status).to.eq(201)
         
            });
        });




    });