Feature: Partnership message
    Background:
        Given I open the site "/partnerships"
        Given I accept cookies

    Scenario: Partnership message form should be valid
        When I fill out the Partnership message form with valid credentials
        Then Partnership message form is valid
    
    Scenario: Partnership message form should be invalid due to invalid credentials
        When I fill out the Partnership message form with invalid credentials
        Then Partnership message form is invalid due to invalid credentials