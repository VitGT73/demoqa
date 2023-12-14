import { type Page, type Locator, expect } from "@playwright/test";

export class AlertsSection {
  readonly page: Page;
  readonly rootItem: Locator;
  readonly browserWindowsItem :Locator;
  readonly alertsItem :Locator;
  readonly framesItem:Locator;
  readonly nestedFramesItem: Locator;
  readonly modalDialogItem: Locator;

  constructor(page: Page) {
    this.page = page;

    this.rootItem = page.locator('span').filter({ hasText: 'Alerts, Frame & Windows' }).locator('div').first()
    this.browserWindowsItem =page.locator('li').filter({ hasText: 'Browser Windows' });
    this.alertsItem =page.locator('li').filter({ hasText: 'Alerts' });
    this.framesItem =page.locator('li').filter({ hasText: /^Frames$/ });
    this.nestedFramesItem =page.locator('li').filter({ hasText: 'Nested Frames' });
    this.modalDialogItem =page.locator('li').filter({ hasText: 'Modal Dialogs' });
  }

  async isOpen(){
    await expect(this.browserWindowsItem).toBeVisible();
    await expect(this.alertsItem).toBeVisible();
    await expect(this.framesItem).toBeVisible();
    await expect(this.nestedFramesItem).toBeVisible();
    await expect(this.modalDialogItem).toBeVisible();
  }

  async isClose() {
    await expect(this.browserWindowsItem).toBeHidden();
    await expect(this.alertsItem).toBeHidden();
    await expect(this.framesItem).toBeHidden();
    await expect(this.nestedFramesItem).toBeHidden();
    await expect(this.modalDialogItem).toBeHidden();
  }
}

export default AlertsSection
