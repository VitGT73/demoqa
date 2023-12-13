// import { test, expect } from '@playwright/test';
import { test, expect } from "../fixtures/pages.fixture";

test.describe("Elements section tests", () => {
  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test("Elements page has header", async ({ widgetsPage }) => {
    // Expect a title "to contain" a substring.
    await widgetsPage.assertPageHeader();
  });

  test("'Elements' accordion section opens", async ({ widgetsPage }) => {
    await widgetsPage.accordionSection.widgetSection.isOpen();
    });

  test("'Elements' accordion section closes", async ({ widgetsPage }) => {
    await widgetsPage.accordionSection.widgetSection.rootElement.click();
    await widgetsPage.accordionSection.widgetSection.isClose();
  });


});
