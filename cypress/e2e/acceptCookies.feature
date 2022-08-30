Feature: Accept cookies
    Scenario: Accepting cookies
        Given I visit telnyx.com
        When I click on Accept cookies button
        Then Cookies accepted