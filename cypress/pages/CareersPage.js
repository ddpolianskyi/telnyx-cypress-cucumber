class CareersPage {
    clickPositionLink(name){
        cy.wait(10000)
        cy.get('section p').contains(name).parent().parent().click()
    }
}

module.exports = new CareersPage()