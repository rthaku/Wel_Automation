const {test, expect} = require('@playwright/test');
const {url} = require('../consts/url');
const {credentials} = require('../consts/credentials');
const {LoginPage} = require("../pages/LoginPage");
const {MyAccountPage} = require("../pages/MyAccountPage");
const {FlyOutMenuPage} = require("../pages/FlyOutMenuPage");
const {SyllabusPage} = require("../pages/SyllabusPage");
const {GenericUIPage} = require("../pages/ExamUI/GenericUIPage");

test.describe('Description of the suite', () => {
  test.only('Login to MyAccount', async ({browser, page,}) => {

    await page.goto(url);
    const loginPage = new LoginPage(page);
    await loginPage.login(credentials);
    await loginPage.awaitMyAccount();

    const myAccountPage = new MyAccountPage(page);
    await myAccountPage.launchProduct();
    await myAccountPage.acceptEULA()

    const flyOutMenuPage = new FlyOutMenuPage(page);
    await flyOutMenuPage.clickOnSyllabus();

    const syllabus = new SyllabusPage(page);
    await syllabus.clickOnExpandAll();
    await syllabus.clickOnLessonAssignment();
    await syllabus.clickOnTakeAssessment();
    await syllabus.clickOnBeginAssessment();

    const genericUI = new GenericUIPage(page);
    await genericUI.submitWithSaving();
  });
});

