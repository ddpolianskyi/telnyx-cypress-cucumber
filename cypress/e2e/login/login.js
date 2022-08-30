const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const loginPage = require('../../pages/LoginPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on Log In link', () => {
	header.clickLoginLink()
})
And('I fill out the login form', () => {
	loginPage.doLogin()
})
Then('I logged in', () => {})