const{ GoToWelLoginPage }= require('../pages/GoToWelLoginPage');
const { LaunchProduct } = require("../pages/LaunchProduct");
const loginDetails=JSON.parse(JSON.stringify(require('../Utilities/loginData.json')));
const {test} =require('../Utilities/WelLoginURL');
    
test.only('Login to MyAccount', async ({browser, page}) => {

    const wellogin = new GoToWelLoginPage(page);
    const email = "rajshr.72+alm2@gmail.com";
    const passWord = "Password@1234";

    const myaccountpage= await wellogin.myAccountPage(browser, email, passWord);
    const launch = new LaunchProduct(myaccountpage);
    await launch.launchProduct();
  });

