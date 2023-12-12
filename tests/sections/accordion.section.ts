import { type Page, type Locator, expect } from "@playwright/test";
import {AlertsSection} from './alerts.section'
import {BooksSection} from './books.section'
import {ElementsSection} from './elements.section'
import {FormsSection} from './forms.section'
import {InteractionsSection} from './interaction.section'
import {WidgetSection} from './widgets.section'

export class AccordionSection {
  readonly page: Page;
  readonly alertsSection: AlertsSection;
  readonly booksSection: BooksSection;
  readonly elementsSection: ElementsSection;
  readonly formsSection: FormsSection;
  readonly interactionsSection: InteractionsSection;
  readonly widgetSection: WidgetSection;


  constructor(page: Page) {
    this.page = page;
  }


  async isOpen(){

  }

  async isClose() {

  }
}

export default AccordionSection;
