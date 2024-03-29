Feature: Sign up
    Background:
        Given I open the site "/sign-up"
        Given I accept cookies

    Scenario: Sign up form should be valid
        When I fill out the Sign up form with valid credentials
        Then Sign up form is valid
    
    Scenario: Sign up form should be invalid due to invalid credentials
        When I fill out the Sign up form with invalid credentials
        Then Sign up form is invalid due to invalid credentials