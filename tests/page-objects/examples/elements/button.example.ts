import { type Page, type Locator, expect } from '@playwright/test';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class ButtonExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly dblClickButton: Locator;
  readonly rightClickButton: Locator;
  readonly dynamicClickButton: Locator;

  readonly dblClickMessage: Locator;
  readonly rightClickMessage: Locator;
  readonly dynamicClickMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "/buttons";
    this.headerText = "Buttons";
    this.header = page.locator("//div[@class='main-header']");

    this.dblClickButton = page.getByRole('button', { name: 'Double Click Me' });
    this.rightClickButton = page.getByRole('button', { name: 'Right Click Me' });
    this.dynamicClickButton = page.getByRole('button', { name: 'Click Me', exact: true });

    this.dblClickMessage = page.locator('#doubleClickMessage');
    this.rightClickMessage = page.locator('#rightClickMessage');
    this.dynamicClickMessage = page.locator('#dynamicClickMessage');



  }

  async load() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  async assertPageHeader() {
    await expect(this.header).toHaveText(this.headerText);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }

  async assertDbkClickMessage() {
    const isVisible = await this.dblClickMessage.isVisible();
    if (isVisible) {
      await expect(this.dblClickMessage).toHaveText('You have done a double click')
    } else {
      await expect(isVisible).toBeTruthy()
    }
  }

  async assertRightClickMessage() {
    const isVisible = await this.rightClickMessage.isVisible();
    if (isVisible) {
      await expect(this.rightClickMessage).toHaveText('You have done a right click')
    } else {
      await expect(isVisible).toBeTruthy()
    }
  }
  async assertDynamicClickMessage() {
    const isVisible = await this.dynamicClickMessage.isVisible();
    if (isVisible) {
      await expect(this.dynamicClickMessage).toHaveText('You have done a dynamic click')
    } else {
      await expect(isVisible).toBeTruthy()
    }
  }

}

export default ButtonExample
