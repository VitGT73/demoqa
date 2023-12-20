import { type Page, type Locator, expect } from '@playwright/test';
import { resourceLimits } from 'worker_threads';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class RadioButtonExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  // readonly yesRadio: Locator;
  // readonly impressiveRadio: Locator;
  // readonly noRadio: Locator;
  readonly successMessage: Locator;

  readonly radioButtonNames: string[];
  readonly radioButtons: Record<string, Locator>;


  constructor(page: Page) {
    this.page = page;
    this.url = "/radio-button";
    this.headerText = "Radio Button";
    this.header = page.locator("//div[@class='main-header']");

    this.successMessage = page.locator('.text-success')

    this.radioButtonNames = ["Yes", "Impressive", "No"];
    this.radioButtons = this.createRadioButtons(this.radioButtonNames);

  }  // End class Constructor


  private createRadioButtons(radioButtonNames: string[]): Record<string, Locator> {
    const radioButtons: Record<string, Locator> = {};

    radioButtonNames.forEach((radioButtonName) => {
      radioButtons[radioButtonName] = this.page.locator('.custom-control-label', { hasText: radioButtonName });
    });

    return radioButtons;
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


  async assertPresenceInSuccessMessage(radioName: string, isChecked: boolean) {

    const isVisible = await this.successMessage.isVisible({ timeout: 1000 });
    if (isVisible) {
      const result = await this.successMessage.textContent();
      if (isChecked) {
        await expect(result==radioName).toBeTruthy()
      } else {
        await expect(result==radioName).toBeFalsy()
      }
    }
  }

  async assertRadioIsChecked(radioName: string, isChecked: boolean) {
    const result = await this.radioButtons[radioName].isChecked();
    await expect(result==isChecked).toBeTruthy();
  }

}

export default RadioButtonExample
