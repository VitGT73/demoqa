import { type Page, type Locator , expect } from '@playwright/test';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class RadioButtonExample {
    readonly page: Page;
    readonly url: string;
    readonly headerText: string;
    readonly header: Locator;


    constructor(page: Page) {
      this.page = page;
      this.url = "/radio-button";
      this.headerText = "Radio Button";
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

  export default RadioButtonExample
