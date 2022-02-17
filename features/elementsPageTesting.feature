Feature: Testing and verifying "Text Box" and "Buttons" of Element’s module

  Scenario: 1. As a user, I can click "Text Box" button
    Given I am on Element’s module page
    When I click "Text Box" button
    Then I should see the registration form with fields to fill in
    When I fill Full Name field with "Ivan Ivanov"
    And I fill Email field with "test@mail.ru"
    And I fill Current Address field with "Test str. 1, app.7, Brest, Belarus, 224000"
    And I fill Permanent Address field with "Moskowskaja str. 206, app.1, Brest, Belarus, 224000"
    And I click "Submit" button
    Then I should see under registration form "Name":"Ivan Ivanov"
    And I should see under registration form "Email":"test@mail.ru"
    And I should see under registration form "Current Address ":"Test str. 1, app.7, Brest, Belarus, 224000"
    And I should see under registration form "Permananet Address ":"Moskowskaja str. 206, app.1, Brest, Belarus, 224000"
    When I fill Email field with incorrect value "111"
    Then I should see the "Email" field frame became red coloured

  Scenario: 2. As a user, I can click "Buttons" button
    When I double-click "Double Click Me" button
    Then I should see message "You have done a double click"
    When I right-click "Right Click Me" button
    Then I should see message "You have done a right click"
    When I click "Click Me" button
    Then I should see message "You have done a dynamic click"
    
