Feature: Support Center Search
    Scenario: Support Center Search
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on Support Center link
        And I enter "Community" in search field and press Enter
        Then I see search results for "Community"