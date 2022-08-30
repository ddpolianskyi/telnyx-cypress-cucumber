const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const aboutTelnyxPage = require('../../pages/AboutTelnyxPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on {string} link', (name) => {
	header.clickLink(name)
})
And('I click on Locate on Google Maps link in article with the title {string}', (name) => {
	aboutTelnyxPage.clickGoogleMapsLink(name)
})
Then('I redirected to Google Maps with address of the Telnyx office in {string}', (name) => {})