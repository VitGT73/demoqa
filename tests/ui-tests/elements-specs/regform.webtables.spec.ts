import { test, expect } from "../../fixtures/elements.fixture";
import { WebTablesRandomData } from '../../testdata/elements/webtables.data';

const data = new WebTablesRandomData();

test.describe.configure({ mode: 'serial' });
test.describe.only("Web Tables. Registration Form - ADD user tests", () => {

    test.beforeAll( async ({ webTablesPage })=>{
        await webTablesPage.addButton.click();
    })

    test("Has header 'Registration Form'", async ({ webTablesPage }) => {
        await webTablesPage.RegForm.assertPageHeader();
        await webTablesPage.assertPageHeader();
    });

    // test.only(` Click to Column header `, async ({ webTablesPage }) => {
    //     const text = await webTablesPage.rowGroup.allInnerTexts();
    //     console.log(text)
    // });


});

test.describe("Web Tables. Registration Form - EDIT user tests", () => {

    test.beforeAll( async ({ webTablesPage })=>{
        await webTablesPage.addButton.click();
    })

    test("Has header ", async ({ webTablesPage }) => {
        await webTablesPage.header.selectText;
        await webTablesPage.assertPageHeader();
    });

    test.only(` Click to Column header `, async ({ webTablesPage }) => {
        const text = await webTablesPage.rowGroup.allInnerTexts();
        console.log(text)
    });


});
