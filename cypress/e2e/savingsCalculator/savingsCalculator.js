const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const savingsCalculatorPage = require('../../pages/SavingsCalculatorPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on {string} link', (name) => {
	header.clickLink(name)
})
And('I calculate', () => {
	savingsCalculatorPage.doCalculate()
})
Then('I see calculated selected plan', () => {})