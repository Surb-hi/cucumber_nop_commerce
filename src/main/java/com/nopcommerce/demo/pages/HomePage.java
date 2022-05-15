package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(linkText = "Computers")
    WebElement computerTab;

    @FindBy(linkText = "Electronics")
    WebElement electronicsTab;

    @FindBy(linkText = "Apparel")
    WebElement apparelTab;

    @FindBy(linkText = "Digital downloads")
    WebElement digitaldownloadsTab;


    @FindBy(linkText = "Books")
    WebElement booksTab;

    @FindBy(linkText = "Jewelry")
    WebElement jewelryTab;

    @FindBy(linkText = "Gift Cards")
    WebElement giftCardsTab;

    @FindBy(linkText = "Log in")
    WebElement loginlink;


    @FindBy(linkText = "Register")
    WebElement registertionLink;

    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logOutLink;


    @FindBy(xpath = "//body/div[6]/div[1]/div[2]/div[1]/a[1]/img[1]")
    WebElement logoLink;


    @FindBy(xpath = "//a[contains(text(),'My account')]")
    WebElement myAccountLink;

    public void clickOnMyAccount() {
        clickOnElement(myAccountLink);
        log.info("Clicking on myAccountLink" + myAccountLink.toString() + "<br>");
    }

    public void clickOnComputer() {
        clickOnElement(computerTab);
        log.info("Clicking on computerTab" + computerTab.toString() + "<br>");
    }

    public void clickOnElectronuces() {
        clickOnElement(electronicsTab);
        log.info("Clicking on ElectronicsTab " + electronicsTab.toString() + "<br>");
    }

    public void clickOnApparel() {
        clickOnElement(apparelTab);
        log.info("Clicking on ApparelTab" + apparelTab.toString() + "<br>");
    }

    public void clickOnDigital() {
        clickOnElement(digitaldownloadsTab);
        log.info("Clicking on DigitaldownloadsTab" + digitaldownloadsTab.toString() + "<br>");
    }

    public void clickOnBook() {
        clickOnElement(booksTab);
        log.info("Clicking on Book" + booksTab.toString() + "<br>");
    }


    public void clickOnJewelary() {
        clickOnElement(jewelryTab);
        log.info("Clicking on JewelryTab" + jewelryTab.toString() + "<br>");
    }

    public void clickOnGiftCard() {
        clickOnElement(giftCardsTab);
        log.info("Clicking on GiftCardsTab" + giftCardsTab.toString() + "<br>");
    }

    public void clickOnLogin() {
        clickOnElement(loginlink);
        log.info("Clicking on loginlink" + loginlink.toString() + "<br>");
    }

    public String verifyloginText() {
        log.info("getting  text from loginlink" + loginlink.toString() + "<br>");
        return getTextFromElement(loginlink);
    }

    public void clickOnRegister() {
        clickOnElement(registertionLink);
        log.info("Clicking on registertionLink" + registertionLink.toString() + "<br>");
    }

    public void clickOnLogOutLink() {
        clickOnElement(logOutLink);
        log.info("Clicking on logOutLink" + logOutLink.toString() + "<br>");
    }

    public String verifyLogOutText() {
        log.info("getting  text from logOutLink" + logOutLink.toString() + "<br>");
        return getTextFromElement(logOutLink);
    }

    public void clickOnLogo() {
        clickOnElement(logoLink);
        log.info("Clicking on logoLink" + logoLink.toString() + "<br>");
    }

}
