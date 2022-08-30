Feature: Google maps Telnyx office location
    Scenario: Google maps Telnyx office location
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on "About Telnyx" link
        And I click on Locate on Google Maps link in article with the title "Chicago"
        Then I redirected to Google Maps with address of the Telnyx office in "Chicago"