Feature: Contact us message
    Scenario: Contact us message
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on Talk to an expert link
        And I fill out the contact us message form
        Then Message sended