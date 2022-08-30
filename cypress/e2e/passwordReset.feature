Feature: Password reset
    Scenario: Password reset
        Given I visit login page
        When I click on Forgot your password? link
        And I fill out the password reset form
        Then Password reseted