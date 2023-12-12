// import { test, expect } from '@playwright/test';
import { test , expect } from '../fixtures/pages.fixture';

test.describe('@smock Demoqa tests', () => {

  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test('Demoqa has title', async ({ page, homePage }) => {

    // Expect a title "to contain" a substring.
    await homePage.assertPageTitle();
  });

  test('load page Alerts', async ({ page, homePage, alertsPage }) => {

    await homePage.cardAlerts.click();
    await alertsPage.assertPageUrl();
  });

  test('load page Books', async ({ page, homePage, booksPage }) => {

    await homePage.cardBooks.click();
    await booksPage.assertPageUrl();
  });

  test('load page Elements', async ({ page, homePage, elementsPage }) => {

    await homePage.cardElements.click();
    await elementsPage.assertPageUrl();
  });

  test('load page Forms', async ({ page, homePage, formsPage }) => {

    await homePage.cardForms.click();
    await formsPage.assertPageUrl();
  });

  test('load page Widgets', async ({ page, homePage, widgetsPage }) => {
    await homePage.cardWidgets.click();
    await widgetsPage.assertPageUrl();
  });

  test('load page Interactions', async ({ page, homePage, interactionsPage }) => {
    await homePage.cardInteractions.click();
    await interactionsPage.assertPageUrl();
  });
});
