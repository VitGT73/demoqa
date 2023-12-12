import { type Page, type Locator , expect } from '@playwright/test';

export class TextBoxSection {
    readonly page: Page;
    readonly url: string;
    readonly fullnameInput:Locator;
    readonly emailInput :Locator;
    readonly currentAddressInput :Locator;
    readonly permanentAddressInput :Locator;
    readonly submintButton: Locator;

    constructor(page: Page) {
      this.page = page;
      this.url = "/text-box";
      this.fullnameInput = page.getByPlaceholder('Full Name');
      this.emailInput = page.getByPlaceholder('name@example.com');
      this.currentAddressInput = page.getByPlaceholder('Current Address');
      this.permanentAddressInput = page.locator('#permanentAddress');
      this.submintButton = page.getByRole('button', { name: 'Submit' });

    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }
    
   }

  export default TextBoxSection
