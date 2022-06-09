const {expect} = require("@playwright/test");

class ConsumerPage {

    constructor(page) {
        this.page = page;
        this.consumer = page.locator('text=CONSUMERS');
        this.home = page.locator('text=Home');
        this.logout = page.locator('text=Logout');
        this.plusConsumerBtn = page.locator('text=+');
        this.closeBtn = page.locator('text=Close');
        this.footer = page.locator('fixed-table-pagination')
    }

    async clickOnConsumerBtn() {
        await this.consumer.click();
        await expect(page).toHaveURL('https://services-internal.non-prod.efficientlearning.com/wel-tools/consumers');
    }

    async clickOnPlusConsumerBtn() {
        await expect(this.plusConsumerBtn).toBeVisible();
        await this.clickOnConsumerBtn.click();
        await expect(this.closeBtn).toBeVisible();
        await this.closeBtn.click();
        await expect(page).toHaveURL('https://services-internal.non-prod.efficientlearning.com/wel-tools/consumers');
    }

    async logOut() {
        await expect(this.logout).toBeVisible();
        await page.locator('text=Logout').click();
        await expect(page).toHaveURL('https://services-internal.non-prod.efficientlearning.com/wel-tools/login?logout')

    }

    async footerDetails() {


    }


}

module.exports = {ConsumerPage};
