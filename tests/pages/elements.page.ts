import { type Page, type Locator, expect } from "@playwright/test";
import { AccordionSection } from "../sections/accordion.section";

export class ElementsPage {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly accordionSection: AccordionSection;
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
    this.url = "/elements";
    //   this.url = process.env.BASE_URL + "/";
    this.accordionSection = new AccordionSection(page);
    this.headerText = "Elements";
    this.header = page.getByText("Elements").first();
    this.accordionSection = new AccordionSection(page);
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

  async load() {
    await this.page.goto(this.url, { waitUntil: "domcontentloaded" });
  }

  async assertPageHeader() {
    await expect(this.header).toHaveText(this.headerText);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }
}

export default ElementsPage;
