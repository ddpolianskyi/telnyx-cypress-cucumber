const { faker } = require('@faker-js/faker')

const
    firstNameInput = 'form input[name="FirstName"]',
    lastNameInput = 'form input[name="LastName"]',
    companyInput = 'form input[name="Company"]',
    emailInput = 'form input[name="Email"]',
    emailError = 'form input[name="Email"] ~ div.mktoError',
    phoneNumberExtensionSelect = 'form select[name="Phone_Number_Extension__c"]',
    phoneNumberInput = 'form input[name="Phone_Number_Base__c"]',
    partnerTypeSelect = 'form select[name="Partner_Type__c"]',
    additionalInformationInput = 'form textarea[name="Form_Additional_Information__c"]',
    receiveEmailsCheckbox = 'form input[name="Subscription_Opt_In__c"]',
    submitButton = 'form button[type="submit"]'

const 
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    companyName = faker.company.bs(),
    validEmail = faker.internet.email(),
    invalidEmail = faker.internet.email(firstName, lastName, 'email'),
    phoneNumber = faker.phone.number('(###)-###-###')

class PartnersPage {
    fillThePartnershipFormWithValidCredentials(){
        cy.get(firstNameInput).type(firstName)
        cy.get(lastNameInput).type(lastName)
        cy.get(companyInput).type(companyName)
        cy.get(emailInput).type(validEmail)
        cy.get(phoneNumberExtensionSelect).select('United States (+1)')
        cy.get(phoneNumberInput).type(phoneNumber)
        cy.get(partnerTypeSelect).select('Technology')
        cy.get(additionalInformationInput).type('Test additional information.')
        cy.get(receiveEmailsCheckbox).click({ force: true })
    }
    fillThePartnershipFormWithInvalidCredentials(){
        cy.get(firstNameInput).type(firstName)
        cy.get(lastNameInput).type(lastName)
        cy.get(companyInput).type(companyName)
        cy.get(emailInput).type(invalidEmail)
        cy.get(phoneNumberExtensionSelect).select('United States (+1)')
        cy.get(phoneNumberInput).type(phoneNumber)
        cy.get(partnerTypeSelect).select('Technology')
        cy.get(additionalInformationInput).type('Test additional information.')
        cy.get(receiveEmailsCheckbox).click({ force: true })
        cy.get(submitButton).click()
    }
    partnershipFormValidation(){
        cy.get(emailError).should('not.exist')
    }
    partnershipFormInvalidation(){
        cy.get(emailError).should('exist')
    }
}

module.exports = new PartnersPage()