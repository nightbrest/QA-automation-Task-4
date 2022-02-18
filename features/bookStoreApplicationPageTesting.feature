Feature: Testing and verifying of "Book Store" submodule of "Book Store Application" page

  Scenario: 1. As a user, I can click "Book Store" button
    Given I am on "Book Store Application" submodule page with url "https://demoqa.com/books"
    When I click "Book Store" button
    Then I should see book store with book items appeared

  Scenario: 2. As a user, I can check any book's ISBN matches pattern
    When I click "Git Pocket Guide" book's title
    Then I should see "Git Pocket Guide" information page
    And I can check "Git Pocket Guide" ISBN matches pattern "(978|979)(0|1)\d{9}" of ISBN standart

  Scenario: 3. As a user, I can perform search on the Books page
    When I click "Back To Book Store" button
    Then I should see book store with book items appeared
    When I tape keyword "JavaScript" in the search field
    Then I should see as a search result following books
    |values                             |
    |Learning JavaScript Design Patterns|
    |Speaking JavaScript                |
    |Programming JavaScript Applications|
    |Eloquent JavaScript, Second Edition|
  
  Scenario Outline: 4. As a user, I can check subtitle of every book in search result matches its title
    When I click <bookTitle> link
    Then I should see <bookSubTitle> matches book's title
    And I click "Back To Book Store" button
    Then I should see book store with book items appeared

    Examples:
    |             bookTitle             |                         bookSubTitle                            |
    |Learning JavaScript Design Patterns|A JavaScript and jQuery Developer's Guide                        |
    |Speaking JavaScript                |An In-Depth Guide for Programmers                                |
    |Programming JavaScript Applications|Robust Web Architecture with Node, HTML5, and Modern JS Libraries|
    |Eloquent JavaScript, Second Edition|A Modern Introduction to Programming                             |