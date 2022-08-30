const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const loginPage = require('../../pages/LoginPage')
const passwordResetPage = require('../../pages/PasswordResetPage')

Given('I visit login page', () => {
	cy.visit('https://portal.telnyx.com/#/login/sign-in')
})
When('I click on Forgot your password? link', () => {
	loginPage.clickPasswordResetLink()
})
And('I fill out the password reset form', () => {
	passwordResetPage.doPasswordReset()
})
Then('Password reseted', () => {})