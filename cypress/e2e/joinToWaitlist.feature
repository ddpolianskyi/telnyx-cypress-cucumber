Feature: Join to waitlist
    Scenario: Join to waitlist
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on JOIN THE WAITLIST link
        And I scroll to join to waitlist form
        And I fill out the join to waitlist form
        Then I joined to waitlist