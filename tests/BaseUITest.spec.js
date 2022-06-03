const{ GoToWelLoginPage }= require('../pages/GoToWelLoginPage');
const { LaunchProduct } = require("../pages/LaunchProduct");
const { SyllabusPage } = require('../pages/SyllabusPage');
const { ExamPage } = require('../pages/ExamUI/ExamPage');
const { GenericUIPage } = require('../pages/ExamUI/GenericUIPage');
const loginDetails=JSON.parse(JSON.stringify(require('../Utilities/loginData.json')));
const {test} =require('../Utilities/WelLoginURL');
    
test.only('Login to MyAccount', async ({browser, page,}) => {

    const wellogin = new GoToWelLoginPage(page);
    const exampage= new ExamPage(page);
    const email = "rajshr.72+alm2@gmail.com";
    const passWord = "Password@1234";

    const myaccountpage= await wellogin.myAccountPage(browser, email, passWord);
    const launch = new LaunchProduct(myaccountpage);
    const navigation= await launch.launchProduct();
    const syllabus = new SyllabusPage(navigation);
    await syllabus.clickOnSyllabus();
    await syllabus.clickOnExpandAll();
    await syllabus.clickOnLessonAssignment();
    await syllabus.clickOnTakeAssessment();
    const examPageUI = await syllabus.clickOnBeginAssessment();
    const genericUI = new GenericUIPage(examPageUI);
    await genericUI.submitWithSaving();

  });

