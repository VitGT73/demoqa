import { type Page, type Locator, expect } from "@playwright/test";

export class BooksSection {
  readonly page: Page;
  readonly rootElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rootElement = page.getByText('Book Store Application')
    // this.rootElement = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first()

  }


  async isOpen(){
    // await expect(this.textBoxElement).toBeVisible();
    // await expect(this.checkBoxElement).toBeVisible();
    // await expect(this.radioButtonElement).toBeVisible();
    // await expect(this.webTablesElement).toBeVisible();
    // await expect(this.buttonsElement).toBeVisible();
    // await expect(this.linksElement).toBeVisible();
    // await expect(this.uploadAddDownloadElement).toBeVisible();
    // await expect(this.dynamicPropertiesElement).toBeVisible();
  }

  async isClose() {
    // await expect(this.textBoxElement).toBeHidden();
    // await expect(this.checkBoxElement).toBeHidden();
    // await expect(this.radioButtonElement).toBeHidden();
    // await expect(this.webTablesElement).toBeHidden();
    // await expect(this.buttonsElement).toBeHidden();
    // await expect(this.linksElement).toBeHidden();
    // await expect(this.uploadAddDownloadElement).toBeHidden();
    // await expect(this.dynamicPropertiesElement).toBeHidden();
  }
}



export default BooksSection
