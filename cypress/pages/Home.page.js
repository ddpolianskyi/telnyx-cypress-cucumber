const
    acceptCookiesButton = 'body > div > div > button'

class HomePage {
    acceptCookiesButtonClick(){ cy.get(acceptCookiesButton).click() }
}

module.exports = new HomePage()