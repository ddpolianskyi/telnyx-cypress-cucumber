class AboutTelnyxPage {
    getGoogleMapsLink(name){
        return cy.get(`section a[href*="${name}"]`)
    }
    clickGoogleMapsLink(name){
        this.getGoogleMapsLink(name).click()
    }
}

module.exports = new AboutTelnyxPage()