package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DesktopsPage extends Utility {
    private static final Logger log= LogManager.getLogger(DesktopsPage.class.getName());

    public DesktopsPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h1[contains(text(),'Desktops')]")
    WebElement desktopstext;

    @FindBy(xpath = "//select[@id='products-orderby']")
    WebElement sortby;


    @FindBy(xpath = "//select[@id='products-pagesize']")
    WebElement display;


    @FindBy(xpath = "//a[contains(text(),'List')]")
    WebElement selectProductList;


    @FindBy(xpath ="//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/h2[1]/a[1]")
    WebElement bulidOwnComputer;

    public void clickOnbulidOwnComputer() {
        clickOnElement(bulidOwnComputer);
        log.info("Clicking on bulidOwnComputer "+ bulidOwnComputer.toString()+ "<br>");
    }
    public void clickOnList() {
        clickOnElement(selectProductList);
        log.info("Clicking on ProductList"+ selectProductList.toString()+ "<br>");
    }
    public void setSelectDisplayProductList(String display1) {
        selectByVisibleTextFromDropDown(display, display1);
        log.info("Selecting Display"+display1+" from dropdown "+display.toString() + "<br>");
    }
    public void setSelectSortByProductList(String sortBy1) {
        selectByVisibleTextFromDropDown(sortby, sortBy1);
        log.info("Selecting Sortby"+sortBy1+" from dropdown "+sortby.toString() + "<br>");
    }
    public String getDekstopText() {
        log.info("getting  text from DeksTop"+desktopstext.toString()+"<br>");
        return getTextFromElement(desktopstext);
    }
}
