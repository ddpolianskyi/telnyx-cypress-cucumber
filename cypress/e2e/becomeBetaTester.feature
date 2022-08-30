Feature: Become beta tester
    Scenario: Becoming a beta tester
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on "Integrations" link
        And I scroll to becoming a beta tester form
        And I fill out the becoming a beta tester form
        Then Becoming a beta tester message sended