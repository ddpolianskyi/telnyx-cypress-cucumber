class LoginPage {
    getPasswordResetLink(){
        return cy.get('a[href*="password-reset"]')
    }
    clickPasswordResetLink(){
        this.getPasswordResetLink().click()
    }
    doLogin(){
        cy.get('input[name="email"]').first().type('example@email.com')
        cy.get('input[name="password"]').type('examplePass_123')
        cy.get('input[name="remember_me"]').check({force: true})
        // cy.get('form[aria-label="loginForm"] button').click()
    }
}

module.exports = new LoginPage()