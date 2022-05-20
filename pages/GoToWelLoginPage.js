const { browser } = require("@playwright/test");

class GoToWelLoginPage {

        async myAccountPage(browser,email, passWord) {     
        const context= await browser.newContext({
        httpCredentials:{
                username: 'devmonkey',
                password: 'd3Vm0nK3y',
        },
        });
        const page= await context.newPage();
        await page.goto("https://uat.efficientlearning.com"); 
        await page.locator("a[aria-label='login']").click();
        await page.locator("#username").type(email);
        await page.locator("#password").type(passWord);
        await page.locator("[value='LOG IN']").click();
        return page;
        
        }

   }      

module.exports= {GoToWelLoginPage};
