const {expect} = require("@playwright/test");

class SyllabusPage {   
    
    constructor(page)
    {
        this.page = page;
        this.mainNavigation = page.locator('[aria-label="Main Navigation"]');
        this.syllabus = page.locator('text=Syllabus');
        this.exandAll = page.locator('text=Expand All');
        this.lessonAssignment = page.locator('[data-type="lesson assignment"]');
        this.takeAssessment = page.locator('text=Take an Assessment');
        this.beginAssessment = page.locator('text=Begin Assessment');
    
    }
    
    async clickOnSyllabus()
    {
       await this.mainNavigation.click();
       await expect (this.syllabus).toBeVisible();
       await this.syllabus.click();
        
    }

    async clickOnExpandAll()
    {
        await expect (this.exandAll).toBeVisible();
        await this.exandAll.click();
    }

    async clickOnLessonAssignment()
    {
        await this.lessonAssignment.first().click();
    }

    async clickOnTakeAssessment()
    {
     await expect (this.takeAssessment).toBeVisible();
     await this.takeAssessment.click();
    }

    async clickOnBeginAssessment()
    {
     await expect (this.beginAssessment).toBeVisible();
     await this.beginAssessment.click();
     return this.page;
    }
    





}

module.exports= {SyllabusPage};