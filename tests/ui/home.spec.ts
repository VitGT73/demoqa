// import { test, expect } from '@playwright/test';
import { test , expect } from '../fixtures/pages.fixture';

test.describe('@smock Demoqa tests', () => {
  test('Demoqa has title', async ({ page, homePage }) => {
    await homePage.load();

    // Expect a title "to contain" a substring.
    await homePage.assertPageTitle();
  });

  test('load page Alerts', async ({ page, homePage, alertsPage }) => {
    await homePage.load();
    await homePage.cardAlerts.click();
    await alertsPage.assertPageHeader();
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

  test('load page Forms', async ({ page, homePage, formsPage }) => {
    await homePage.load();
    await homePage.cardElements.click();
    await formsPage.assertPageHeader();
  });

  test('load page Widgets', async ({ page, homePage, widgetsPage }) => {
    await homePage.load();
    await homePage.cardElements.click();
    await widgetsPage.assertPageHeader();
  });
});
