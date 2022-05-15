@regression
Feature: Computer page test
  As user I want to Test Computer page.

  Scenario: Verify user should navigate to computer page successfully
    Given  User should in Home page
    When   User click on Computer
    Then   User should sucessfully navigate to computer page

  Scenario: Verify user should navigate to desktops page successfully
    Given User should in home page
    When  User click on Computer
    And   User click on Desktops link
    Then  User can see the desktop text

  Scenario Outline: Verify that user should build you own computer and add them to cart successfully
    Given User should in home page
    When  User click on Computer
    And   User click on Desktops link
    And   User click on Build your own computer link
    And   User select processor "<processor>" from drop down
    And   User select RAM "<ram>" from drop down
    And   User select HDD "<hdd>" from radio button
    And   User select OS "<os>" from radio button
    And   User select Software "<software>" from radio button
    And   Click on add to card button
    Then  User check product added to cart successfully
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | VistaHome [+$50.00]     | Total Commander [+$5.00]   |

