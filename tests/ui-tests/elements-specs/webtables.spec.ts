import { test, expect } from "../../fixtures/elements.fixture";
// import { TextboxRandomData } from '../../testdata/elements/textbox.data';

// let data = new TextboxRandomData();

// const headerNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];

test.describe.configure({ mode: 'serial' });
test.describe("Web tables tests", () => {

    // test.beforeAll( async ()=>{
    //     let data = new TextboxRandomData;
    // })
    test("Has header 'Web Tables'", async ({ webTablesPage }) => {
        await webTablesPage.header.selectText;
        await webTablesPage.assertPageHeader();
    });

    test(` Click to Column header `, async ({ webTablesPage }) => {
        const text = await webTablesPage.rowGroup.allInnerTexts();
        console.log(text)
    });
    test.only(`Get rows from Table`, async ({ webTablesPage }) => {
        const text = await webTablesPage.getDataArrayFromRows();
        console.log(text)
    });

    // for (const headerName of headerNames) {
    //     test(` Click to Column header ${headerName} `, async ({ webTablesPage }) => {
    //         await webTablesPage.columnHeaders[headerName].click();
    //         await webTablesPage.assertPageHeader();
    //     });
    // }

});
