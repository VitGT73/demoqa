import { type Page, type Locator , expect } from '@playwright/test';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class BrokenLinksExample {
    readonly page: Page;
    readonly url: string;
    readonly headerText: string;
    readonly header: Locator;


    constructor(page: Page) {
      this.page = page;
      this.url = "/broken";
      this.headerText = "Broken Links - Images";
      this.header = page.locator("//div[@class='main-header']");
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

  export default BrokenLinksExample
