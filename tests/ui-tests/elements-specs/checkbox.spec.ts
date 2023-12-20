import { test } from "../../fixtures/elements.fixture";
import { CheckboxData } from "../../testdata/elements/checkbox.data";

const data = new CheckboxData();
// const checkboxNames = [
//     'Home', 'Desktop', 'Notes', 'Commands', 'Documents', 'WorkSpace', 'React',
//     'Angular', 'Veu', 'Office', 'Public', 'Private', 'Classified', 'General',
//     'Downloads', 'Word File.doc', 'Excel File.doc'
// ];
// const toggleNames = ['Home', 'Desktop', 'Documents', 'WorkSpace', 'Office', 'Downloads'];
// const toggleNamesLevel2 = ['Desktop', 'Documents', 'Downloads'];
// const toggleNamesLevel3 = ['WorkSpace', 'Office'];

// test.describe.configure({ mode: 'serial' });
test.describe("Check Box.", () => {
    // test.beforeEach('Prepare test data',async({checkboxPage})=>{

    // });

    test.describe("Main test", () => {
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


        for (const toggleName of data.toggleNamesLevel2) {
            test(`Expand ${toggleName} in checkbox`, async ({ checkboxPage }) => {
                await checkboxPage.toggles['Home'].click();
                await checkboxPage.toggles[toggleName].click();
                await checkboxPage.assertToggleExpanded(toggleName);
            });
        }

        for (const toggleName of data.toggleNamesLevel3) {
            test(`Expand ${toggleName} in checkbox`, async ({ checkboxPage }) => {
                await checkboxPage.toggles['Home'].click();
                await checkboxPage.toggles['Documents'].click();
                await checkboxPage.toggles[toggleName].click();
                await checkboxPage.assertToggleExpanded(toggleName);
            });
        }

        for (const toggleName of data.toggleNamesLevel2) {
            test(`Check visibility checkbox in expand  ${toggleName}`, async ({ checkboxPage }) => {
                await checkboxPage.toggles['Home'].click();
                await checkboxPage.toggles[toggleName].click();
                await checkboxPage.assertVisibilityCheckBoxes(toggleName, true);
            });
        }

        for (const toggleName of data.toggleNamesLevel3) {
            test(`Check visibility checkbox in expand  ${toggleName}`, async ({ checkboxPage }) => {
                await checkboxPage.toggles['Home'].click();
                await checkboxPage.toggles['Documents'].click();
                await checkboxPage.toggles[toggleName].click();
                await checkboxPage.assertVisibilityCheckBoxes(toggleName, true);
            });
        }

    });
});

test.describe("Collapse tests", () => {
    test.beforeEach('Expand All',async({checkboxPage})=>{
        await checkboxPage.expandAllButton.click();
    });

    test("Collapse All validate", async ({ checkboxPage }) => {
        await checkboxPage.collapseAllButton.click();
        await checkboxPage.assertAllTogglesCollapsed();
    });


    for (const toggleName of data.toggleNames) {
        test(`Check collapse status for ${toggleName}`, async ({ checkboxPage }) => {
            await checkboxPage.toggles[toggleName].click();
            await checkboxPage.assertToggleCollapsed(toggleName);
        });
    }

    for (const toggleName of data.toggleNames) {
        test(`Check visibility checkbox in collapse ${toggleName}`, async ({ checkboxPage }) => {
            await checkboxPage.toggles[toggleName].click();
            await checkboxPage.assertVisibilityCheckBoxes(toggleName, false);
        });
    }
});

test.describe("Check elements tests", () => {
    // test.describe.configure({ mode: 'serial' });
    test.beforeEach('Expand All',async({checkboxPage})=>{
        await checkboxPage.expandAllButton.click();
    });



    for (const checkboxName of data.checkboxNames) {
        test(`Validate checked after click to ${checkboxName}`, async ({ checkboxPage }) => {
            await checkboxPage.checkboxes[checkboxName].click();
            await checkboxPage.assertChecked(checkboxName,true);
        });
    }

    for (const checkboxName of data.checkboxNames) {
        test(`Validate unchecked after two click to ${checkboxName}`, async ({ checkboxPage }) => {
            await checkboxPage.checkboxes[checkboxName].click();
            await checkboxPage.checkboxes[checkboxName].click();
            await checkboxPage.assertChecked(checkboxName,false);
        });
    }

    for (const checkboxName of data.checkboxNames) {
        test(`Check status after check ${checkboxName}`, async ({ checkboxPage }) => {
            await checkboxPage.checkboxes[checkboxName].click();
            await checkboxPage.assertCheckboxStatus(checkboxName,true);
        });
    }

    for (const checkboxName of data.checkboxNames) {
        test(`Check status after uncheck ${checkboxName}`, async ({ checkboxPage }) => {
            await checkboxPage.checkboxes[checkboxName].click();
            await checkboxPage.checkboxes[checkboxName].click();
            await checkboxPage.assertCheckboxStatus(checkboxName,false);
        });
    }

    test(`Validate random select ${data.randomClickCount} checkboxes`, async ({ checkboxPage }) => {
        await checkboxPage.clickRandomCheckboxes(data.randomClickCount)
        await checkboxPage.toggles['Documents'].click()
        await checkboxPage.assertMessageContainsSelectedStatuses();
    });

});
