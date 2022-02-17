Feature: Testing and verifying main fuctualities of start page

  Scenario: 1. As a user, I can click any clicable item on start page and verify that is working
    Given I am on start page
    When I click "Selenium Certification Training" banner
    Then I should see the "Selenium Certification Training" page opened
    When I click "Elements" button
    Then I should see the "Elements" page opened
    When I click "Forms" button
    Then I should see the "Forms" page opened
    When I click "Alerts, Frame & Windows" button
    Then I should see the "Alerts, Frame & Windows" page opened
    When I click "Widgets" button
    Then I should see the "Widgets" page opened
    When I click "Interactions" button
    Then I should see the "Interactions" page opened
    When I click "Book Store Application" button
    Then I should see the "Book Store Application" page opened
    When I click "TOOLS QA" label
    Then I should see the start page reloded  
        