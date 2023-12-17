import { test, expect } from "../../fixtures/elements.fixture";

test.describe("Check Box element tests", () => {

    test("Forms page has header", async ({ checkboxPage }) => {
        await checkboxPage.header.selectText;
        await checkboxPage.assertPageHeader();
    });

    test("Test Collapsed All in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.assertCollapseAll();
    });

    test("Test Expand All in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.expandAllButton.click();
        await checkboxPage.assertExpandAll();

    });

    test("Test Expand Home group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.homeToggle.click();
        await checkboxPage.assertExpandHome();
    });

    test("Test Expand Desktop group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.homeToggle.click();
        await checkboxPage.desktopToggle.click();
        await checkboxPage.assertExpandDesktop();
    });

    test("Test Expand Documents group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.homeToggle.click();
        await checkboxPage.documentsToggle.click();
        await checkboxPage.assertExpandDocuments();
    });

    test("Test Expand Downloads group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.homeToggle.click();
        await checkboxPage.downloadsToggle.click();
        await checkboxPage.assertExpandDownloads();
    });

    test("Test Expand Office group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.homeToggle.click();
        await checkboxPage.documentsToggle.click();
        await checkboxPage.officeToggle.click();
        await checkboxPage.assertExpandOffice();
    });

    test("Test Expand WorkSpace group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.homeToggle.click();
        await checkboxPage.documentsToggle.click();
        await checkboxPage.workspaceToggle.click();
        await checkboxPage.assertExpandWorkspace();
    });
});

test.describe("Check Box element tests", () => {
    test("Collapse All in checkbox by default", async ({ checkboxPageExpandAll }) => {
        await checkboxPageExpandAll.collapseAllButton.click();
        await checkboxPageExpandAll.assertCollapseAll();
    });




});
