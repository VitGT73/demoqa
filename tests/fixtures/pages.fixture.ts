import { test as base } from "@playwright/test";
// import { LoginPage } from "../pages/login.page";
import HomePage from "../pages/home.page";
// import { RegisterPage } from "../pages/register.page";

type DemoqaPages = {
  homePage: HomePage;
};

export const test = base.extend<DemoqaPages>({

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  }
});

export { expect } from '@playwright/test';
