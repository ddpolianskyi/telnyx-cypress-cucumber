class SupportCenterPage {
    getSearchInput(){
        return cy.get('input.search__input')
    }
    getSearchResult(){
        return cy.get('div.section__content')
    }
    doSearch(name){
        this.getSearchInput().type(`${name}{enter}`)
    }
}

module.exports = new SupportCenterPage()