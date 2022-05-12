
class GoToWelLoginPage {

  async welLoginPage(browser) {     
        const context= await browser.newContext();
        const page = await context.newPage();
       

        await context.httpCredentials({
                username: 'devmonkey',
                password: 'd3Vm0nK3y',
        });
        await page.goto("https://uat.efficientlearning.com");   
        return page; 
   }
   
}
module.exports= {GoToWelLoginPage};