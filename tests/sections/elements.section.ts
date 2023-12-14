import { type Page, type Locator, expect } from "@playwright/test";

export class ElementsSection {
  readonly page: Page;
  readonly rootItem: Locator;
  readonly textBoxItem: Locator;
  readonly checkBoxItem: Locator;
  readonly radioButtonItem: Locator;
  readonly webTablesItem: Locator;
  readonly buttonsItem: Locator;
  readonly linksItem: Locator;
  readonly brockenLinksItem: Locator;
  readonly uploadAddDownloadItem: Locator;
  readonly dynamicPropertiesItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rootItem = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first()
    this.textBoxItem = page.locator('li').filter({ hasText: 'Text Box' })
    this.checkBoxItem = page.locator('li').filter({ hasText: 'Check Box' })
    this.radioButtonItem = page.locator('li').filter({ hasText: 'Radio Button' })
    this.webTablesItem = page.locator('li').filter({ hasText: 'Web Tables' })
    this.buttonsItem = page.locator('li').filter({ hasText: 'Buttons' })
    // this.linksItem = page.locator('li').filter({ hasText: /^Links$/ })
    this.linksItem= page.getByRole('list').getByText('Links', { exact: true });
    this.brockenLinksItem = page.locator('li').filter({ hasText: 'Broken Links - Images' })
this.uploadAddDownloadItem = page.locator('li').filter({ hasText: 'Upload and Download' })
this.dynamicPropertiesItem = page.locator('li').filter({ hasText: 'Dynamic Properties' })
  }


  async isOpen(){
  await expect(this.textBoxItem).toBeVisible();
  await expect(this.checkBoxItem).toBeVisible();
  await expect(this.radioButtonItem).toBeVisible();
  await expect(this.webTablesItem).toBeVisible();
  await expect(this.buttonsItem).toBeVisible();
  await expect(this.linksItem).toBeVisible();
  await expect(this.uploadAddDownloadItem).toBeVisible();
  await expect(this.dynamicPropertiesItem).toBeVisible();
}

  async isClose() {
  await expect(this.textBoxItem).toBeHidden();
  await expect(this.checkBoxItem).toBeHidden();
  await expect(this.radioButtonItem).toBeHidden();
  await expect(this.webTablesItem).toBeHidden();
  await expect(this.buttonsItem).toBeHidden();
  await expect(this.linksItem).toBeHidden();
  await expect(this.uploadAddDownloadItem).toBeHidden();
  await expect(this.dynamicPropertiesItem).toBeHidden();
}
}

export default ElementsSection;
