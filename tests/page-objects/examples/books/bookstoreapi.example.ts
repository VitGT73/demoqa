import { type Page, type Locator , expect } from '@playwright/test';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class BookStoreAPIExample {
    readonly page: Page;
    readonly url: string;


    constructor(page: Page) {
      this.page = page;
      this.url = "/swagger/";

   }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageUrl() {
      await expect(this.page).toHaveURL(this.url);
    }

   }

  export default BookStoreAPIExample
