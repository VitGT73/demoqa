import { type Page, type Locator , expect } from '@playwright/test';



export class LoginPage {
    readonly page: Page;
    readonly url: string;
    readonly pageTitle:string;


    constructor(page: Page) {
      this.page = page;
      this.url = "/elements";
    //   this.url = process.env.BASE_URL + "/";
      this.pageTitle = 'Elements'

    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageTitle() {
      await expect(this.page).toHaveTitle(this.pageTitle);
    }


  }

  export default HomePage
