Feature: Call tracking FAQ dropdown menu
    Scenario: Call tracking FAQ dropdown menu
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on "Call Tracking" link
        And I click on #2 FAQ dropdown menu
        Then FAQ #2 dropdown menu opens