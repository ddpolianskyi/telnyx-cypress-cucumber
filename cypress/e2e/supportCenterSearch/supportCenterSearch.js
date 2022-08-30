const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const supportCenterPage = require('../../pages/SupportCenterPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
And('I click on Support Center link', () => {
	// Link doesn't clicks
	cy.visit('https://support.telnyx.com/')
})
And('I enter {string} in search field and press Enter', (name) => {
	supportCenterPage.doSearch(name)
})
Then('I see search results for {string}', (name) => {
	supportCenterPage.getSearchResult().should('contain', name)
})