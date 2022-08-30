Feature: Redirect to Contact Center
    Scenario: Redirect to Contact Center
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on "Contact Center" link
        Then I redirected to "Contact Center" page