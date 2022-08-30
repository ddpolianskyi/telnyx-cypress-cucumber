class PartnersPage {
    getForm(){
        return cy.get('div#become-a-partner')
    }
    scrollToForm(){
        this.getForm().scrollIntoView()
    }
    doFillForm(){
        cy.get('input#FirstName').type('John')
        cy.get('input#LastName').type('Doe')
        cy.get('input#Company').type('Example')
        cy.get('input#Email').type('example@email.com')
        cy.get('input#Form_Phone__c').type('+11234567890')
        cy.get('select#Partner_Type__c').select('Technology')
        cy.get('div#become-a-partner textarea').type('Example example example')
        cy.get('input#Subscription_Opt_In__c').check({force: true})
        // cy.get('div#become-a-partner button').click()
    }
}

module.exports = new PartnersPage()