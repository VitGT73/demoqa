// import { test, expect } from '@playwright/test';
import { test } from "../../fixtures/pages.fixture";

test.describe("Interactions section tests", () => {
  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test("Interactions page has header", async ({ interactionsPage }) => {
    // Expect a title "to contain" a substring.
    await interactionsPage.assertPageHeader();
  });

  test("'Interactions' accordion section opens", async ({ interactionsPage }) => {
    await interactionsPage.accordionSection.interactionsSection.isOpen();
    });

  test("'Interactions' accordion section closes", async ({ interactionsPage }) => {
    await interactionsPage.accordionSection.interactionsSection.rootItem.click();
    await interactionsPage.accordionSection.interactionsSection.isClose();
  });


});
