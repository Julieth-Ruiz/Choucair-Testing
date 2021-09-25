
describe ('Utest Join Today process', function () {
    it ('Fill out the form, step 1', function (){
       cy.visit('https://utest.com/') 

       cy.contains('Join Today').click()

    
       cy.get('#firstName')
       .type('Julieth')
       .should('have.value', 'Julieth')

       cy.get('#lastName')
       .type('Ruiz')
       .should('have.value', 'Ruiz')

       function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
       }

       const randomId = makeid(6);

       cy.get('#email')
       .type(`juliethruizga+test${randomId}@gmail.com`)
       .should('have.value', `juliethruizga+test${randomId}@gmail.com`)

       cy.get('#birthMonth').select('February')

       cy.get('#birthDay').select('24')

       cy.get('#birthYear').select('1994')

       cy.contains('Next: Location').click()


    })

    it ('Fill out the form, step 2', function (){

        cy.wait(1000)

        cy.contains('Next: Devices').click()
    

    })

    it ('Fill out the form, step 3', function (){

        
        cy.get('div[name="handsetMakerId"]').click()
        cy.get('.ui-select-choices-row').eq(2).click({waitForAnimations: false})

        cy.get('div[name="handsetModelId"]').click()
        cy.get('.ui-select-choices-row').eq(0).click({waitForAnimations: false})

        cy.get('div[name="handsetOSId"]').click()
        cy.get('.ui-select-choices-row').eq(20).click({waitForAnimations: false})


        cy.contains('Next: Last Step').click()
    

    })

    it ('Fill out the form, step 4', function (){

        cy.get('#password')
       .type('pkHE-7$z-+Jwu9N')

       cy.get('#confirmPassword')
       .type('pkHE-7$z-+Jwu9N')

       cy.get('#termOfUse').click()

       cy.get('#privacySetting').click()

       cy.contains('Complete Setup').click()

    })

    it ('Should redirect to home page', function (){

        cy.url()
        .should('include', '/welcome')

    })

})


