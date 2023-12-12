// import { test, expect } from '@playwright/test';
import { test , expect } from '../fixtures/pages.fixture';

test.describe('@smock Demoqa tests', () => {
  test('Demoqa has title', async ({ page, homePage }) => {
    await homePage.load();

    // Expect a title "to contain" a substring.
    await homePage.assertPageTitle();
  });

  test('load page Alert', async ({ page, homePage, alertPage }) => {
    await homePage.load();
    await homePage.cardAlerts.click();
    await alertPage.assertPageHeader();
  });

  test('load page Books', async ({ page, homePage, booksPage }) => {
    await homePage.load();
    await homePage.cardBooks.click();
    await booksPage.assertPageHeader();
  });

  test('load page Elements', async ({ page, homePage, elementsPage }) => {
    await homePage.load();
    await homePage.cardElements.click();
    await elementsPage.assertPageHeader();
  });
});
