import { type Page, type Locator , expect } from '@playwright/test';
import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class TextBoxExample {
    readonly page: Page;
    readonly url: string;
    readonly headerText: string;
    readonly header: Locator;

    readonly fullnameInput:Locator;
    readonly emailInput :Locator;
    readonly currentAddressInput :Locator;
    readonly permanentAddressInput :Locator;
    readonly submintButton: Locator;

    constructor(page: Page) {
      this.page = page;
      this.url = "/text-box";
      this.headerText = "Text Box";
      this.header = page.locator("//div[@class='main-header']");
      // this.header = page.getByText('Text Box').first();

      this.fullnameInput = page.getByPlaceholder('Full Name');
      this.emailInput = page.getByPlaceholder('name@example.com');
      this.currentAddressInput = page.getByPlaceholder('Current Address');
      this.permanentAddressInput = page.locator('#permanentAddress');
      this.submintButton = page.getByRole('button', { name: 'Submit' });

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

    async FillForm(data: TextBoxInterface){
      this.fullnameInput.fill(data.fullName);
      this.emailInput.fill(data.email);
      this.currentAddressInput.fill(data.currentAddress);
      this.submintButton.fill(data.permanentAddress);
      }
   }

  export default TextBoxExample
