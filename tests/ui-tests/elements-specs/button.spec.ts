import { test, expect } from "../../fixtures/elements.fixture";

test.describe("Buttons tests", () => {

    test("Button page has header ", async ({ buttonPage }) => {
        await buttonPage.header.selectText;
        await buttonPage.assertPageHeader();
    });

    test("Check Double click Button", async ({ buttonPage }) => {
        await buttonPage.dblClickButton.dblclick();
        await buttonPage.assertDbkClickMessage();
    });


    test("Check Right click Button", async ({ buttonPage }) => {
        await buttonPage.rightClickButton.click({ button: 'right' });
        await buttonPage.assertRightClickMessage();
    });

    test("Check Dynamic click Button", async ({ buttonPage }) => {
        await buttonPage.dynamicClickButton.click();
        await buttonPage.assertDynamicClickMessage();
    });

});
