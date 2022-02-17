Feature: Testing and verifying of filling and submitting the form of "Forms" module

  Scenario: 1. As a user, I can correct fill and submit the form
    Given I am on Forms module page
    When I click "Practice Form" button
    Then I should see the "Student Registration form" with fields to fill in
    When I fill First name field with "Ivan"
    Then I should see "Ivan" appeared in First name field
    When I fill Last name field with "Ivanov"
    Then I should see "Ivanov" appeared in Last name field
    When I fill Email's field with "testing@mail.ru"
    Then I should see "testing@mail.ru" appeared in Email field
    When I click "Male" radio button
    Then I should see "Male" chechbox became active
    When I fill Mobile field with "0123456789"
    Then I should see "0123456789" appeared in Mobile field
    When I select the date 1st October 1982 in "Date of Birth"
    Then I should see "07 Oct 1982" appeared in Date of Birth field
    When I fill Subject field with "Testing"
    Then I should see "Testing" appeared in Subject field
    When I click Sports Reading Music checkboxes
    Then I should see Sports Reading Music checkboxes became active
    When I choose and upload local picture
    When I fill students Current Address field with "Test str. 2, app.7, Brest, Belarus, 224000"
    Then I should see "Test str. 2, app.7, Brest, Belarus, 224000" appeared in Current Address field
    When I choose "NCR" from Select State dropbox
    Then I should see state "NCR" as selected
    When I choose "Noida" from Select City dropbox
    Then I should see city "Noida" as selected
    When I click form's "Submit" button
    Then I should see new window appeared with all information I've just filled in
    And I should see in new the window "Student Name Ivan Ivanov"
    And I should see in new the window "Student Email testing@mail.ru"
    And I should see in new the window "Gender Male"
    And I should see in new the window "Mobile 0123456789"
    And I should see in new the window "Date of Birth 07 October,1982"
    And I should see in new the window "Hobbies Sports, Reading, Music"
    And I should see in new the window "Picture Untitled.png"
    And I should see in new the window "Address Test str. 2, app.7, Brest, Belarus, 224000"
    And I should see in new the window "State and City NCR Noida"
    When I click "Close" button
    Then I should see the window disappeared

     
     