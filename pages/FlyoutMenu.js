const {expect} = require("@playwright/test");

class FlyoutMenu{   
    
    constructor(page)
    {
        this.page = page;
        this.mainNavigation = page.locator('[aria-label="Main Navigation"]');
        this.syllabus = page.locator('text=Syllabus');
        this.notesHighlights = page.locator('text=Notes & Highlights');
        this.flashcards = page.locator('text=Flashcards');
        this.metrics= page.locator('text=Metrics');
    }
    
    async clickOnSyllabus()
    {
       await this.mainNavigation.click();
       await expect (this.syllabus).toBeVisible();
       await this.syllabus.click()
    }

    async clickOnNotesHighlights()
    {
       await this.mainNavigation.click();
       await expect (this.notesHighlights).toBeVisible();
       await this.notesHighlights.click();
    }

    async clickOnFlashcards()
    {
       await this.mainNavigation.click();
       await expect (this.flashcards).toBeVisible();
       await this.flashcards.click();
    }

    async clickOnMetric()
    {
       await this.mainNavigation.click();
       await expect (this.metrics).toBeVisible();
       await this.metrics.click();
    }

}

module.exports= {FlyoutMenu};