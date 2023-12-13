import { type Page, type Locator, expect } from "@playwright/test";

export class WidgetSection {
  readonly page: Page;
  readonly rootElement: Locator;
  readonly accordionElement: Locator;
  readonly autoCompleteElement: Locator;
  readonly dataPickerElement: Locator;
  readonly sliderElement: Locator;
  readonly progressBarElement: Locator;
  readonly tabsElement: Locator;
  readonly toolTipsElement: Locator;
  readonly menuElements: Locator;
  readonly selectMenuElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rootElement = page
      .locator("span")
      .filter({ hasText: "Widgets" })
      .locator("div")
      .first();
    // this.rootElement = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first()

    this.accordionElement = page.locator("li").filter({ hasText: "Accordian" });
    // this.accordionElement = page.getByRole("listitem").getByText("Accordian");
    this.autoCompleteElement = page.locator("li").filter({ hasText: "Auto Complete" });
    this.dataPickerElement = page.locator("li").filter({ hasText: "Date Picker" });
    this.sliderElement = page.locator("li").filter({ hasText: "Slider" });
    this.progressBarElement = page.locator("li").filter({ hasText: "Progress Bar" });
    this.tabsElement = page.locator("li").filter({ hasText: "Tabs" });
    this.toolTipsElement = page.locator("li").filter({ hasText: "Tool Tips" });
    // this.menuElements = page.locator("li").filter({ hasText: "Menu" });
    // Эта строка не работает, потому что слово Menu есть еще в "Select Menu"
    this.menuElements = page.getByRole("listitem").getByText("Menu",{exact: true});
    this.selectMenuElement = page.locator("li").filter({ hasText: "Select Menu" });
  }

  async isOpen() {
    await expect(this.accordionElement).toBeVisible();
    await expect(this.autoCompleteElement).toBeVisible();
    await expect(this.dataPickerElement).toBeVisible();
    await expect(this.sliderElement).toBeVisible();
    await expect(this.progressBarElement).toBeVisible();
    await expect(this.tabsElement).toBeVisible();
    await expect(this.toolTipsElement).toBeVisible();
    await expect(this.menuElements).toBeVisible();
    await expect(this.selectMenuElement).toBeVisible();
  }

  async isClose() {
    await expect(this.accordionElement).toBeHidden();
    await expect(this.autoCompleteElement).toBeHidden();
    await expect(this.dataPickerElement).toBeHidden();
    await expect(this.sliderElement).toBeHidden();
    await expect(this.progressBarElement).toBeHidden();
    await expect(this.tabsElement).toBeHidden();
    await expect(this.toolTipsElement).toBeHidden();
    await expect(this.menuElements).toBeHidden();
    await expect(this.selectMenuElement).toBeHidden();
  }
}

export default WidgetSection;
