const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
const jobHiringPage = require('../../pages/JobHiringPage')

Given('I visit career position link', () => {
	cy.visit('https://boards.greenhouse.io/telnyx54/jobs/4139272003')
})
When('I fill out the form', () => {
	jobHiringPage.doMessage()
})
Then('Message of hiring on the job sended', () => {})