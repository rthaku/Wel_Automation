const {test} = require ('@playwright/test');
const {weltoolurl} = require ('../../consts/url');
const {WelTool_credentials} = require ('../../consts/credentials');
const {WelTools_LoginPage} = require ("../../pages/Wel_Tools/WelTools_LoginPage");
const {ConsumerPage} = require ("../../pages/Wel_Tools/ConsumerPage");


test.describe ('Wel Tools-Add and delete the consumer', () => {
    test
    ('Wel Tools functionality verification', async ({page}) => {

        await page.goto (weltoolurl);
        const weltools_loginPage = new WelTools_LoginPage (page);
        await weltools_loginPage.loginToWelTools (WelTool_credentials);

        const consumerPage = new ConsumerPage (page)
        await consumerPage.clickOnConsumerBtn ();
        await consumerPage.addNewConsumer ();
        await consumerPage.searchAddedConsumer ();
        await consumerPage.deleteAddedConsumer ();
    });
});