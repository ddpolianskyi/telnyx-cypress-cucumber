const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const pricingPage = require('../../pages/PricingPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on {string} link', (name) => {
	header.clickPricingLink(name)
})
And('I select Canada in country select field', () => {
	pricingPage.selectCountryList()
})
And('I select USD in currency select field', () => {
	pricingPage.selectCurrencyList()
})
Then('I see pricing for Canada in USD', () => {})