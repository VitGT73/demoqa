// import { test, expect } from '@playwright/test';
import { test } from "../../fixtures/pages.fixture";

test.describe("Widgets section tests", () => {
  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test("Widgets page has header", async ({ widgetsPage }) => {
    // Expect a title "to contain" a substring.
    await widgetsPage.assertPageHeader();
  });

  test("'Widgets' accordion section opens", async ({ widgetsPage }) => {
    await widgetsPage.accordionSection.widgetSection.isOpen();
    });

  test("'Widgets' accordion section closes", async ({ widgetsPage }) => {
    await widgetsPage.accordionSection.widgetSection.rootItem.click();
    await widgetsPage.accordionSection.widgetSection.isClose();
  });


});
