const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const integrationsPage = require('../../pages/IntegrationsPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on {string} link', (name) => {
	header.clickLink(name)
})
And('I scroll to becoming a beta tester form', () => {
	integrationsPage.doScrollToForm()
})
And('I fill out the becoming a beta tester form', () => {
	integrationsPage.doFillForm()
})
Then('Becoming a beta tester message sended', () => {})