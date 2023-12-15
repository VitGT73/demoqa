import { type Page, type Locator , expect } from '@playwright/test';

export class AccordionExamples {
    readonly page: Page;
    readonly url: string;
    readonly headerText: string;
    readonly header: Locator;


    constructor(page: Page) {
      this.page = page;
      this.url = "/accordian";
      this.headerText = "Accordian";
      this.header = page.getByText('Accordian');
   }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageHeader() {
      await expect(this.header).toHaveText(this.headerText);
    }

    async assertPageUrl() {
      await expect(this.page).toHaveURL(this.url);
    }

   }

  export default AccordionExamples
