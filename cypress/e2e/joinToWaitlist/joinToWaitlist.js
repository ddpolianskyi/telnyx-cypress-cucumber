const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const waitlistPage = require('../../pages/WaitlistPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on JOIN THE WAITLIST link', () => {
	header.clickWaitlistLink()
})
And('I scroll to join to waitlist form', () => {
	waitlistPage.doScrollToForm()
})
And('I fill out the join to waitlist form', () => {
	waitlistPage.doFillForm()
})
Then('I joined to waitlist', () => {})