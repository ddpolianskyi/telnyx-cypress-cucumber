class SignUpPage {
    doSignUp(){
        cy.get('input#email').type('example@email.com')
        cy.get('input#full_name').type('John Doe')
        cy.get('input#password').type('examplePass_123')
        cy.get('input#terms_and_conditions').check({force: true})
        cy.get('input#subscription_opt_in').check({force: true})
        cy.get('button[type="submit"]').click()
    }
}

module.exports = new SignUpPage()