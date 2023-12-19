import { test, expect } from "../../fixtures/elements.fixture";
const toggleNames = ['Home', 'Desktop', 'Documents', 'WorkSpace', 'Office', 'Downloads'];
const toggleNamesLevel2 = ['Desktop', 'Documents', 'Downloads'];
const toggleNamesLevel3 = ['WorkSpace', 'Office'];

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


    for (const toggleName of toggleNamesLevel2) {
        test(`Expand ${toggleName} in checkbox`, async ({ checkboxPage }) => {
            await checkboxPage.toggles['Home'].click();
            await checkboxPage.toggles[toggleName].click();
            await checkboxPage.assertToggleExpanded(toggleName);
        });
    }

    for (const toggleName of toggleNamesLevel3) {
        test(`Expand ${toggleName} in checkbox`, async ({ checkboxPage }) => {
            await checkboxPage.toggles['Home'].click();
            await checkboxPage.toggles['Documents'].click();
            await checkboxPage.toggles[toggleName].click();
            await checkboxPage.assertToggleExpanded(toggleName);
        });
    }

    for (const toggleName of toggleNamesLevel2) {
        test(`Check visibility checkbox in expand  ${toggleName}`, async ({ checkboxPage }) => {
            await checkboxPage.toggles['Home'].click();
            await checkboxPage.toggles[toggleName].click();
            await checkboxPage.assertVisibilityCheckBoxes(toggleName,true);
        });
    }

    for (const toggleName of toggleNamesLevel3) {
        test(`Check visibility checkbox in expand  ${toggleName}`, async ({ checkboxPage }) => {
            await checkboxPage.toggles['Home'].click();
            await checkboxPage.toggles['Documents'].click();
            await checkboxPage.toggles[toggleName].click();
            await checkboxPage.assertVisibilityCheckBoxes(toggleName,true);
        });
    }


});

test.describe.only("Check Box element tests", () => {
    test("Collapse All in checkbox by default", async ({ checkboxPageExpandAll }) => {
        await checkboxPageExpandAll.collapseAllButton.click();
        await checkboxPageExpandAll.assertAllTogglesCollapsed();
    });


    for (const toggleName of toggleNames) {
        test(`Check collapse status for ${toggleName}`, async ({ checkboxPageExpandAll }) => {
            await checkboxPageExpandAll.toggles[toggleName].click();
            await checkboxPageExpandAll.assertToggleCollapsed(toggleName);
        });
    }

    for (const toggleName of toggleNames) {
        test(`Check visibility checkbox in collapse ${toggleName}`, async ({ checkboxPageExpandAll }) => {
            await checkboxPageExpandAll.toggles[toggleName].click();
            await checkboxPageExpandAll.assertVisibilityCheckBoxes(toggleName,false);
        });
    }
});
