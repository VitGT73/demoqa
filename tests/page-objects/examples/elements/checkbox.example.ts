import { type Page, type Locator, expect } from '@playwright/test';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class CheckboxExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "/checkbox";
    this.headerText = "Check Box";
    this.header = page.locator("//div[@class='main-header']");

    this.expandAllButton = page.getByRole('button').getByTitle('Expand all');
    this.collapseAllButton = page.getByRole('button').getByTitle('Collapse all');
  }

  async load(){
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  async assertPageHeader() {
    await expect(this.header).toHaveText(this.headerText);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }

}

export default CheckboxExample
