import { type Page, type Locator , expect } from '@playwright/test';

export class AutoCompleteExamples {
    readonly page: Page;
    readonly url: string;
    readonly headerText: string;
    readonly header: Locator;


    constructor(page: Page) {
      this.page = page;
      this.url = "/auto-complete";
      this.headerText = "Auto Complete";
      this.header = page.getByText('Auto Complete');
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

  export default AutoCompleteExamples
