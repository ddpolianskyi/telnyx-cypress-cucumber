const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const partnersPage = require('../../pages/PartnersPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on {string} link', (name) => {
	header.clickLink(name)
})
And('I scroll to partnership form', () => {
	partnersPage.scrollToForm()
})
And('I fill out the partnership form', () => {
	partnersPage.doFillForm()
})
Then('Partnership message sended', () => {})