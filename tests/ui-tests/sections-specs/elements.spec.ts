// import { test, expect } from '@playwright/test';
import { test } from "../../fixtures/pages.fixture";

test.describe("@Smoke Forms page. Section - 'Elements', open every example", () => {
    test.beforeEach(async ({ elementsPage }) => {
        await elementsPage.load();
    });

    test("Open Text box example", async ({ elementsPage }) => {
        await elementsPage.accordionSection.elementsSection.textBoxItem.click();
        await elementsPage.accordionSection.elementsSection.textBoxExample.assertPageUrl();
    });

    test("Open Check box example", async ({ elementsPage }) => {
        await elementsPage.accordionSection.elementsSection.checkBoxItem.click();
        await elementsPage.accordionSection.elementsSection.checkBoxExample.assertPageUrl();
    });

    test("Open Radio Button example", async ({ elementsPage }) => {
        await elementsPage.accordionSection.elementsSection.radioButtonItem.click();
        await elementsPage.accordionSection.elementsSection.radioButtonExample.assertPageUrl();
    });

    test("Open Web Tables example", async ({ elementsPage }) => {
        await elementsPage.accordionSection.elementsSection.webTablesItem.click();
        await elementsPage.accordionSection.elementsSection.webTablesExample.assertPageUrl();
    });

    test("Open Buttons example", async ({ elementsPage }) => {
        await elementsPage.accordionSection.elementsSection.buttonsItem.click();
        await elementsPage.accordionSection.elementsSection.buttonExample.assertPageUrl();
    });

    test("Open Links example", async ({ elementsPage }) => {
        await elementsPage.accordionSection.elementsSection.linksItem.click();
        await elementsPage.accordionSection.elementsSection.linksExample.assertPageUrl();
    });

    test("Open Broken Links example", async ({ elementsPage }) => {
        await elementsPage.accordionSection.elementsSection.brockenLinksItem.click();
        await elementsPage.accordionSection.elementsSection.brokenLinksExample.assertPageUrl();
    });

    test("Open Upload and Dowload example", async ({ elementsPage }) => {
        await elementsPage.accordionSection.elementsSection.uploadAddDownloadItem.click();
        await elementsPage.accordionSection.elementsSection.uploadAndDownloadExample.assertPageUrl();

    });
    test("Open Dynamic Properties example", async ({ elementsPage }) => {
        await elementsPage.accordionSection.elementsSection.dynamicPropertiesItem.click();
        await elementsPage.accordionSection.elementsSection.dynamicPropertiesExample.assertPageUrl();
    });

});
