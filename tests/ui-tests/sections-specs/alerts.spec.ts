import { test } from "../../fixtures/pages.fixture";

test.describe ("@Smoke Alerts page. Section - 'Alerts', open every example", () => {
    test.beforeEach(async ({ alertsPage }) => {
        await alertsPage.load();
    });

    test("Open Browser Windows example", async ({ alertsPage }) => {
        await alertsPage.accordionSection.alertsSection.browserWindowsItem.click();
        await alertsPage.accordionSection.alertsSection.browserWindowsExample.assertPageUrl();
    });
    test("Open Alerts example", async ({ alertsPage }) => {
        await alertsPage.accordionSection.alertsSection.alertsItem.click();
        await alertsPage.accordionSection.alertsSection.alertsExample.assertPageUrl();
    });
    test("Open Frames example", async ({ alertsPage }) => {
        await alertsPage.accordionSection.alertsSection.framesItem.click();
        await alertsPage.accordionSection.alertsSection.framesExample.assertPageUrl();
    });
    test("Open Nested Frames example", async ({ alertsPage }) => {
        await alertsPage.accordionSection.alertsSection.nestedFramesItem.click();
        await alertsPage.accordionSection.alertsSection.nestedFramesExample.assertPageUrl();
    });
    test("Open Modal Dialogs example", async ({ alertsPage }) => {
        await alertsPage.accordionSection.alertsSection.modalDialogItem.click();
        await alertsPage.accordionSection.alertsSection.modalDialogExample.assertPageUrl();
    });

});
