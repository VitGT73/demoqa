import { type Page, type Locator, expect } from "@playwright/test";
import { PracticeFormExample } from '../examples/forms/practiceform.example'

export class FormsSection {
  readonly page: Page;
  readonly rootItem: Locator;
  readonly practiceFormItem: Locator;
  readonly practiceFormExample: PracticeFormExample;

  constructor(page: Page) {
    this.page = page;
    this.rootItem = page.locator('span').filter({ hasText: 'Forms' }).locator('div').first()
    this.practiceFormItem = page.getByRole('listitem').getByText('Practice Form');
    this.practiceFormExample = new PracticeFormExample(page);
  }


  async isOpen() {
    await expect(this.practiceFormItem).toBeVisible();

  }

  async isClose() {
    await expect(this.practiceFormItem).toBeHidden();

  }
}

export default FormsSection
