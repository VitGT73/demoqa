import { type Page, type Locator, expect } from "@playwright/test";

export class ElementsSection {
  readonly page: Page;
  readonly rootElement: Locator;
  readonly textBoxElement: Locator;
  readonly checkBoxElement: Locator;
  readonly radioButtonElement: Locator;
  readonly webTablesElement: Locator;
  readonly buttonsElement: Locator;
  readonly linksElement: Locator;
  readonly brockenLinksElement: Locator;
  readonly uploadAddDownloadElement: Locator;
  readonly dynamicPropertiesElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rootElement = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first()
    this.textBoxElement = page.locator('li').filter({ hasText: 'Text Box' })
    this.checkBoxElement=  page.locator('li').filter({ hasText: 'Check Box' })
    this.radioButtonElement =page.locator('li').filter({ hasText: 'Radio Button' })
    this.webTablesElement =page.locator('li').filter({ hasText: 'Web Tables' })
    this.buttonsElement =page.locator('li').filter({ hasText: 'Buttons' })
    this.linksElement =page.locator('li').filter({ hasText: /^Links$/ })
    this.brockenLinksElement = page.locator('li').filter({ hasText: 'Broken Links - Images' })
    this.uploadAddDownloadElement = page.locator('li').filter({ hasText: 'Upload and Download' })
    this.dynamicPropertiesElement = page.locator('li').filter({ hasText: 'Dynamic Properties' })
  }


  async isOpen(){
    await expect(this.textBoxElement).toBeVisible();
    await expect(this.checkBoxElement).toBeVisible();
    await expect(this.radioButtonElement).toBeVisible();
    await expect(this.webTablesElement).toBeVisible();
    await expect(this.buttonsElement).toBeVisible();
    await expect(this.linksElement).toBeVisible();
    await expect(this.uploadAddDownloadElement).toBeVisible();
    await expect(this.dynamicPropertiesElement).toBeVisible();
  }

  async isClose() {
    await expect(this.textBoxElement).toBeHidden();
    await expect(this.checkBoxElement).toBeHidden();
    await expect(this.radioButtonElement).toBeHidden();
    await expect(this.webTablesElement).toBeHidden();
    await expect(this.buttonsElement).toBeHidden();
    await expect(this.linksElement).toBeHidden();
    await expect(this.uploadAddDownloadElement).toBeHidden();
    await expect(this.dynamicPropertiesElement).toBeHidden();
  }
}

export default ElementsSection;
