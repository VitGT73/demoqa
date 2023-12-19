import { test, expect } from "../../fixtures/elements.fixture";

test.describe.only("Check Box element tests", () => {

    test("Forms page has header", async ({ checkboxPage }) => {
        await checkboxPage.header.selectText;
        await checkboxPage.assertPageHeader();
    });

    test("Test Collapsed All in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.assertAllTogglesCollapsed();
    });

    test("Test Expand All in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.expandAllButton.click();
        await checkboxPage.assertAllTogglesExpanded();

    });

    test("Test Expand Home group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.toggles['Home'].click();
        await checkboxPage.assertToggleExpanded('Home');
    });

    test("Test Expand Desktop group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.toggles['Home'].click();
        await checkboxPage.toggles['Desktop'].click();
        await checkboxPage.assertToggleExpanded('Desktop');
    });

    test("Test Expand Documents group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.toggles['Home'].click();
        await checkboxPage.toggles['Documents'].click();
        await checkboxPage.assertToggleExpanded('Documents');
    });

    test("Test Expand Downloads group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.toggles['Home'].click();
        await checkboxPage.toggles['Downloads'].click();
        await checkboxPage.assertToggleExpanded('Downloads');
    });

    test("Test Expand Office group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.toggles['Home'].click();
        await checkboxPage.toggles['Documents'].click();
        await checkboxPage.toggles['Office'].click();
        await checkboxPage.assertToggleExpanded('Office');
    });

    test("Test Expand WorkSpace group in checkbox", async ({ checkboxPage }) => {
        await checkboxPage.toggles['Home'].click();
        await checkboxPage.toggles['Documents'].click();
        await checkboxPage.toggles['WorkSpace'].click();
        await checkboxPage.assertToggleExpanded('WorkSpace');
    });
});

test.describe.only("Check Box element tests", () => {
    test("Collapse All in checkbox by default", async ({ checkboxPageExpandAll }) => {
        await checkboxPageExpandAll.collapseAllButton.click();
        await checkboxPageExpandAll.assertAllTogglesCollapsed();
    });
    test("Collapse Home in checkbox by default", async ({ checkboxPageExpandAll }) => {
        await checkboxPageExpandAll.toggles['Home'].click();
        await checkboxPageExpandAll.assertToggleCollapsed('Home');
    });
    test("Collapse Desktop in checkbox by default", async ({ checkboxPageExpandAll }) => {
        await checkboxPageExpandAll.toggles['Desktop'].click();
        await checkboxPageExpandAll.assertToggleCollapsed('Desktop');
    });
    test("Collapse Documents in checkbox by default", async ({ checkboxPageExpandAll }) => {
        await checkboxPageExpandAll.toggles['Documents'].click();
        await checkboxPageExpandAll.assertToggleCollapsed('Documents');
    });
    test("Collapse Office in checkbox by default", async ({ checkboxPageExpandAll }) => {
        await checkboxPageExpandAll.toggles['Office'].click();
        await checkboxPageExpandAll.assertToggleCollapsed('Office');
    });
    test("Collapse WorkSpace in checkbox by default", async ({ checkboxPageExpandAll }) => {
        await checkboxPageExpandAll.toggles['WorkSpace'].click();
        await checkboxPageExpandAll.assertToggleCollapsed('WorkSpace');
    });
    test("Collapse Downloads in checkbox by default", async ({ checkboxPageExpandAll }) => {
        await checkboxPageExpandAll.toggles['Downloads'].click();
        await checkboxPageExpandAll.assertToggleCollapsed('Downloads');
    });



});
