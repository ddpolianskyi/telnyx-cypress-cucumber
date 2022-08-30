class WaitlistPage {
    getForm(){
        return cy.get('div#form')
    }
    doScrollToForm(){
        this.getForm().scrollIntoView()
    }
    doFillForm(){
        cy.get('input#FirstName').type('John')
        cy.get('input#LastName').type('Doe')
        cy.get('input#Email').type('example@email.com')
        cy.get('div#form textarea').type('Example example example')
        cy.get('input#Subscription_Opt_In__c').check({force: true})
        // cy.get('div#form button').click()
    }
}

module.exports = new WaitlistPage()