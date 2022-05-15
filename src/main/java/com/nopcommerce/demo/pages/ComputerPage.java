package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {
    private static final Logger log= LogManager.getLogger(HomePage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement computersText;


    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h2[1]/a[1]")
    WebElement desktopsLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/h2[1]/a[1]")
    WebElement notebooksLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/h2[1]/a[1]")
    WebElement softwareLink;

    public String
    getComputerText(){
        log.info("getting  text from ComputersText"+computersText.toString()+"<br>");
        return getTextFromElement(computersText);
    }
    public void clickOnDesktopLink(){
        clickOnElement(desktopsLink);
        log.info("Clicking on DesktopsLink "+desktopsLink .toString()+ "<br>");
    }

    public void clickOnNotepadeLink(){
        clickOnElement(notebooksLink);
        log.info("Clicking on NotebooksLink"+ notebooksLink.toString()+ "<br>");}

    public void clickOnSoftWareLink(){
        log.info("Clicking on SoftwareLink "+ softwareLink.toString()+ "<br>");
        clickOnElement(softwareLink);}
}



