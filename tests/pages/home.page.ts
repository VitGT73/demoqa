import { type Page, type Locator , expect } from '@playwright/test';



export class HomePage {
    readonly page: Page;
    readonly url: string;
    readonly pageTitle:string;
    readonly cardAlerts:Locator;
    readonly cardBooks:Locator;

    constructor(page: Page) {
      this.page = page;
      this.url = "/";
    //   this.url = process.env.BASE_URL + "/";
      this.pageTitle = 'DEMOQA'
      this.cardAlerts = page.getByRole('heading', { name: 'Alerts, Frame & Windows' })
      this.cardBooks = page.getByRole('heading', { name: 'Book Store Application' })

    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageTitle() {
      await expect(this.page).toHaveTitle(this.pageTitle);
    }


  }

  export default HomePage
