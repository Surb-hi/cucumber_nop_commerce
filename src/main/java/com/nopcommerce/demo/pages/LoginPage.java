package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "Email")
    WebElement emailField;


    @FindBy(name = "Password")
    WebElement passwordField;


    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;

    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;

    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]")
    WebElement errorMsg;

    public String verifyErrorMsgText() {
        Reporter.log("getting Error text from " + errorMsg.toString() + "<br>");
        return getTextFromElement(errorMsg);
    }

    public void setEmailField(String emailField1) {
        Reporter.log("Enter Email" + emailField1 + "to Email field" + emailField.toString() + "<br>");
        sendTextToElement(emailField, emailField1);
    }

    public String verifyWelcomeText() {
        Reporter.log("getting welcome text from " + welcomeText.toString() + "<br>");
        return getTextFromElement(welcomeText);
    }

    public void clickOnLoginButton() {
        Reporter.log("Clicking on loginButton" + loginButton.toString() + "<br>");
        clickOnElement(loginButton);
    }

    public void setPasswordField(String Password) {
        Reporter.log("Enter password " + Password + " to password field " + passwordField.toString() + "<br>");
        sendTextToElement(passwordField, Password);
    }
}
