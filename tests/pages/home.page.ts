import { type Page, type Locator , expect } from '@playwright/test';



export class HomePage {
    readonly page: Page;
    readonly url: string;
    readonly pageTitle:string;
    readonly cardElements:Locator;
    readonly cardForms: Locator;
    readonly cardAlerts:Locator;
    readonly cardWidgets: Locator;
    readonly cardInteractions: Locator;
    readonly cardBooks:Locator;

    constructor(page:  Page) {
      this.page = page;
      this.url = "/";
    //   this.url = process.env.BASE_URL + "/";
      this.pageTitle = 'DEMOQA'
      this.cardElements = page.getByRole('heading', { name: 'Elements' })
      this.cardForms = page.getByRole('heading', { name: 'Forms' })
      this.cardAlerts = page.getByRole('heading', { name: 'Alerts, Frame & Windows' })
      this.cardWidgets = page.getByRole('heading', { name: 'Widgets' })
      this.cardInteractions = page.getByRole('heading', { name: 'Interactions' })
      this.cardBooks = page.getByRole('heading', { name: 'Book Store Application' })

    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageTitle() {
      await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async assertPageUrl() {
      await expect(this.page).toHaveURL(this.url);
    }
  }

  export default HomePage
