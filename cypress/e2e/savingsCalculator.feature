Feature: Savings calculator
    Scenario: Savings calculator
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on "Savings Calculator" link
        And I calculate
        Then I see calculated selected plan