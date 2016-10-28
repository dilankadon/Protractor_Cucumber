Feature: Using Calculator and check the title
  As a user of Calculator Page
  I should be able to see the title

  @critical
  Scenario: Check the Calculator title
    Given I go on "http://juliemr.github.io/protractor-demo/"
    Then The title should be equal "Super Calculator"

  @high
  Scenario: Calculator should add one and two
    Given I go on "http://juliemr.github.io/protractor-demo/"
    Then Add "1" + "2" = "3"

  @low
  Scenario: Calculator should add four and six
    Given I go on "http://juliemr.github.io/protractor-demo/"
    Then Add "4" + "6" = "10"