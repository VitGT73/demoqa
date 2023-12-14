// import { test, expect } from '@playwright/test';
import { test, expect } from "../fixtures/pages.fixture";

test.describe("Elements section tests", () => {
  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test("Elements page has header", async ({ elementsPage }) => {
    // Expect a title "to contain" a substring.
    await elementsPage.assertPageHeader();
  });

  test("'Elements' accordion section opens", async ({ elementsPage }) => {
    await elementsPage.accordionSection.elementsSection.isOpen();
    });

  test("'Elements' accordion section closes", async ({ elementsPage }) => {
    await elementsPage.accordionSection.elementsSection.rootItem.click();
    await elementsPage.accordionSection.elementsSection.isClose();
  });


});
