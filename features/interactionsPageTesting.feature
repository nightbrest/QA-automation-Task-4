Feature: Testing and verifying of "Sortable" tab items in "Interactions" module

  Scenario: 1. As a user, I can click "Sortable" button
    Given I am on "Interactions" module page with url "https://demoqa.com/interaction"
    When I click "Sortable" button
    Then I should see "Sortable" submodule tabs with tab "List" as active

  Scenario: 2. As a user, I can check the functionality of "List" tab elements
    When I drag the list item "One" and move it in the end of list
    Then I should see the list item "One" took the place of list item "Six"
    And I should see every other of list items moved one step to top, for example "Two" is on the top of the list

  Scenario: 3. As a user, I can check the functionality of "Grid" tab elements
    When I click "Grid" tab
    Then I should see that "Grid" tab became active
    When I drag the list item "One" and move it right to the end of list
    Then I should see element "One" is replaced by the element "Three"
    And I should see "Two" and "Three" moved one step to left