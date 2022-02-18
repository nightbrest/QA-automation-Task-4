Feature: Testing and verifying of "Browser Windows" and "Modal Dialogs" modules on "Alerts, Frame & Windows" page

  Scenario: 1. As a user, I can click "Browser Windows" button
    Given I am on "Alerts, Frame & Windows" module page with url "https://demoqa.com/alertsWindows"
    When I click "Browser Windows" button
    Then I should see button "New Tab" appeared