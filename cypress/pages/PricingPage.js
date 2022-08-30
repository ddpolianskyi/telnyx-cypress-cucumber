class PricingPage {
    getCountryBtn(){
        return cy.get('div:nth-child(1) > button[aria-haspopup="listbox"]')
    }
    clickCountryBtn(){
        this.getCountryBtn().click()
    }
    getCountryList(){
        return cy.get('div > ul[role="listbox"]').first()
    }
    selectCountryList(){
        this.clickCountryBtn()
        this.getCountryList().find('a[href*="ca"]').first().click()
    }
    getCurrencyBtn(){
        return cy.get('div:nth-child(2) > button[aria-haspopup="listbox"]')
    }
    clickCurrencyBtn(){
        this.getCurrencyBtn().click()
    }
    getCurrencyList(){
        return cy.get('div > ul[role="listbox"]').last()
    }
    selectCurrencyList(){
        cy.wait(10000)
        this.clickCurrencyBtn()
        this.getCurrencyList().find('div').contains('USD').click()
    }
}

module.exports = new PricingPage()