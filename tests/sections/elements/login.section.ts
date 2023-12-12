// import { type Page, type Locator , expect } from '@playwright/test';



// export class LoginPage {
//     readonly page: Page;
//     readonly url: string;
//     readonly pageTitle:string;


//     constructor(page: Page) {
//       this.page = page;
//       this.url = "/";
//     //   this.url = process.env.BASE_URL + "/";
//       this.pageTitle = 'DEMOQA'

//     }

//     async load(){
//       await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
//     }

//     async assertPageTitle() {
//       await expect(this.page).toHaveTitle(this.pageTitle);
//     }

//     async assertPageUrl() {
//       await expect(this.page).toHaveURL(this.url);
//     }

//   }

//   export default HomePage
