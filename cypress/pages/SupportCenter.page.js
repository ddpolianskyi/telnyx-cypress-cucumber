const
    searchInput = 'form input.search__input',
    searchResults = 'section.section > div'

class SupportCenterPage {
    search(text){
        cy.get(searchInput).type(text).type('{enter}')
    }
    searchCheck(text){
        cy.url().should('include', text)
        cy.get(searchResults).should('have.length.greaterThan', 1)
    }
    emptySearchCheck(text){
        cy.url().should('include', text)
        cy.get(searchResults).should('have.length.lessThan', 2)
    }
}

module.exports = new SupportCenterPage()