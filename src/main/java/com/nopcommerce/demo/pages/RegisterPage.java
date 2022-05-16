package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h1[text()='Register']")
    WebElement registerText;


    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement maleRadioButton;


    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement femaleradioButton;


    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement Firstname;


    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastname;

    @FindBy(name = "DateOfBirthDay")
    WebElement DateofBirth;


    @FindBy(name = "DateOfBirthMonth")
    WebElement MonthofBirth;


    @FindBy(name = "DateOfBirthYear")
    WebElement YearofBirth;


    @FindBy(xpath = "//input[@id='Email']")
    WebElement email;


    @FindBy(xpath = "//input[@id='Password']")
    WebElement Password;

    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement ConfirmPassword;

    @FindBy(xpath = "//button[@id='register-button']")
    WebElement RegisterButton;


    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement Firstname1;


    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement LastName1;


    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement email1;



    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement password1;


    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement confirmPassword1;


    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement Yourregistrationcompleted;


    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement countinue;


    public void clickOnMaleButton() {
        clickOnElement(maleRadioButton);
        log.info("Clicking on maleRadioButton " + maleRadioButton.toString() + "<br>");
    }

    public void clickOnFemaleButton() {
        clickOnElement(femaleradioButton);
        log.info("Clicking on femaleradioButton" + femaleradioButton.toString() + "<br>");
    }

    public void setFirstName(String fname) {

        sendTextToElement(Firstname, fname);
        log.info("Enter fname" + fname + " to first name field " + Firstname.toString() + "<br>");
    }

    public void setLastname(String Lname) {

        sendTextToElement(lastname, Lname);
        log.info("Enter Lastname" + Lname + " to  Lastname field " + lastname.toString() + "<br>");
    }

    public void selectBirthDate(String birthDate) {
        selectByValueFromDropDown(DateofBirth, birthDate);
        log.info("Selecting date" + birthDate + " from dropdown " + DateofBirth.toString() + "<br>");
    }

    public void selectBirthMonth(String birthMonth1) {
        selectByVisibleTextFromDropDown(MonthofBirth, birthMonth1);
        log.info("Selecting month" + birthMonth1 + " from dropdown " + MonthofBirth.toString() + "<br>");
    }

    public void selectBirthYear(String birthYear) {
        selectByValueFromDropDown(YearofBirth, birthYear);
        log.info("Selecting year" + birthYear + " from dropdown " + YearofBirth.toString() + "<br>");
    }

    public void setEmail(String Email) {
        sendTextToElement(email, Email);
        log.info("Enter email" + Email + " to email field " + email.toString() + "<br>");
    }

    public void setpassword(String password) {
        sendTextToElement(Password, password);
        log.info("Enter password " + password + " to password field " + Password.toString() + "<br>");
    }

    public void setConfirmPassword(String confirmPassword) {
        sendTextToElement(ConfirmPassword, confirmPassword);
        log.info("Enter confrompassword" + confirmPassword + " to confrompassword  field " + ConfirmPassword.toString() + "<br>");
    }

    public void clickOnRegisterButton1() {
        clickOnElement(RegisterButton);
        log.info("Clicking on register Button" + RegisterButton.toString() + "<br>");
    }

    public void clickOnCountinue() {
        clickOnElement(countinue);
        log.info("Clicking on countinue Button" + countinue.toString() + "<br>");
    }

    public String verifyRegister() {
        log.info("getting Register text " + registerText.toString() + "<br>");
        return getTextFromElement(registerText);
    }

    public String verifyFirstname() {
        log.info("getting FirstName text from " + Firstname1.toString() + "<br>");
        return getTextFromElement(Firstname1);
    }

    public String verifyLastname() {
        log.info("getting LastName text from " + LastName1.toString() + "<br>");
        return getTextFromElement(LastName1);
    }
    public String verifyemail() {
        log.info("getting email text from " + email.toString() + "<br>");
        return getTextFromElement(email1);
    }

    public String verifypassword() {
        log.info("getting  password text from " + password1.toString() + "<br>");
        return getTextFromElement(password1);
    }
    public String verifyconfirmPassword() {
        log.info("getting confirmPassword text from " + confirmPassword1.toString() + "<br>");
        return getTextFromElement(confirmPassword1);
    }
    public String verifyYourRegisterCompletedText() {
        log.info("getting registraction text from " + Yourregistrationcompleted.toString() + "<br>");
        return getTextFromElement(Yourregistrationcompleted);
    }
}
