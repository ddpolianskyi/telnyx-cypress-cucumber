const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const signUpPage = require('../../pages/SignUpPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on Sign up link', () => {
	header.clickSignUpLink()
})
And('I fill out the sign up form', () => {
	signUpPage.doSignUp()
})
Then('Account created', () => {})