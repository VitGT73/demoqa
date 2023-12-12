import { test as base } from "@playwright/test";
// import { LoginPage } from "../pages/login.page";
import HomePage from "../pages/home.page";
import AlertPage from "../pages/alerts.page";
import BooksPage from "../pages/books.page";
import ElementsPage from "../pages/elements.page";
// import { RegisterPage } from "../pages/register.page";

type DemoqaPages = {
  homePage: HomePage;
  alertPage: AlertPage;
  booksPage: BooksPage;
  elementsPage: ElementsPage;
};

export const test = base.extend<DemoqaPages>({

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  alertPage: async ({ page }, use) => {
    const alertPage = new AlertPage(page);
    await use(alertPage);
  },

  booksPage: async ({ page }, use) => {
    const booksPage = new BooksPage(page);
    await use(booksPage);
  },

  elementsPage: async ({ page }, use) => {
    const booksPage = new ElementsPage(page);
    await use(booksPage);
  },


});

export { expect } from '@playwright/test';
