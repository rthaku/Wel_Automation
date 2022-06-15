const {expect} = require ("@playwright/test");

exports.ConsumerPage = class ConsumerPage {
    rowCount;

    constructor(page) {
        this.page = page;
        this.consumer = page.locator ('text=CONSUMERS');
        this.home = page.locator ('text=Home');
        this.logout = page.locator ('input[value=\'Logout\']');
        this.plusConsumerBtn = page.locator ('text=+');
        this.closeBtn = page.locator ('text=Close');
        this.footer = page.locator ('.fixed-table-pagination');
        this.dropUpCountBtn = page.locator ('.btn-group.dropdown.dropup');
        this.pagination = page.locator ('.float-right pagination');
        this.dropdwnDetails = page.locator ('.btn.btn-secondary.dropdown-toggle');
        this.dropdwnListDetails = page.locator ('//div[@class=\'dropdown-menu show\']/a');
    }

    async clickOnConsumerBtn() {
        await this.consumer.click ();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/consumers');
    }

    async clickOnPlusConsumerBtn() {
        await expect (this.plusConsumerBtn).toBeVisible ();
        await this.plusConsumerBtn.click ();
        await expect (this.closeBtn).toBeVisible ();
        await this.closeBtn.click ();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/consumers');
    }

    async clickOnlogOut() {
        await expect (this.logout).toBeVisible ();
        await this.logout.click ();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/login?logout')
    }

    async footerDetails() {
        await expect (this.footer).toBeVisible ();
        await expect (this.dropUpCountBtn).toBeVisible ();
        await expect (this.pagination).toBeTruthy();
    }

    async rowsPerPageDetails() {
        await this.dropdwnDetails.click ();
        await expect (this.dropdwnListDetails.nth (0)).toHaveText ('10');
        await expect (this.dropdwnListDetails.nth (1)).toHaveText ('25');
        await expect (this.dropdwnListDetails.nth (2)).toHaveText ('50');
        await expect (this.dropdwnListDetails.nth (3)).toHaveText ('100');
        await this.dropdwnDetails.click ();
    }


}




