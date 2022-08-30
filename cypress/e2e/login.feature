Feature: Login
    Scenario: Login
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on Log In link
        And I fill out the login form
        Then I logged in