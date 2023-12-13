import { type Page, type Locator , expect } from '@playwright/test';
import { AccordionSection } from "../sections/accordion.section";

export class InteractionsPage {
    readonly page: Page;
    readonly url: string;
    readonly headerText:string;
    readonly header :Locator;
    readonly accordionSection: AccordionSection;

    constructor(page: Page) {
      this.page = page;
      this.url = "/interaction";
      //   this.url = process.env.BASE_URL + "/";
      this.accordionSection = new AccordionSection(page);
      this.headerText = 'Interactions';
      this.header = page.getByText('Interactions').first()
    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageHeader() {
      await expect(this.header).toHaveText(this.headerText);
    }

    async assertPageUrl() {
      await expect(this.page).toHaveURL(this.url);
    }

  }

  export default InteractionsPage
