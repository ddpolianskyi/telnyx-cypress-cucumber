class ContactUsPage {
    doMessage(){
        cy.get('select#Reason_for_Contact__c').select('Support')
        cy.get('input#FirstName').type('John')
        cy.get('input#LastName').type('Doe')
        cy.get('input#Email').type('example@email.com')
        cy.get('select#Phone_Number_Extension__c').select('+1')
        cy.get('input#Phone_Number_Base__c').type('1234567890')
        cy.get('input#Website').type('https://example.com')
        cy.get('textarea#Form_Additional_Information__c').type('Example example example')
        cy.get('input[name="Subscription_Opt_In__c"]').check({force: true})
        // cy.get('button[type="submit"]').click()
    }
}

module.exports = new ContactUsPage()