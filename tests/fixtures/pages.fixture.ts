import { test as base } from "@playwright/test";
// import { LoginPage } from "../pages/login.page";
import AlertsPage from "../page-objects/pages/alerts.page";
import BooksPage from "../page-objects/pages/books.page";
import ElementsPage from "../page-objects/pages/elements.page";
import FormsPage from "../page-objects/pages/forms.page";
import HomePage from '../page-objects/pages/home.page';
import InteractionsPage from "../page-objects/pages/interaction.page";
import WidgetsPage from "../page-objects/pages/widgets.page";
// import { RegisterPage } from "../pages/register.page";

export type DemoqaPages = {
  homePage: HomePage;
  alertsPage: AlertsPage;
  booksPage: BooksPage;
  elementsPage: ElementsPage;
  formsPage: FormsPage;
  widgetsPage: WidgetsPage;
  interactionsPage: InteractionsPage
};

export const test = base.extend<DemoqaPages>({

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.load();
    await use(homePage);
  },

  alertsPage: async ({ page }, use) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.load();
    await use(alertsPage);
  },

  booksPage: async ({ page }, use) => {
    const booksPage = new BooksPage(page);
    await booksPage.load();
    await use(booksPage);
  },

  elementsPage: async ({ page }, use) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.load();
    await use(elementsPage);
  },

  formsPage: async ({ page }, use) => {
    const formsPage = new FormsPage(page);
    await formsPage.load();
    await use(formsPage);
  },

  widgetsPage: async ({ page }, use) => {
    const booksPage = new WidgetsPage(page);
    await booksPage.load();
    await use(booksPage);
  },

  interactionsPage: async ({ page }, use) => {
    const interactionsPage = new InteractionsPage(page);
    await interactionsPage.load();
    await use(interactionsPage);
  },

});

export { expect } from '@playwright/test';
