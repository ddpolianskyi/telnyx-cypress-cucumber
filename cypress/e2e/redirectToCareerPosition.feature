Feature: Redirect to career position
    Scenario: Redirect to career position
        Given I visit telnyx.com
        When I click on Accept cookies button
        And I click on "Careers" link
        And I click on "Software Engineer, Java" position link
        Then I redirected to career position page