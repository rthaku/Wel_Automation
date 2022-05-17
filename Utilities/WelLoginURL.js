const base= require('@playwright/test');

exports.test= base.test.extend(
{
    url:"https://login.non-prod.efficientlearning.com/wel/login"
}

);