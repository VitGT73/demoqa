// import { test, expect } from '@playwright/test';
import { test } from "../../fixtures/pages.fixture";

test.describe("Alerts section tests", () => {
  // test.beforeEach(async ({ page, homePage }) => {
  //   await homePage.load();
  // });

  test("Alerts page has header", async ({ alertsPage }) => {
    // Expect a title "to contain" a substring.
    await alertsPage.assertPageHeader();
  });

  test("'Alerts' accordion section opens", async ({ alertsPage }) => {
    await alertsPage.accordionSection.alertsSection.isOpen();
    });

  test("'Alerts' accordion section closes", async ({ alertsPage }) => {
    await alertsPage.accordionSection.alertsSection.rootItem.click();
    await alertsPage.accordionSection.alertsSection.isClose();
  });


});
