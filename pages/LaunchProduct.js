const { expect} = require("@playwright/test");

class LaunchProduct {

    constructor(page)
    {
        this.page = page;
        this.userName = page.locator();
        this.password = page.locator("#password");
        this.logInButton = page.locator("[value='LOG IN']");
        this.productPageTitle = page.locator('.product-page-title');
        this.title =page.locator('.title');
    }

    async launchProduct(username, password)
    
    {
        await this.page.goto("https://login.non-prod.efficientlearning.com/wel/login");
        await this.userName.type(username);
        await this.password.type(password);
        await this.logInButton.click();
        await expect(this.page).toHaveURL(/.*my-account/);
        await expect(this.title).toHaveText(/Welcome, .*/);
    }
}

module.exports= {LaunchProduct};