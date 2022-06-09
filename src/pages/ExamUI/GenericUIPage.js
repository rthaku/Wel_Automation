const {expect} = require("@playwright/test");

exports.GenericUIPage = class GenericUIPage {
  constructor(page) {
    this.end = page.locator('.cta_button.end');
    this.saveandquit = page.locator('button[role="button"]:has-text("Save and Quit")');
    this.answerrow = page.locator('tr[class=answer_row]');
  }

  async submitWithSaving() {
    await this.answerrow.first().click();
    await this.end.last().click();
    await this.saveandquit.click();
  }
}