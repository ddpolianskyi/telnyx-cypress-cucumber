class PasswordResetPage {
    doPasswordReset(){
        cy.get('input[name="email"]').type('example@email.com')
        cy.get('button[type="submit"]').click()
    }
}

module.exports = new PasswordResetPage()