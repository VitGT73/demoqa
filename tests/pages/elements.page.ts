import { type Page, type Locator , expect } from '@playwright/test';

export class ElementsPage {
    readonly page: Page;
    readonly url: string;
    readonly headerText:string;
    readonly header :Locator;

    constructor(page: Page) {
      this.page = page;
      this.url = "/alertsWindows";
    //   this.url = process.env.BASE_URL + "/";
      this.headerText = 'Elements';
      this.header = page.getByText('Elements').first()
    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageHeader() {
      await expect(this.header).toHaveText(this.headerText);
    }


  }

  export default ElementsPage
