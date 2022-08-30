class SavingsCalculatorPage {
    doCalculate(){
        cy.get('main div:nth-child(3) div:nth-child(1) > input').parent().click()
        cy.get('main div:nth-child(3) div:nth-child(2) > input').parent().click()
        cy.get('main div:nth-child(4) button').click()
        cy.get('input#local-numbers').clear().type('25')
        cy.get('input#toll-free-numbers').clear().type('25')
        cy.get('main div:nth-child(4) button').click()
    }
}

module.exports = new SavingsCalculatorPage()