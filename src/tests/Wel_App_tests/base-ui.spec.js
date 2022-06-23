const {test} = require('@playwright/test');
const {url} = require('../../consts/url');
const {credentials} = require('../../consts/credentials');
const {LoginPage} = require("../../pages/LoginPage");
const {MyAccountPage} = require("../../pages/MyAccountPage");
const {BasePage} = require("../../pages/BasePage");
const {FlyOutMenuPage} = require("../../pages/FlyOutMenuPage");
const {SyllabusPage} = require("../../pages/SyllabusPage");
const {GenericUIPage} = require("../../pages/ExamUI/GenericUIPage");

test.describe('Assessment-Generic UI', () => {
    test('Take Lesson Assessment', async ({page}) => {

        await page.goto(url);
        const basePage = new BasePage(page);
        await basePage.openCourse(credentials);

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

