import { type Page, type Locator , expect } from '@playwright/test';

export class FormsPage {
    readonly page: Page;
    readonly url: string;
    readonly headerText:string;
    readonly header :Locator;

    constructor(page: Page) {
      this.page = page;
      this.url = "/alertsWindows";
    //   this.url = process.env.BASE_URL + "/";
      this.headerText = 'Forms';
      this.header = page.getByText('Forms').first()
    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageHeader() {
      await expect(this.header).toHaveText(this.headerText);
    }


  }

  export default FormsPage
