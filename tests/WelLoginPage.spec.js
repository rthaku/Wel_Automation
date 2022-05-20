const { FlyoutMenu } = require("../pages/flyoutMenu");
const { LaunchProduct } = require("../pages/LaunchProduct");
const {LoginToMyAccount}= require('../pages/LoginToMyAccount');
const loginDetails=JSON.parse(JSON.stringify(require('../Utilities/loginData.json')));
const {test} =require('../Utilities/WelLoginURL');
    

test('Log to MyAccount and Launch Product', async function ({page, url}) {

  const login = new LoginToMyAccount(page);
  const launch= new LaunchProduct(page);
  const flyoutmenu = new FlyoutMenu(page);
  
    
    await page.goto(url);    
    await login.Login(loginDetails.username, loginDetails.password);
    await launch.launchProduct();
    await flyoutmenu.clickOnFlashcards();
    await flyoutmenu.clickOnMetric();
    await flyoutmenu.clickOnSyllabus();
    await flyoutmenu.clickOnNotesHighlights();
    
  });