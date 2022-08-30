Feature: Becoming a partner
    Scenario: Becoming a partner
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on "Partners" link
        And I scroll to partnership form
        And I fill out the partnership form
        Then Partnership message sended