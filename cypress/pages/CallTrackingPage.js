class CallTrackingPage {
    getFaqDropdown(num){
        return cy.get(`dl div:nth-child(${num}) button`)
    }
    clickFaqDropdown(num){
        this.getFaqDropdown(num).click({force: true})
    }
}

module.exports = new CallTrackingPage()