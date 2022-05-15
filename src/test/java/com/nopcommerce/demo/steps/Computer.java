package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Computer {
    @Given("^User should in Home page$")
    public void userShouldInHomePage() {

    }

    @When("^User click on Computer$")
    public void userClickOnComputer() {
        new HomePage().clickOnComputer();
    }

    @Then("^User should sucessfully navigate to computer page$")
    public void userShouldSucessfullyNavigateToComputerPage() {
        Assert.assertEquals("", "Computers", new ComputerPage().getComputerText());
    }

    @And("^User click on Desktops link$")
    public void userClickOnDesktopsLink() {
        new ComputerPage().clickOnDesktopLink();
    }

    @Then("^User can see the desktop text$")
    public void userCanSeeTheDesktopText() {
        Assert.assertEquals("", "Desktops", new DesktopsPage().getDekstopText());
    }

    @And("^User click on Build your own computer link$")
    public void userClickOnBuildYourOwnComputerLink() {
        new DesktopsPage().clickOnbulidOwnComputer();
    }

    @And("^User select processor \"([^\"]*)\" from drop down$")
    public void userSelectProcessorFromDropDown(String processor) {
        new BuildYourOwnComputerPage().selectProcessorDropDown(processor);
    }

    @And("^User select RAM \"([^\"]*)\" from drop down$")
    public void userSelectRAMFromDropDown(String ram) {
        new BuildYourOwnComputerPage().selectRam(ram);
    }

    @And("^User select HDD \"([^\"]*)\" from radio button$")
    public void userSelectHDDFromRadioButton(String hdd) {
        new BuildYourOwnComputerPage().getHdd(hdd);
    }

    @And("^User select OS \"([^\"]*)\" from radio button$")
    public void userSelectOSFromRadioButton(String os) {
        new BuildYourOwnComputerPage().getOsRadio(os);
    }


    @And("^User select Software \"([^\"]*)\" from radio button$")
    public void userSelectSoftwareFromRadioButton(String software) {
        new BuildYourOwnComputerPage().clickOnSoftwareCheckBox(software);
    }

    @And("^Click on add to card button$")
    public void clickOnAddToCardButton() {
        new BuildYourOwnComputerPage().clickOnAddToCard();
    }

    @Then("^User check product added to cart successfully$")
    public void userCheckProductAddedToCartSuccessfully() {
        Assert.assertEquals("", "The product has been added to your shopping cart", new BuildYourOwnComputerPage().verifProductAddEdInToCardText());
    }
}
