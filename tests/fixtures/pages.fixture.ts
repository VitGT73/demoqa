import { test as base } from "@playwright/test";
// import { LoginPage } from "../pages/login.page";
import HomePage from "../pages/home.page";
import AlertsPage from "../pages/alerts.page";
import BooksPage from "../pages/books.page";
import ElementsPage from "../pages/elements.page";
import FormsPage from "../pages/forms.page";
import WidgetsPage from "../pages/widgets.page";
// import { RegisterPage } from "../pages/register.page";

type DemoqaPages = {
  homePage: HomePage;
  alertsPage: AlertsPage;
  booksPage: BooksPage;
  elementsPage: ElementsPage;
  formsPage: FormsPage;
  widgetsPage: WidgetsPage;
};

export const test = base.extend<DemoqaPages>({

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  alertsPage: async ({ page }, use) => {
    const alertsPage = new AlertsPage(page);
    await use(alertsPage);
  },

  booksPage: async ({ page }, use) => {
    const booksPage = new BooksPage(page);
    await use(booksPage);
  },

  elementsPage: async ({ page }, use) => {
    const booksPage = new ElementsPage(page);
    await use(booksPage);
  },

  formsPage: async ({ page }, use) => {
    const formsPage = new FormsPage(page);
    await use(formsPage);
  },

  widgetsPage: async ({ page }, use) => {
    const booksPage = new WidgetsPage(page);
    await use(booksPage);
  },

});

export { expect } from '@playwright/test';
