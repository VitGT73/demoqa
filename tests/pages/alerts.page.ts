import { type Page, type Locator , expect } from '@playwright/test';

export class AlertsPage {
    readonly page: Page;
    readonly url: string;
    readonly headerText:string;
    readonly header :Locator;

    constructor(page: Page) {
      this.page = page;
      this.url = "/alertsWindows";
    //   this.url = process.env.BASE_URL + "/";
      this.headerText = 'Alerts, Frame & Windows';
      this.header = page.getByText('Alerts, Frame & Windows').first()
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

  export default AlertsPage
