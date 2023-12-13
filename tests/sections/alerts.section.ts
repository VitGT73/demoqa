import { type Page, type Locator, expect } from "@playwright/test";

export class AlertsSection {
  readonly page: Page;
  readonly rootElement: Locator;
  readonly browserWindowsElement :Locator;
  readonly alertsElement :Locator;
  readonly framesElement:Locator;
  readonly nestedFramesElements: Locator;
  readonly modalDialogElements: Locator;

  constructor(page: Page) {
    this.page = page;
   // this.rootElement =  page.getByText('Alerts, Frame & Windows')
    this.rootElement = page.locator('span').filter({ hasText: 'Alerts, Frame & Windows' }).locator('div').first()
    this.browserWindowsElement =page.locator('li').filter({ hasText: 'Browser Windows' });
    this.alertsElement =page.locator('li').filter({ hasText: 'Alerts' });
    this.framesElement =page.locator('li').filter({ hasText: /^Frames$/ });
    this.nestedFramesElements =page.locator('li').filter({ hasText: 'Nested Frames' });
    this.modalDialogElements =page.locator('li').filter({ hasText: 'Modal Dialogs' });


  }


  async isOpen(){
    await expect(this.browserWindowsElement).toBeVisible();
    await expect(this.alertsElement).toBeVisible();
    await expect(this.framesElement).toBeVisible();
    await expect(this.nestedFramesElements).toBeVisible();
    await expect(this.modalDialogElements).toBeVisible();
  }

  async isClose() {
    await expect(this.browserWindowsElement).toBeHidden();
    await expect(this.alertsElement).toBeHidden();
    await expect(this.framesElement).toBeHidden();
    await expect(this.nestedFramesElements).toBeHidden();
    await expect(this.modalDialogElements).toBeHidden();

  }
}



export default AlertsSection
