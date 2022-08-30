const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const callTrackingPage = require('../../pages/CallTrackingPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on {string} link', (name) => {
	header.clickLink(name)
})
And('I click on #{int} FAQ dropdown menu', (num) => {
	callTrackingPage.clickFaqDropdown(num)
})
Then('FAQ #{int} dropdown menu opens', (num) => {
	callTrackingPage.getFaqDropdown(num).should('have.attr', 'aria-expanded', 'true')
})