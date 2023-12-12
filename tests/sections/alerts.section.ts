import { type Page, type Locator , expect } from '@playwright/test';

export class AlertsSection {
    readonly page: Page;
    readonly rootLocator: Locator;

    constructor(page: Page) {
      this.page = page;
      this.rootLocator = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first()

    }

    async Open() {
      await expect(this.page).toHaveURL(this.url);
    }

    async Close() {
      await expect(this.page).toHaveURL(this.url);
    }
    async isOpen(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async isClose() {
      await expect(this.header).toHaveText(this.headerText);
    }

  }

  export default AlertsSection
