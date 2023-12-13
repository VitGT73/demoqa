// import { test, expect } from '@playwright/test';
import { test, expect } from "../fixtures/pages.fixture";

test.describe("Forms section tests", () => {
  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test("Forms page has header", async ({ formsPage }) => {
    // Expect a title "to contain" a substring.
    await formsPage.assertPageHeader();
  });

  test("'Forms' accordion section opens", async ({ formsPage }) => {
    await formsPage.accordionSection.formsSection.isOpen();
    });

  test("'Forms' accordion section closes", async ({ formsPage }) => {
    await formsPage.accordionSection.formsSection.rootElement.click();
    await formsPage.accordionSection.formsSection.isClose();
  });


});
