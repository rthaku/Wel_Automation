const { test, expect} = require("@playwright/test");  // required to import this module so we can run the test
const { LaunchProduct } = require("../pages/LaunchProduct");
const {LoginToMyAccount}= require('../pages/LoginToMyAccount');

test('Log to MyAccount and Launch Product', async function ({page}) {

  const login = new LoginToMyAccount(page);
  const launch= new LaunchProduct(page);
  const username = "rajshr.72+alm2@gmail.com";
  const password = "Password@1234";
    
    
    await login.Login(username, password);
    await launch.launchProduct();
    
  });

