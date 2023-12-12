import { type Page, type Locator , expect } from '@playwright/test';

export class WidgetsPage {
    readonly page: Page;
    readonly url: string;
    readonly headerText:string;
    readonly header :Locator;

    constructor(page: Page) {
      this.page = page;
      this.url = "/alertsWindows";
    //   this.url = process.env.BASE_URL + "/";
      this.headerText = 'Widgets';
      this.header = page.getByText('Widgets').first()
    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageHeader() {
      await expect(this.header).toHaveText(this.headerText);
    }


  }

  export default WidgetsPage
