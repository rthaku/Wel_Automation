const {expect} = require ("@playwright/test");

exports.ConsumerPage = class ConsumerPage {
    rowCount;

    constructor(page) {
        this.page = page;
        this.consumer = page.locator ('text=CONSUMERS');
        this.home = page.locator ('text=Home');
        this.logout = page.locator ('input[value=\'Logout\']');
        this.plusConsumerBtn = page.locator ('text=+');
        this.createConsumerlabel = page.locator ('#ModalLongTitle');
        this.closeBtn = page.locator ('text=Close');
        this.footer = page.locator ('.fixed-table-pagination');
        this.dropUpCountBtn = page.locator ('.btn-group.dropdown.dropup');
        this.pagination = page.locator ('.float-right pagination');
        this.dropdwnDetails = page.locator ('.btn.btn-secondary.dropdown-toggle');
        this.dropdwnListDetails = page.locator ('//div[@class=\'dropdown-menu show\']/a');
        this.addConsumer = page.locator ('input[name="description"]');
        this.createBtn = page.locator ('button:has-text("Create")');
        this.lockContentOption = page.locator ('input[name="lock_content"]');
        this.hasPinOption = page.locator ('input[name="require_has_pin"]');
        this.saveBtn = page.locator ('#save-btn');
        this.descriptionSearchBox = page.locator ('input[type="search"]');
        this.searchResult = page.locator ("//table[@id='consumers-table']/tbody");
        this.deleteBtn = page.locator ('text=Delete');
        this.noRecordText = page.locator ('text=No matching records found');
        this.consumerTable = page.locator ('#consumers-table');
        this.columnId = page.locator ('th[data-field=id] div');
        this.columnKey = page.locator ('th[data-field=key] div');
        this.columnSecret = page.locator ('th[data-field=secret]');
        this.columnDescription = page.locator ('th[data-field=description]');
        this.columnCustomID = page.locator ('th[data-field=param_custom_id]');
        this.columnLockContent = page.locator ('th[data-field=lock_content]');
        this.columnHasPin = page.locator ('th[data-field=require_has_pin]');
        this.searchForColumns = page.locator ('div[class=filter-control]');
        this.sortForColumns = page.locator('div[class=\'th-inner sortable both\']');
        this.inputconsumerID = page.locator('label[for=\'id\']');
        this.inputConsumerName = page.locator('//input[@id=\'description\']');
        this.inputConsumerSecret = page.locator(' //input[@id=\'secret\']');
        this.inputCustomUserID = page.locator(' //input[@id=\'param_custom_id\']');
        this.inputLockContent = page.locator('//input[@id=\'lock_content\']');
        this.inputHasPIN = page.locator(' //input[@id=\'require_has_pin\']');
    }

    async clickOnConsumerBtn() {
        await this.consumer.click ();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/consumers');
    }

    async clickOnPlusConsumerBtn() {
        await expect (this.plusConsumerBtn).toBeVisible ();
        await this.plusConsumerBtn.click ();
        await expect (this.createConsumerlabel).toBeVisible ();
        await expect (this.closeBtn).toBeVisible ();
        await this.closeBtn.click ();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/consumers');
    }

    async footerDetails() {
        await expect (this.footer).toBeVisible ();
        await expect (this.dropUpCountBtn).toBeVisible ();
        await expect (this.pagination).toBeTruthy ();
    }

    async rowsPerPageDetails() {
        await this.dropdwnDetails.click ();
        await expect (this.dropdwnListDetails.nth (0)).toHaveText ('10');
        await expect (this.dropdwnListDetails.nth (1)).toHaveText ('25');
        await expect (this.dropdwnListDetails.nth (2)).toHaveText ('50');
        await expect (this.dropdwnListDetails.nth (3)).toHaveText ('100');
        await this.dropdwnDetails.click ();
    }

    async verifyConsumerColumns() {
        await expect (this.consumerTable).toBeVisible ();
        await expect (this.columnId.nth (0)).toContainText ('ID');
        await expect (this.columnKey.nth (0)).toContainText ('Key');
        await expect (this.columnSecret).toBeVisible ();
        await expect (this.columnDescription).toBeVisible ();
        await expect (this.columnCustomID).toBeVisible ();
        await expect (this.columnLockContent).toBeVisible ();
        await expect (this.columnHasPin).toBeVisible ();
        await expect (this.searchForColumns).toHaveCount (4);
        await expect (this.sortForColumns).toHaveCount(4);
    }

    async addNewConsumer() {
        await this.plusConsumerBtn.click ();
        await expect (this.createConsumerlabel).toBeVisible ();
        await this.addConsumer.fill ('addconsumertest');
        await this.createBtn.click ();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/add/consumer');
        await this.lockContentOption.check ();
        await this.hasPinOption.check ();
        await this.saveBtn.click ();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/update/consumer');
    }

    async searchAddedConsumer() {
        await this.consumer.click ();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/consumers');
        await this.descriptionSearchBox.nth (2).click ();
        await this.descriptionSearchBox.nth (2).type ('addconsumertest');
        await this.searchResult.click ();
        await this.inputconsumerID.not.toBeEditable();
        await this.inputConsumerName.toBeEditable();
        await this.inputConsumerSecret.toBeEditable();
        await this.inputCustomUserID.toBeEditable();
        await this.inputLockContent.toBeChecked();
        await this.inputHasPIN.toBeChecked();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/consumer?id');
    }

    async deleteAddedConsumer() {
        await this.deleteBtn.click ();
        await this.descriptionSearchBox.nth (2).click ();
        await this.descriptionSearchBox.nth (2).type ('addconsumertest');
        await expect (this.noRecordText).toBeVisible ();
    }

    async clickOnlogOut() {
        await expect (this.logout).toBeVisible ();
        await this.logout.click ();
        await expect (this.page).toHaveURL ('https://services-internal.non-prod.efficientlearning.com/wel-tools/login?logout')
    }


}




