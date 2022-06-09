const {test, expect} = require('@playwright/test');
const {url} = require('../consts/url');
const {credentials} = require('../consts/credentials');
const {LoginPage} = require('../pages/LoginPage');
const {MyAccountPage} = require("../pages/MyAccountPage");
const {FlyOutMenuPage} = require("../pages/FlyOutMenuPage");


test.describe('My Product', () => {
  test('Log to MyAccount and Launch Product', async ({page}) => {
    await page.goto(url);
    const loginPage = new LoginPage(page);
    await loginPage.login(credentials);
    await loginPage.awaitMyAccount();

    const myAccountPage = new MyAccountPage(page);
    await myAccountPage.launchProduct();
    await myAccountPage.acceptEULA()

    const flyOutMenuPage = new FlyOutMenuPage(page);
    await flyOutMenuPage.clickOnFlashcards();
    await flyOutMenuPage.clickOnMetric();
    await flyOutMenuPage.clickOnSyllabus();
    await flyOutMenuPage.clickOnNotesHighlights();
  })
});
