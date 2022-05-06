const { test,expect } = require("@playwright/test");
const{loginPage, LoginPage}= require('../pages/LoginPage');

test('Login to MyAccountPage', async({page})=> {

 const loginPage= new LoginPage(page);
 const username ="rthakur@wiley.com";
 const password ="Password@1234";
 
await loginPage.loginToMyAccount(username,password);

});


