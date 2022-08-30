class Header {
    getAcceptCookiesButton(){
        return cy.get('body > div > div > div button').last()
    }
    getWaitlistLink(){
        return cy.get('header span > a[href="/products/storage"]')
    }
    getSupportCenterLink(){
        return cy.get('header a[href*="support.telnyx.com"]').first()
    }
    getLoginLink(){
        return cy.get('header a[href*="portal.telnyx.com"]').first()
    }
    getTalkToAnExpertLink(){
        return cy.get('a[href="/contact-us"]').first()
    }
    getSignUpLink(){
        return cy.get('header ul > div > a[href="/sign-up"]')
    }
    getLink(name){
        return cy.get('header a span').contains(name).parent().parent().parent()
    }
    getCallTrackingLink(){
        return cy.get('header a[href*="call-tracking"]')
    }
    getPricingLink(name){
        return cy.get('header a[href^="/pricing/"] span').contains(name).parent().parent().parent()
    }
    clickAcceptCookiesButton(){
        this.getAcceptCookiesButton().click()
    }
    clickWaitlistLink(){
        this.getWaitlistLink().click()
    }
    clickSupportCenterLink(){
        this.getSupportCenterLink().click()
    }
    clickLoginLink(){
        this.getLoginLink().click({force: true})
    }
    clickTalkToAnExpertLink(){
        this.getTalkToAnExpertLink().click()
    }
    clickSignUpLink(){
        this.getSignUpLink().click({force: true})
    }
    clickLink(name){
        this.getLink(name).click({force: true})
    }
    clickPricingLink(name){
        this.getPricingLink(name).click({force: true})
    }
}

module.exports = new Header()