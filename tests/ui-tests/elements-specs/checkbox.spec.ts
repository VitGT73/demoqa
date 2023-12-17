import { test, expect } from "../../fixtures/elements.fixture";

test.describe("Check Box element tests", () => {

    test("Forms page has header", async ({ checkboxPage }) => {
        await checkboxPage.header.selectText;
        await checkboxPage.assertPageHeader();
    });

    test.only("Test Expand All in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.expandAllButton.click();
        await checkboxPage.assertExpandAll();


    });
    test.only("Test Collapse All in checkbox", async ({ checkboxPage }) => {
        // await checkboxPage.expandAllButton.click();
        // await checkboxPage.collapseAllButton.click();
        await checkboxPage.assertCollapseAll();
    });

    test.only("Test Expand Office group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.expandAllButton.click();
        await checkboxPage.officeToggle.click();
        await checkboxPage.officeToggle.click();
        await checkboxPage.assertExpandOffice();
    });
});
