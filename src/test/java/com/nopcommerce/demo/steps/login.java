package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class login {
    @When("^User click on login link$")
    public void userClickOnLoginLink() {
        new HomePage().clickOnLogin();
    }

    @Then("^User should Navigate To Log in Page SuccessFully$")
    public void userShouldNavigateToLogInPageSuccessFully() {
        Assert.assertEquals("", "Welcome, Please Sign In!", new LoginPage().verifyWelcomeText());
    }

    @And("^User enter InValid email Id \"([^\"]*)\" in email id Field$")
    public void userEnterInValidEmailIdInEmailIdField(String email) {
        new LoginPage().setEmailField(email);
    }

    @And("^User enter InValid password \"([^\"]*)\" in password Field$")
    public void userEnterInValidPasswordInPasswordField(String password) {
        new LoginPage().setPasswordField(password);
    }

    @And("^User click on login button$")
    public void userClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^User see error message for Invalid Credentials$")
    public void userSeeErrorMessageForInvalidCredentials() {
        Assert.assertEquals("", "Login was unsuccessful. Please correct the errors and try again.\n" + "No customer account found", new LoginPage().verifyErrorMsgText());
    }

    @And("^User enter email Id \"([^\"]*)\" in email id Field$")
    public void userEnterEmailIdInEmailIdField(String vemail) {
        new LoginPage().setEmailField(vemail);
    }

    @And("^User enter password \"([^\"]*)\" in password Field$")
    public void userEnterPasswordInPasswordField(String vpassword) {
        new LoginPage().setPasswordField(vpassword);
    }

    @Then("^User can see logout link$")
    public void userCanSeeLogoutLink() {
        Assert.assertEquals("", "Log out", new HomePage().verifyLogOutText());
    }

    @And("^User click on logout button$")
    public void userClickOnLogoutButton() {
        new HomePage().clickOnLogOutLink();
    }

    @Then("^User can login successfully$")
    public void userCanLoginSuccessfully() {
        Assert.assertEquals("", "Log in", new HomePage().verifyloginText());
    }

}
