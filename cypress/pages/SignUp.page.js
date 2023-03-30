const { faker } = require('@faker-js/faker')

const
    emailInput = 'form input[name="email"]',
    emailError = 'form div#email_message',
    fullNameInput = 'form input[name="full_name"]',
    passwordInput = 'form input[name="password"]',
    passwordError = 'form > div > div:nth-child(2) > div:nth-child(2)',
    promoCodeButton = 'form > a',
    promoCodeInput = 'form input[name="promo_code"]',
    termsAndConditionsCheckbox = 'form input[name="terms_and_conditions"]',
    receiveEmailsCheckbox = 'form input[name="subscription_opt_in"]',
    submitButton = 'form[aria-label="signup-form"] > button[type="submit"]'

const
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    fullName = faker.name.fullName(),
    validEmail = faker.internet.email(),
    invalidEmail = faker.internet.email(firstName, lastName, 'email'),
    validPassword = faker.internet.password(20, false, /\w/, '123_'),
    invalidPassword = faker.internet.password(12, true),
    promoCode = faker.random.alphaNumeric(8)

class SignUpPage {
    fillTheSignUpFormWithValidCredentials(){
        cy.get(emailInput).type(validEmail)
        cy.get(fullNameInput).type(fullName)
        cy.get(passwordInput).type(validPassword)
        cy.get(promoCodeButton).click()
        cy.get(promoCodeInput).type(promoCode)
        cy.get(submitButton).click()
        cy.get(termsAndConditionsCheckbox).click()
        cy.get(receiveEmailsCheckbox).click()
    }
    fillTheSignUpFormWithInvalidCredentials(){
        cy.get(emailInput).type(invalidEmail)
        cy.get(fullNameInput).type(fullName)
        cy.get(passwordInput).type(invalidPassword)
        cy.get(promoCodeButton).click()
        cy.get(promoCodeInput).type(promoCode)
        cy.get(submitButton).click()
        cy.get(termsAndConditionsCheckbox).click()
        cy.get(receiveEmailsCheckbox).click()
    }
    signUpFormValidation(){
        cy.get(emailError).should('not.exist')
        cy.get(passwordError).should('not.exist')
    }
    signUpFormInvalidation(){
        cy.get(emailError).should('exist')
        cy.get(passwordError).should('exist')
    }
}

module.exports = new SignUpPage()