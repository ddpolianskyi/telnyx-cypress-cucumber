Feature: Pricing change
    Scenario: Pricing change
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on "Elastic SIP Trunking" link
        And I select Canada in country select field
        And I select USD in currency select field
        Then I see pricing for Canada in USD