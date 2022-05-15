@sanity
Feature: LogIn Test
  As user I want to login into nop commerce website.

  Scenario:Verify User Should Navigate To Log in Page SuccessFully.
    Given User should in home page
    When  User click on login link
    Then User should Navigate To Log in Page SuccessFully

  Scenario: Verify The Error Message With InValid Credentials
    Given User should in home page
    When  User click on login link
    And   User enter InValid email Id "prime123@gmail.com" in email id Field
    And   User enter InValid password "prime123" in password Field
    And   User click on login button
    Then  User see error message for Invalid Credentials


  Scenario: Verify That User Should Log In Success Fully With Valid Credentials
    Given User should in home page
    When  User click on login link
    And   User enter email Id "papapig1@gmail.com" in email id Field
    And   User enter password "papa_pig" in password Field
    And   User click on login button
    Then  User can see logout link

  Scenario: Verify That User Should LogOut SuccessFully
    Given User should in home page
    When  User click on login link
    And   User enter email Id "papapig1@gmail.com" in email id Field
    And   User enter password "papa_pig" in password Field
    And   User click on login button
    And   User click on logout button
    Then  User can login successfully

