Feature: Testing and verifying of "Tabs" and "Menu" modules on "Widgets" page

  Scenario: 1. As a user, I can click "Tabs" button
    Given I am on "Widgets" module page with url "https://demoqa.com/widgets"
    When I click "Tabs" button
    Then I should see Tabs page with url "https://demoqa.com/tabs"

  Scenario: 2. As a user, I can check functionality of Tabs page
    When I click "What" tab
    Then I should see What-tab text starting with "Lorem Ipsum is simply dummy text"
    When I click "Origin" tab
    Then I should see Origin-tab text starting with "Contrary to popular belief"
    When I click "Use" tab
    Then I should see Use-tab text starting with "It is a long established fact"

  Scenario: 3. As a user, I can click "Menu" button
    When I click "Menu" button
    Then I should see Menu page with url "https://demoqa.com/menu"

  Scenario: 4. As a user, I can check functionality of Menu page
    When I click "Main Item 1" menu unit
    Then I should see page with url "https://demoqa.com/menu#"
    When I hover "Main Item 2" menu unit
    Then I should see sub items appearing
    When I click top "sub item"
    Then I should see the page with url "https://demoqa.com/menu#"
    When I hover "SUB SUB LIST »"
    Then I should see sub sub items appearing
    When I click "Sub Sub Item 1"
    Then I should see "https://demoqa.com/menu#" page
    When I click "Sub Sub Item 2"
    Then I should see the same page "https://demoqa.com/menu#"
