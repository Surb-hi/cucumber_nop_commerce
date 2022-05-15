@smoke
Feature: Register test
  As user I want to register into nop commerce website.

  Scenario: Verify user should navigate to register page successfully
    Given  User should in home page
    When   User click on register link
    Then   User can see the registeration text

  Scenario: Verify that firstName lastname email password and confirm password fields are mandatory(
    Given  User should in home page
    When   User click on register link
    And    User click on register button
    Then   User can see the error message "First name is required."
    And    User can see the error message "Last name is required."
    And    User can see the error message "Email is required."
    And    User can see the error message "Password is required."
    And    User can see the error message "Password is required."

  Scenario: Verify that user should create account successfully
    Given  User should in home page
    When   User click on register link
    And    User select "Female" from radio button
    And    User enter Firstname "Prime" in Firstname field
    And    User enter Lastname "Patel" in Lastname field
    And    User select birthDay "1"from drop down
    And    User select birthMonth "January" from drop down
    And    User select birthYear "1997" from drop down
    And    User enter Email "papapig4@gmail.com" in Email field
    And    User enter Password "papa_pig" in Password field
    And    User enter ConfirmPassword "papa_pig" in ConfirmPassword field
    And    User click on register button
    Then   User register successfully
