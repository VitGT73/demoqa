import { type Page, type Locator , expect } from '@playwright/test';



export class BooksPage {
    readonly page: Page;
    readonly url: string;
    readonly headerText:string;
    readonly header :Locator;


    constructor(page: Page) {
      this.page = page;
      this.url = "/books";
    //   this.url = process.env.BASE_URL + "/";
      this.headerText = 'Book Store';
      this.header = page.getByText('Book Store').first()
    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageHeader() {
      await expect(this.header).toHaveText(this.headerText);
    }


  }

  export default BooksPage
