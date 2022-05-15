$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer page test",
  "description": "As user I want to Test Computer page.",
  "id": "computer-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3809819100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to computer page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User should in Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Computer",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should sucessfully navigate to computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "Computer.userShouldInHomePage()"
});
formatter.result({
  "duration": 119227400,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnComputer()"
});
formatter.result({
  "duration": 572203000,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userShouldSucessfullyNavigateToComputerPage()"
});
formatter.result({
  "duration": 35192700,
  "status": "passed"
});
formatter.after({
  "duration": 674385800,
  "status": "passed"
});
formatter.before({
  "duration": 1957828000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify user should navigate to desktops page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on Computer",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User can see the desktop text",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnComputer()"
});
formatter.result({
  "duration": 546054700,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnDesktopsLink()"
});
formatter.result({
  "duration": 433892100,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userCanSeeTheDesktopText()"
});
formatter.result({
  "duration": 35171300,
  "status": "passed"
});
formatter.after({
  "duration": 672127200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User click on Computer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select processor \"\u003cprocessor\u003e\" from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select RAM \"\u003cram\u003e\" from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select HDD \"\u003chdd\u003e\" from radio button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select OS \"\u003cos\u003e\" from radio button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select Software \"\u003csoftware\u003e\" from radio button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User check product added to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 29,
      "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 30,
      "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 31,
      "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 32,
      "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2086517800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User click on Computer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select processor \"2.2 GHz Intel Pentium Dual-Core E2200\" from drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select RAM \"2 GB\" from drop down",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select HDD \"320 GB\" from radio button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select OS \"Vista Home [+$50.00]\" from radio button",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select Software \"Microsoft Office [+$50.00]\" from radio button",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User check product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnComputer()"
});
formatter.result({
  "duration": 557727600,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnDesktopsLink()"
});
formatter.result({
  "duration": 478024300,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 20858299100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 23
    }
  ],
  "location": "Computer.userSelectProcessorFromDropDown(String)"
});
formatter.result({
  "duration": 85701800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 17
    }
  ],
  "location": "Computer.userSelectRAMFromDropDown(String)"
});
formatter.result({
  "duration": 77233300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 17
    }
  ],
  "location": "Computer.userSelectHDDFromRadioButton(String)"
});
formatter.result({
  "duration": 57281200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 16
    }
  ],
  "location": "Computer.userSelectOSFromRadioButton(String)"
});
formatter.result({
  "duration": 51873600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 22
    }
  ],
  "location": "Computer.userSelectSoftwareFromRadioButton(String)"
});
formatter.result({
  "duration": 4449200,
  "status": "passed"
});
formatter.match({
  "location": "Computer.clickOnAddToCardButton()"
});
formatter.result({
  "duration": 51233500,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userCheckProductAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 902216900,
  "status": "passed"
});
formatter.after({
  "duration": 705066700,
  "status": "passed"
});
formatter.before({
  "duration": 2696404100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User click on Computer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select RAM \"4GB [+$20.00]\" from drop down",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select HDD \"400 GB [+$100.00]\" from radio button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select OS \"Vista Premium [+$60.00]\" from radio button",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select Software \"Acrobat Reader [+$10.00]\" from radio button",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User check product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnComputer()"
});
formatter.result({
  "duration": 542047900,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnDesktopsLink()"
});
formatter.result({
  "duration": 451034700,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 20851218100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 23
    }
  ],
  "location": "Computer.userSelectProcessorFromDropDown(String)"
});
formatter.result({
  "duration": 50014400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 17
    }
  ],
  "location": "Computer.userSelectRAMFromDropDown(String)"
});
formatter.result({
  "duration": 74469300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 17
    }
  ],
  "location": "Computer.userSelectHDDFromRadioButton(String)"
});
formatter.result({
  "duration": 58428300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 16
    }
  ],
  "location": "Computer.userSelectOSFromRadioButton(String)"
});
formatter.result({
  "duration": 51734300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 22
    }
  ],
  "location": "Computer.userSelectSoftwareFromRadioButton(String)"
});
formatter.result({
  "duration": 3445100,
  "status": "passed"
});
formatter.match({
  "location": "Computer.clickOnAddToCardButton()"
});
formatter.result({
  "duration": 44861000,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userCheckProductAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 907551800,
  "status": "passed"
});
formatter.after({
  "duration": 740668800,
  "status": "passed"
});
formatter.before({
  "duration": 1994913900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User click on Computer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select RAM \"8GB [+$60.00]\" from drop down",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select HDD \"320 GB\" from radio button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select OS \"VistaHome [+$50.00]\" from radio button",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select Software \"Total Commander [+$5.00]\" from radio button",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User check product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnComputer()"
});
formatter.result({
  "duration": 517014900,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnDesktopsLink()"
});
formatter.result({
  "duration": 440543400,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userClickOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 20762841300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 23
    }
  ],
  "location": "Computer.userSelectProcessorFromDropDown(String)"
});
formatter.result({
  "duration": 43144800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 17
    }
  ],
  "location": "Computer.userSelectRAMFromDropDown(String)"
});
formatter.result({
  "duration": 76584800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 17
    }
  ],
  "location": "Computer.userSelectHDDFromRadioButton(String)"
});
formatter.result({
  "duration": 58581400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VistaHome [+$50.00]",
      "offset": 16
    }
  ],
  "location": "Computer.userSelectOSFromRadioButton(String)"
});
formatter.result({
  "duration": 49913600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 22
    }
  ],
  "location": "Computer.userSelectSoftwareFromRadioButton(String)"
});
formatter.result({
  "duration": 3148700,
  "status": "passed"
});
formatter.match({
  "location": "Computer.clickOnAddToCardButton()"
});
formatter.result({
  "duration": 44259100,
  "status": "passed"
});
formatter.match({
  "location": "Computer.userCheckProductAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 895622300,
  "status": "passed"
});
formatter.after({
  "duration": 697019100,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "LogIn Test",
  "description": "As user I want to login into nop commerce website.",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "duration": 1957224600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Log in Page SuccessFully.",
  "description": "",
  "id": "login-test;verify-user-should-navigate-to-log-in-page-successfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should Navigate To Log in Page SuccessFully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 17600,
  "status": "passed"
});
formatter.match({
  "location": "login.userClickOnLoginLink()"
});
formatter.result({
  "duration": 525195800,
  "status": "passed"
});
formatter.match({
  "location": "login.userShouldNavigateToLogInPageSuccessFully()"
});
formatter.result({
  "duration": 38378000,
  "status": "passed"
});
formatter.after({
  "duration": 661161700,
  "status": "passed"
});
formatter.before({
  "duration": 2057526100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter InValid email Id \"prime123@gmail.com\" in email id Field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter InValid password \"prime123\" in password Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User see error message for Invalid Credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 18400,
  "status": "passed"
});
formatter.match({
  "location": "login.userClickOnLoginLink()"
});
formatter.result({
  "duration": 476057100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123@gmail.com",
      "offset": 29
    }
  ],
  "location": "login.userEnterInValidEmailIdInEmailIdField(String)"
});
formatter.result({
  "duration": 72955400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123",
      "offset": 29
    }
  ],
  "location": "login.userEnterInValidPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 70977300,
  "status": "passed"
});
formatter.match({
  "location": "login.userClickOnLoginButton()"
});
formatter.result({
  "duration": 418963700,
  "status": "passed"
});
formatter.match({
  "location": "login.userSeeErrorMessageForInvalidCredentials()"
});
formatter.result({
  "duration": 35321300,
  "status": "passed"
});
formatter.after({
  "duration": 662493400,
  "status": "passed"
});
formatter.before({
  "duration": 1963125900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify That User Should Log In Success Fully With Valid Credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-log-in-success-fully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enter email Id \"papapig1@gmail.com\" in email id Field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enter password \"papa_pig\" in password Field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User can see logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "login.userClickOnLoginLink()"
});
formatter.result({
  "duration": 465615300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papapig1@gmail.com",
      "offset": 21
    }
  ],
  "location": "login.userEnterEmailIdInEmailIdField(String)"
});
formatter.result({
  "duration": 69277200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papa_pig",
      "offset": 21
    }
  ],
  "location": "login.userEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 72368000,
  "status": "passed"
});
formatter.match({
  "location": "login.userClickOnLoginButton()"
});
formatter.result({
  "duration": 699621500,
  "status": "passed"
});
formatter.match({
  "location": "login.userCanSeeLogoutLink()"
});
formatter.result({
  "duration": 34455000,
  "status": "passed"
});
formatter.after({
  "duration": 678612800,
  "status": "passed"
});
formatter.before({
  "duration": 1949615500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enter email Id \"papapig1@gmail.com\" in email id Field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enter password \"papa_pig\" in password Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User can login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "location": "login.userClickOnLoginLink()"
});
formatter.result({
  "duration": 455545300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papapig1@gmail.com",
      "offset": 21
    }
  ],
  "location": "login.userEnterEmailIdInEmailIdField(String)"
});
formatter.result({
  "duration": 76456200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papa_pig",
      "offset": 21
    }
  ],
  "location": "login.userEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 70873400,
  "status": "passed"
});
formatter.match({
  "location": "login.userClickOnLoginButton()"
});
formatter.result({
  "duration": 664576600,
  "status": "passed"
});
formatter.match({
  "location": "login.userClickOnLogoutButton()"
});
formatter.result({
  "duration": 20646265700,
  "status": "passed"
});
formatter.match({
  "location": "login.userCanLoginSuccessfully()"
});
formatter.result({
  "duration": 36158200,
  "status": "passed"
});
formatter.after({
  "duration": 734627800,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Register test",
  "description": "As user I want to register into nop commerce website.",
  "id": "register-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 1990343700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User can see the registeration text",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "location": "Register.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 470519900,
  "status": "passed"
});
formatter.match({
  "location": "Register.userCanSeeTheRegisterationText()"
});
formatter.result({
  "duration": 38313400,
  "status": "passed"
});
formatter.after({
  "duration": 660801600,
  "status": "passed"
});
formatter.before({
  "duration": 1926287700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify that firstName lastname email password and confirm password fields are mandatory(",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory(",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User can see the error message \"First name is required.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User can see the error message \"Last name is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see the error message \"Email is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User can see the error message \"Password is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can see the error message \"Password is required.\"",
  "keyword": "And "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 23700,
  "status": "passed"
});
formatter.match({
  "location": "Register.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 480960500,
  "status": "passed"
});
formatter.match({
  "location": "Register.userClickOnRegisterButton()"
});
formatter.result({
  "duration": 70081300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "Register.userCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 168932400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    }
  ],
  "location": "Register.userCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 113131500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    }
  ],
  "location": "Register.userCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 114061100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "Register.userCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 105831900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "Register.userCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 108433400,
  "status": "passed"
});
formatter.after({
  "duration": 658868700,
  "status": "passed"
});
formatter.before({
  "duration": 1877061300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User select \"Female\" from radio button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enter Firstname \"Prime\" in Firstname field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enter Lastname \"Patel\" in Lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User select birthDay \"1\"from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User select birthMonth \"January\" from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User select birthYear \"1997\" from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enter Email \"papapig4@gmail.com\" in Email field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter Password \"papa_pig\" in Password field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enter ConfirmPassword \"papa_pig\" in ConfirmPassword field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.userShouldInHomePage()"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "location": "Register.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 478834200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 13
    }
  ],
  "location": "Register.userSelectFromRadioButton(String)"
});
formatter.result({
  "duration": 56847900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 22
    }
  ],
  "location": "Register.userEnterFirstnameInFirstnameField(String)"
});
formatter.result({
  "duration": 73589000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 21
    }
  ],
  "location": "Register.userEnterLastnameInLastnameField(String)"
});
formatter.result({
  "duration": 78111100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "Register.userSelectBirthDayFromDropDown(String)"
});
formatter.result({
  "duration": 81428800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 24
    }
  ],
  "location": "Register.userSelectBirthMonthFromDropDown(String)"
});
formatter.result({
  "duration": 79989700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1997",
      "offset": 23
    }
  ],
  "location": "Register.userSelectBirthYearFromDropDown(String)"
});
formatter.result({
  "duration": 81827600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papapig4@gmail.com",
      "offset": 18
    }
  ],
  "location": "Register.userEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 71766900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papa_pig",
      "offset": 21
    }
  ],
  "location": "Register.userEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 70822400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papa_pig",
      "offset": 28
    }
  ],
  "location": "Register.userEnterConfirmPasswordInConfirmPasswordField(String)"
});
formatter.result({
  "duration": 70516000,
  "status": "passed"
});
formatter.match({
  "location": "Register.userClickOnRegisterButton()"
});
formatter.result({
  "duration": 20896234500,
  "status": "passed"
});
formatter.match({
  "location": "Register.userRegisterSuccessfully()"
});
formatter.result({
  "duration": 35971800,
  "status": "passed"
});
formatter.after({
  "duration": 718879600,
  "status": "passed"
});
});