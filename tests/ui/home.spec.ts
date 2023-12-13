// import { test, expect } from '@playwright/test';
import { test, expect } from "../fixtures/pages.fixture";

test.describe("@smoke Demoqa tests", () => {
  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test("Demoqa has title", async ({ homePage }) => {
    // Expect a title "to contain" a substring.
    await homePage.assertPageTitle();
  });

  test("load page Alerts", async ({ homePage }) => {
    await homePage.alertsCard.click();
    await homePage.alertsPage.assertPageUrl();
  });

  test("load page Books", async ({ homePage }) => {
    await homePage.booksCard.click();
    await homePage.booksPage.assertPageUrl();
  });

  test("load page Elements", async ({ homePage }) => {
    await homePage.elementsCard.click();
    await homePage.elementsPage.assertPageUrl();
  });

  test("load page Forms", async ({ homePage }) => {
    await homePage.formsCard.click();
    await homePage.formsPage.assertPageUrl();
  });

  test("load page Widgets", async ({ homePage }) => {
    await homePage.widgetsCard.click();
    await homePage.widgetsPage.assertPageUrl();
  });

  test("load page Interactions", async ({ homePage }) => {
    await homePage.interactionsCard.click();
    await homePage.interactionsPage.assertPageUrl();
  });
});
