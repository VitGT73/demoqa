import { type Page, type Locator, expect } from "@playwright/test";

export class FormsSection {
  readonly page: Page;
  readonly rootElement: Locator;
  readonly practiceFormElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rootElement = page.locator('span').filter({ hasText: 'Forms' }).locator('div').first()
    // this.rootElement = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first()
    this.practiceFormElement = page.getByRole('listitem').getByText('Practice Form');
  }


  async isOpen(){
    await expect(this.practiceFormElement).toBeVisible();

  }

  async isClose() {
    await expect(this.practiceFormElement).toBeHidden();

  }
}



export default FormsSection
