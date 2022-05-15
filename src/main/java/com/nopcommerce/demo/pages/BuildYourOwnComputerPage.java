package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {
private static final Logger log= LogManager.getLogger(HomePage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement BuildyourowncomputerText;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement ProcessorDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@name='product_attribute_2']")
    WebElement Ramdropdown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement HDDradios320;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_6']")
    WebElement HDDradios400;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_9']")
    WebElement VistaPremium;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_8']")
    WebElement VistaHome1;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_12']")
    WebElement TotalCommander1;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement MicrosoftOffice1;
    @CacheLookup

    @FindBy(xpath = "//input[@id='product_attribute_5_11']")
    WebElement AcrobatReader1;


    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement AddToCardbutton;


    @CacheLookup
    @FindBy(xpath = "//p[@class='content']")
    WebElement Theproducthasbeenaddedtoyourshoppingcart;

    public String verifProductAddEdInToCardText() {
        log.info("getting  text from The product has been added to your shopping cart"+ Theproducthasbeenaddedtoyourshoppingcart.toString()+"<br>");
        return getTextFromElement(Theproducthasbeenaddedtoyourshoppingcart);
    }


    public String verifBulidComputerText() {
        log.info("getting  text from BuildyourowncomputerText"+BuildyourowncomputerText.toString()+"<br>");
        return getTextFromElement(BuildyourowncomputerText);
    }

    public void selectProcessorDropDown(String processer) {
        selectByVisibleTextFromDropDown(ProcessorDropDown, processer);
        log.info("Selecting ProcessorDropDown "+ processer+" from dropdown "+ProcessorDropDown.toString() + "<br>");
    }

    public void selectRam(String Ram) {
        selectByVisibleTextFromDropDown(Ramdropdown, Ram);
        log.info("Selecting Ramdropdown "+Ram +" from dropdown "+Ramdropdown.toString() + "<br>");
    }
    public void getHdd(String Hddtext) {
        if (Hddtext == "320GB") {
            log.info("Clicking on 320GB"+ HDDradios320.toString()+ "<br>");
            clickOnElement(HDDradios320);
        } else {
            log.info("Clicking on 400GB"+ HDDradios400.toString()+ "<br>");
            clickOnElement(HDDradios400);
        }
    }
    public void getOsRadio(String radio) {
        if (radio == "VistaHome") {
            log.info("Clicking on VistaHome "+ VistaHome1.toString()+ "<br>");
            clickOnElement(VistaHome1);
        } else {
            log.info("Clicking on VistaPremium"+ VistaPremium.toString()+ "<br>");
            clickOnElement(VistaPremium);

        }
    }
    public void clickOnSoftwareCheckBox(String software) {
        if (software == "MicrosoftOffice") {
            log.info("Clicking on MicrosoftOffice"+ MicrosoftOffice1.toString()+ "<br>");
            clickOnElement(MicrosoftOffice1);
        }
        if (software == "TotalCommander") {
            log.info("Clicking on TotalCommander"+ TotalCommander1.toString()+ "<br>");
            clickOnElement(TotalCommander1);
        }
        if (software == "AcrobatReader") {
            log.info("Clicking on AcrobatReader"+ AcrobatReader1.toString()+ "<br>");
            clickOnElement(AcrobatReader1);
        }
    }
    public void clickOnAddToCard() {
        clickOnElement(AddToCardbutton);
        log.info("Clicking on AddToCardbutton"+AddToCardbutton.toString()+ "<br>");
    }
}
