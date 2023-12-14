// import { test as base } from "@playwright/test";

// import {AlertsSection} from "../page-objects/sections/alerts.section";
// import {BooksSection} from "../page-objects/sections/books.section";
// import {ElementsSection} from "../page-objects/sections/elements.section";
// import {FormsSection} from "../page-objects/sections/forms.section";
// import {InteractionsSection} from "../page-objects/sections/interaction.section";
// import {WidgetSection} from "../page-objects/sections/widgets.section";

// type Sections = {
//   alertsSection: AlertsSection;
//   booksSection: BooksSection;
//   elementsSection: ElementsSection;
//   formsSection: FormsSection;
//   widgetSection: WidgetSection;
//   interactionsSection: InteractionsSection
// };

// export const test = base.extend<Sections>({

//   alertsSection: async ({ page }, use) => {
//     const alertsSection = new AlertsSection(page);
//     await alertsSection.load();
//     await use(alertsSection);
//   },

//   alertsPage: async ({ page }, use) => {
//     const alertsPage = new AlertsPage(page);
//     await alertsPage.load();
//     await use(alertsPage);
//   },

//   booksPage: async ({ page }, use) => {
//     const booksPage = new BooksPage(page);
//     await booksPage.load();
//     await use(booksPage);
//   },

//   elementsPage: async ({ page }, use) => {
//     const elementsPage = new ElementsPage(page);
//     await elementsPage.load();
//     await use(elementsPage);
//   },

//   formsPage: async ({ page }, use) => {
//     const formsPage = new FormsPage(page);
//     await formsPage.load();
//     await use(formsPage);
//   },

//   widgetsPage: async ({ page }, use) => {
//     const booksPage = new WidgetsPage(page);
//     await booksPage.load();
//     await use(booksPage);
//   },

//   interactionsPage: async ({ page }, use) => {
//     const interactionsPage = new InteractionsPage(page);
//     await interactionsPage.load();
//     await use(interactionsPage);
//   },

// });

// export { expect } from '@playwright/test';
