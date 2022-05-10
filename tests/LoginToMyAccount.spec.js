const { test,expect } = require("@playwright/test");
const{loginPage, LoginPage}= require('../pages/LoginPage');

test('Login to MyAccountPage', async({page})=> {
 const loginPage= new LoginPage(page);
 const username ="rajshr.72+alm2@gmail.com";
 const password ="Password@1234";
 
await loginPage.loginToMyAccount(username,password);

});


