import { test, expect } from "../../fixtures/elements.fixture";
// import { TextboxRandomData } from '../../testdata/elements/textbox.data';

// let data = new TextboxRandomData();

const headerNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];

test.describe.configure({ mode: 'serial' });
test.describe.only("Web tables tests", () => {

    // test.beforeAll( async ()=>{
    //     let data = new TextboxRandomData;
    // })
    test("Has header ", async ({ webTablesPage }) => {
        await webTablesPage.header.selectText;
        await webTablesPage.assertPageHeader();
    });
    for (const headerName of headerNames) {
        test(` Click to Column header ${headerName} `, async ({ webTablesPage }) => {
            await webTablesPage.columnHeaders[headerName].click();
            
            await webTablesPage.assertPageHeader();
        });
    }

});
