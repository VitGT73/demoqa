// import { test, expect } from '@playwright/test';
import { test } from "../../fixtures/pages.fixture";

test.describe("Books section tests", () => {
  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test("Books page has header", async ({ booksPage }) => {
    // Expect a title "to contain" a substring.
    await booksPage.assertPageHeader();
  });

  test("'Books' accordion section opens", async ({ booksPage }) => {
    await booksPage.accordionSection.booksSection.isOpen();
    });

  test("'Books' accordion section closes", async ({ booksPage }) => {
    await booksPage.accordionSection.booksSection.rootItem.click();
    await booksPage.accordionSection.booksSection.isClose();
  });


});
