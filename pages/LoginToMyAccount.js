const {expect} = require('@playwright/test');

class LoginToMyAccount {   
    
    constructor(page)
    {
        this.page = page;
        this.userName = page.locator("#username");
        this.password = page.locator("#password");
        this.logInButton = page.locator("[value='LOG IN']");
        this.productPageTitle = page.locator('.product-page-title');
        this.title =page.locator('.title');       
    }

    async Login(username,password)
    {
        await this.userName.type(username);
        await this.password.type(password);
        await this.logInButton.click();
        await expect(this.page).toHaveURL(/.*my-account/,{timeout:5000});
        await expect(this.title).toHaveText(/Welcome, .*/);
    }
}

module.exports= {LoginToMyAccount};