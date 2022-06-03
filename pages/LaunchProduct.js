const { expect } = require("@playwright/test");

    class LaunchProduct  {
 
    constructor(page)
    
    {
        this.page = page;
        this.goToCourse = page.locator('.btn-primary');
        this.eulabutton= page.locator('text=I Accept');
        
    }

    async launchProduct()
    {
       await this.goToCourse.click();
       await expect(this.eulabutton).toBeVisible({true:35000});
       await this.eulabutton.click();
       await expect(this.page).toHaveURL(/.*dashboard/, {timeout:15000});
       return this.page;
    }

   
}

module.exports= {LaunchProduct};