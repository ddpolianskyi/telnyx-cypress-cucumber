Feature: Sign up
    Scenario: Sign up
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on Sign up link
        And I fill out the sign up form
        Then Account created