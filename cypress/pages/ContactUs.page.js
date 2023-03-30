const { faker } = require('@faker-js/faker')

const
    reasonForContactSelect = 'form select[name="Reason_for_Contact__c"]',
    firstNameInput = 'form input[name="FirstName"]',
    lastNameInput = 'form input[name="LastName"]',
    emailInput = 'form input[name="Email"]',
    emailError = 'form input[name="Email"] ~ div.mktoError',
    countrySelect = 'form select[name="Phone_Number_Extension__c"]',
    phoneNumberInput = 'form input[name="Phone_Number_Base__c"]',
    websiteInput = 'form input[name="Website"]',
    additionalInformationInput = 'form textarea[name="Form_Additional_Information__c"]',
    howDidYouHearAboutTelnyxInput = 'form input[name="How_did_you_hear_about_Telnyx_Open__c"]',
    receiveEmailsCheckbox = 'form input[name="Subscription_Opt_In__c"]',
    submitButton = 'form button[type="submit"]'

const
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    validEmail = faker.internet.email(firstName, lastName),
    invalidEmail = faker.internet.email(firstName, lastName, 'email'),
    phoneNumber = faker.phone.number('(###)-###-###'),
    companyName = faker.company.bs()

class ContactUsPage {
    fillTheContactUsMessageFormWithValidCredentials(){
        cy.get(reasonForContactSelect).select('Support')
        cy.get(firstNameInput).type(firstName)
        cy.get(lastNameInput).type(lastName)
        cy.get(emailInput).type(validEmail)
        cy.get(countrySelect).select('United States (+1)')
        cy.get(phoneNumberInput).type(phoneNumber)
        cy.get(websiteInput).type(companyName)
        cy.get(additionalInformationInput).type('Testing')
        cy.get(howDidYouHearAboutTelnyxInput).type('Testing')
        cy.get(receiveEmailsCheckbox).click()
        // await cy.get(submitButton).click()
    }
    fillTheContactUsMessageFormWithInvalidCredentials(){
        cy.get(reasonForContactSelect).select('Support')
        cy.get(firstNameInput).type(firstName)
        cy.get(lastNameInput).type(lastName)
        cy.get(emailInput).type(invalidEmail)
        cy.get(countrySelect).select('United States (+1)')
        cy.get(phoneNumberInput).type(phoneNumber)
        cy.get(websiteInput).type(companyName)
        cy.get(additionalInformationInput).type('Testing')
        cy.get(howDidYouHearAboutTelnyxInput).type('Testing')
        cy.get(receiveEmailsCheckbox).click()
        cy.get(submitButton).click()
    }
    contactUsMessageFormValidation(){
        cy.get(emailError).should('not.exist')
    }
    contactUsMessageFormInvalidation(){
        cy.get(emailError).should('exist')
    }
}

module.exports = new ContactUsPage()