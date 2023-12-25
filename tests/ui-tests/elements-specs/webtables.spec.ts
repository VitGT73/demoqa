import { test, expect } from "../../fixtures/elements.fixture";
import { WebTablesRandomData } from '../../testdata/elements/webtables.data';
import { countRowAllowedValues } from '../../interfaces/webtables.interface';
import { count } from "console";

// let data = new TextboxRandomData();

// const headerNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];

// test.describe.configure({ mode: 'serial' });
test.describe("Web tables tests", () => {

    // test.beforeAll( async ()=>{
    //     let data = new TextboxRandomData;
    // })
    test("Has header 'Web Tables'", async ({ webTablesPage }) => {
        await webTablesPage.header.selectText;
        await webTablesPage.assertPageHeader();
    });

    test(` Click to Column header `, async ({ webTablesPage }) => {
        const text = await webTablesPage.allDataRows.allInnerTexts();
        console.log(text)
    });

    for (const count of countRowAllowedValues) {
        test.only(`Set ${count} Row in List box`, async ({ webTablesPage }) => {
            await webTablesPage.setCountRowsOnPage(count)
            await webTablesPage.assertCountAllDataRow(count)
        });
    }
    test.fixme(`Get rows from Table`, async ({ webTablesPage }) => {
        await webTablesPage.page.waitForTimeout(1000)
        await webTablesPage.tableRows[3].deleteButton.click()
        await webTablesPage.page.waitForTimeout(3000)

        // const text = await webTablesPage.getPersonFromWebTableRow(row);
        // console.log(text)
    });

    test.fixme("Add one Person with valid data", async ({ webTablesPage }) => {
        let person
        for (let i = 1; i < 15; i++) {
            person = data.getWebTableData()
            // console.log('Person in test: ',person)
            await webTablesPage.regForm.AddPerson(person);
        }
        await webTablesPage.assertAddedPersonInTheTable(person)
        // await webTablesPage.assertAddedPersonInTheTable(person)
    });

    test.fixme("Add 12 Person with valid data", async ({ webTablesPage }) => {
        let person
        for (let i = 1; i < 15; i++) {
            person = data.getWebTableData()
            // console.log('Person in test: ',person)
            await webTablesPage.regForm.AddPerson(person);
        }
        await webTablesPage.assertAddedPersonInTheTable(person)
        // await webTablesPage.assertAddedPersonInTheTable(person)
    });

    // for (const headerName of headerNames) {
    //     test(` Click to Column header ${headerName} `, async ({ webTablesPage }) => {
    //         await webTablesPage.columnHeaders[headerName].click();
    //         await webTablesPage.assertPageHeader();
    //     });
    // }

});
