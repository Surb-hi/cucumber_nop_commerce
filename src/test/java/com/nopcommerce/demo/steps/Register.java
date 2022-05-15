package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Register {
    @Given("^User should in home page$")
    public void userShouldInHomePage() {
    }

    @When("^User click on register link$")
    public void userClickOnRegisterLink() {
        new HomePage().clickOnRegister();
    }

    @Then("^User can see the registeration text$")
    public void userCanSeeTheRegisterationText() {
        Assert.assertEquals("", "Register", new RegisterPage().verifyRegister());
    }

    @And("^User click on register button$")
    public void userClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton1();
    }

    @Then("^User can see the error message \"([^\"]*)\"$")
    public void userCanSeeTheErrorMessage(String errormessage) {
        Assert.assertEquals("Error message for First name", "First name is required.", new RegisterPage().verifyFirstname());
        Assert.assertEquals("Error message for Last name", "Last name is required.", new RegisterPage().verifyLastname());
        Assert.assertEquals("Error message for Email", "Email is required.", new RegisterPage().verifyemail());
        Assert.assertEquals("Error message for Password", "Password is required.", new RegisterPage().verifypassword());
        Assert.assertEquals("Error message for ConfirmPassword", "Password is required.", new RegisterPage().verifyconfirmPassword());
    }

    @And("^User select \"([^\"]*)\" from radio button$")
    public void userSelectFromRadioButton(String female) {
        new RegisterPage().clickOnFemaleButton();
    }

    @And("^User enter Firstname \"([^\"]*)\" in Firstname field$")
    public void userEnterFirstnameInFirstnameField(String firstname) {
        new RegisterPage().setFirstName(firstname);
    }

    @And("^User enter Lastname \"([^\"]*)\" in Lastname field$")
    public void userEnterLastnameInLastnameField(String lastname) {
        new RegisterPage().setLastname(lastname);
    }

    @And("^User select birthDay \"([^\"]*)\"from drop down$")
    public void userSelectBirthDayFromDropDown(String birthday) {
        new RegisterPage().selectBirthDate(birthday);
    }

    @And("^User select birthMonth \"([^\"]*)\" from drop down$")
    public void userSelectBirthMonthFromDropDown(String birthmonth) {
        new RegisterPage().selectBirthMonth(birthmonth);
    }

    @And("^User select birthYear \"([^\"]*)\" from drop down$")
    public void userSelectBirthYearFromDropDown(String birthyear) {
        new RegisterPage().selectBirthYear(birthyear);
    }

    @And("^User enter Email \"([^\"]*)\" in Email field$")
    public void userEnterEmailInEmailField(String email) {
        new RegisterPage().setEmail(email);
    }

    @And("^User enter Password \"([^\"]*)\" in Password field$")
    public void userEnterPasswordInPasswordField(String password) {
        new RegisterPage().setpassword(password);
    }

    @And("^User enter ConfirmPassword \"([^\"]*)\" in ConfirmPassword field$")
    public void userEnterConfirmPasswordInConfirmPasswordField(String confirmpassword) {
        new RegisterPage().setConfirmPassword(confirmpassword);
    }

    @Then("^User register successfully$")
    public void userRegisterSuccessfully() {
        Assert.assertEquals("", "Your registration completed", new RegisterPage().verifyYourRegisterCompletedText());
    }

}
