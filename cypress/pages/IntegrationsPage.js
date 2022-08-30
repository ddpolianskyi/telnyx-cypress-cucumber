class IntegrationsPage {
    getForm(){
        return cy.get('div#become-a-beta-tester')
    }
    doScrollToForm(){
        this.getForm().scrollIntoView()
    }
    doFillForm(){
        cy.get('input#FirstName').type('John')
        cy.get('input#LastName').type('Doe')
        cy.get('input#Email').type('example@email.com')
        cy.get('input#Website').type('https://example.com')
        cy.get('input#Industry').type('Technology')
        cy.get('select#Use_Case_Form__c').select('AI / Voice Analytics')
        // cy.get('div#become-a-beta-tester button').click()
    }
}

module.exports = new IntegrationsPage()