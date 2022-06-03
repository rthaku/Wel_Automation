const {expect} = require("@playwright/test");

class TestBankPage {   
    
    constructor(page)
    {
        this.page = page;
        this.mainNavigation = page.locator('[aria-label="Main Navigation"]');
        this.testbank = page.locator('span:has-text("Test Bank")');
    }


    async clickOnTestBankIcon()
    {
      await this.mainNavigation.click();
       await expect (this.testbank).toBeVisible();
       await this.testbank.click();
    }



}

module.exports= {TestBankPage};