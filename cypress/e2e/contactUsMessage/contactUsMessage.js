const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const header = require('../../pages/Header')
const contactUsPage = require('../../pages/ContactUsPage')

Given('I visit telnyx.com', () => {
	cy.visit('https://telnyx.com')
})
When('I click on Accept cookies button', () => {
	header.clickAcceptCookiesButton()
})
When('I click on Talk to an expert link', () => {
	header.clickTalkToAnExpertLink()
})
And('I fill out the contact us message form', () => {
	contactUsPage.doMessage()
})
Then('Message sended', () => {})