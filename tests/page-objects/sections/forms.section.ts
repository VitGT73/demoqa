import { type Page, type Locator, expect } from "@playwright/test";

export class FormsSection {
  readonly page: Page;
  readonly rootItem: Locator;
  readonly practiceFormItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rootItem = page.locator('span').filter({ hasText: 'Forms' }).locator('div').first()
    this.practiceFormItem = page.getByRole('listitem').getByText('Practice Form');
  }


  async isOpen(){
    await expect(this.practiceFormItem).toBeVisible();

  }

  async isClose() {
    await expect(this.practiceFormItem).toBeHidden();

  }
}



export default FormsSection
