import { test, expect } from "../../fixtures/elements.fixture";

test.describe("Check Box element tests", () => {

    test("Forms page has header", async ({ checkboxPage }) => {
        await checkboxPage.header.selectText;
        await checkboxPage.assertPageHeader();
    });

    test.only("Test Expand and Collapse in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.expandAllButton.click();
        // await checkboxPage.collapseAllButton.click();

        await checkboxPage.homeToggle.click()
        await checkboxPage.homeToggle.click()

        await checkboxPage.desktopToggle.click()
        await checkboxPage.desktopToggle.click()

        await checkboxPage.documentsToggle.click()
        await checkboxPage.documentsToggle.click()

        await checkboxPage.workspaceToggle.click()
        await checkboxPage.workspaceToggle.click()

        await checkboxPage.officeToggle.click()
        await checkboxPage.officeToggle.click()

        await checkboxPage.downloadsToggle.click()
        await checkboxPage.downloadsToggle.click()

    });
});
