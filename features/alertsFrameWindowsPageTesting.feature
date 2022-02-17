Feature: Testing and verifying of "Browser Windows" and "Modal Dialogs" modules on "Alerts, Frame & Windows" page

  Scenario: 1. As a user, I can click "Browser Windows" button
    Given I am on "Alerts, Frame & Windows" module page with url "https://demoqa.com/alertsWindows"
    When I click "Browser Windows" button
    Then I should see button "New Tab" appeared
    And I should see button with name "New Window" appeared
    And I should see button named "New Window Message" appeared
    When I click "New Tab" button
    Then I should see new web page with url "https://demoqa.com/sample" opened and switch this window
    Then I should see the text "This is a sample page" on the page
    And I switch to "https://demoqa.com/browser-windows"
    When I click "New Window" button
    Then I should see new browser window with page "https://demoqa.com/sample" opened
    And I should see text "This is a sample page" on the page
    
    When I click "New Window Message" button
    Then I should see message window with text "Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization." appears
    

Scenario: 2. As a user, I can click "Modal Dialogs" button
    When I click "Modal Dialogs" button
    Then I should see button with the name "Small modal" appeared
    And I should see the button "Large modal" appeared
    When I click "Small modal" button
    Then I should see modal window with title "Small Modal"
    And I click small modal's "Close" button
    And I should see small modal dissapeared
    When I click "Large modal" button
    Then I should see modal window with the title "Large Modal"
    And I click large modal's "Close" button
    And I should see large modal dissapeared