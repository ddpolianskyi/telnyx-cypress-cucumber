const { faker } = require('@faker-js/faker')

const
    emailInput = 'form > div input[name="email"]',
    emailError = 'form label > div > div:nth-child(2)',
    passwordInput = 'form input[name="password"]',
    forgotYourPasswordButton = 'form a[href*="/password-reset"]',
    rememberMyEmailCheckbox = 'form input[name="remember_me"]',
    rememberMyEmailCheckboxLabel = 'form div > div > div > label',
    submitButton = 'form[aria-label="loginForm"] > button'

const
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    validEmail = faker.internet.email(),
    invalidEmail = faker.internet.email(firstName, lastName, 'email'),
    password = faker.internet.password(12)

class LoginPage {
    fillTheLoginFormWithValidCredentials(){
        cy.get(emailInput).type(validEmail)
        cy.get(passwordInput).type(password)
        cy.get(rememberMyEmailCheckboxLabel).click()
        cy.get(submitButton).click()
    }
    fillTheLoginFormWithInvalidCredentials(){
        cy.get(emailInput).type(invalidEmail)
        cy.get(passwordInput).type(password)
        cy.get(rememberMyEmailCheckboxLabel).click()
        cy.get(submitButton).click()
    }
    loginFormValidation(){
        cy.get(emailError).should('not.exist')
    }
    loginFormInvalidation(){
        cy.get(emailError).should('exist')
    }
}

module.exports = new LoginPage()