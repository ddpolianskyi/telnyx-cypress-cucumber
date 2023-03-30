const { Given } = require('@badeball/cypress-cucumber-preprocessor')
const HomePage = require('../pages/Home.page')

Given('I open the site {string}', async (url) => {
    cy.visit(url)
})
Given('I accept cookies', async () => {
    HomePage.acceptCookiesButtonClick()
})