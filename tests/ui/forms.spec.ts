// import { test, expect } from '@playwright/test';
import { test, expect } from "../fixtures/pages.fixture";

test.describe("Elements section tests", () => {
  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test("Elements page has header", async ({ formsPage }) => {
    // Expect a title "to contain" a substring.
    await formsPage.assertPageHeader();
  });

  test("'Elements' accordion section opens", async ({ formsPage }) => {
    await formsPage.accordionSection.formsSection.isOpen();
    });

  test("'Elements' accordion section closes", async ({ formsPage }) => {
    await formsPage.accordionSection.formsSection.rootElement.click();
    await formsPage.accordionSection.formsSection.isClose();
  });


});
