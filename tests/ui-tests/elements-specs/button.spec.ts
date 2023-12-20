import { test, expect } from "../../fixtures/elements.fixture";
// import { TextboxRandomData } from '../../testdata/elements/textbox.data';

// let data = new TextboxRandomData();

// test.describe.configure({ mode: 'serial' });
test.describe("Buttons tests", () => {
    // test.beforeAll( async ()=>{
    //     let data = new TextboxRandomData;
    // })
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
