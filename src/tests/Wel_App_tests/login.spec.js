const {test, expect} = require('@playwright/test');
const {url} = require('../../consts/url');
const {credentials} = require('../../consts/credentials');
const {LoginPage} = require('../../pages/LoginPage');
const {MyAccountPage} = require("../../pages/MyAccountPage");
const {FlyOutMenuPage} = require("../../pages/FlyOutMenuPage");
const {BasePage} = require ("../../pages/BasePage");


test.describe('My Product', () => {
    test('Log to MyAccount and Launch Product', async ({page}) => {
        await page.goto(url);
        const basePage = new BasePage(page);
        await basePage.openCourse(credentials);

        const flyOutMenuPage = new FlyOutMenuPage(page);
        await flyOutMenuPage.clickOnFlashcards();
        await flyOutMenuPage.clickOnMetric();
        await flyOutMenuPage.clickOnSyllabus();
        await flyOutMenuPage.clickOnNotesHighlights();
    })
});
