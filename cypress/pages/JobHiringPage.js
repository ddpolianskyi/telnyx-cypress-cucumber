class JobHiringPage {
    doMessage(){
        // Fix cross origin script error
        Cypress. on('uncaught:exception', (err, runnable) => { return false; });
        cy.get('input#first_name').type('John')
        cy.get('input#last_name').type('Doe')
        cy.get('input#email').type('example@email.com')
        cy.get('input#phone').type('+11234567890')
        cy.get('#resume_fieldset button[data-source="paste"]').click()
        cy.get('#resume_fieldset textarea').type('Example example example')
        cy.get('#cover_letter_fieldset button[data-source="paste"]').click()
        cy.get('#cover_letter_fieldset textarea').type('Example example example')
        cy.get('input[autocomplete*="linkedin"]').type('https://linkedin.com/example')
        cy.get('input[autocomplete*="website"]').type('https://example.com')
        cy.get('input[autocomplete*="salary"]').type('100')
        cy.get('select[id*="3"]').select('1', {force: true})
        cy.get('select[id*="4"]').select('1', {force: true})
        cy.get('select[id*="5"]').select('1', {force: true})
        cy.get('textarea[id*="6"]').type('Example example example')
        cy.get('select[id*="7"]').select('1', {force: true})
        cy.get('select[id*="gender"]').select('1', {force: true})
        cy.get('select[id*="hispanic"]').select('Yes', {force: true})
        cy.get('select[id*="veteran"]').select('1', {force: true})
        cy.get('select[id*="disability"]').select('1', {force: true})
        // cy.get('#submit_app').click()
    }
}

module.exports = new JobHiringPage()