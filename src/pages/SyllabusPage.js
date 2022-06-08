const {expect} = require("@playwright/test");

exports.SyllabusPage = class SyllabusPage {
  constructor(page) {
    this.page = page;
    this.exandAll = page.locator('text=Expand All');
    this.lessonAssignment = page.locator('[data-type="lesson assignment"]');
    this.takeAssessment = page.locator('text=Take an Assessment');
    this.beginAssessment = page.locator('text=Begin Assessment');
  }

  async clickOnExpandAll() {
    await expect(this.exandAll).toBeVisible();
    await this.exandAll.click();
  }

  async clickOnLessonAssignment() {
    await this.lessonAssignment.first().click();
  }

  async clickOnTakeAssessment() {
    await expect(this.takeAssessment).toBeVisible();
    await this.takeAssessment.click();
  }

  async clickOnBeginAssessment() {
    await expect(this.beginAssessment).toBeVisible();
    await this.beginAssessment.click();
  }
}
