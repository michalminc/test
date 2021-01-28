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
               const FirsNameV =  response.body.data[0].first_name
            });
        });

        it('POST - create user',function () {
            cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',
            body : {

                'name': 'michal',
                'job': 'test automation engineer'

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