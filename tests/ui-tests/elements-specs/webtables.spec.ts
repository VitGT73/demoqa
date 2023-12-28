import { test, expect } from "../../fixtures/elements.fixture";
import { WebTablesRandomData } from '../../testdata/elements/webtables.data';
import { countRowAllowedValues } from '../../interfaces/webtables.interface';
import { count } from "console";

let data = new WebTablesRandomData();

// const headerNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];

// test.describe.configure({ mode: 'serial' });
test.describe("Web tables tests", () => {

    // test.beforeAll( async ()=>{
    //     let data = new TextboxRandomData;
    // })
    test("Has header 'Web Tables'", async ({ webTablesPage }) => {
        await webTablesPage.$header.selectText;
        await webTablesPage.assertPageHeader();
    });

    test.fixme(` Click to Column header `, async ({ webTablesPage }) => {
        const text = await webTablesPage.$dataRows.allInnerTexts();
    });

    for (const count of countRowAllowedValues) {
        test(`Set ${count} Row in List box`, async ({ webTablesPage }) => {
            await webTablesPage.setCountRowsOnPage(count)
            await webTablesPage.assertCountAllDataRow(count)
        });
    }

    for (let num of [3,2,1]) {
        test.only(`Delete one row number: ${num}`, async ({ webTablesPage }) => {
            const countRow = await webTablesPage.$dataRows.count();
            await webTablesPage.deleteRowFromGrid(num)
            // await webTablesPage.page.waitForTimeout(3000)
            await expect(webTablesPage.$dataRows).toHaveCount(countRow-1)
        });
    }

    test.only(` Delete all start row `, async ({ webTablesPage }) => {
        const countRow = await webTablesPage.$dataRows.count();
        for (let num = countRow; num >= 1; num--) {
            await webTablesPage.deleteRowFromGrid(num)
            // await webTablesPage.page.waitForTimeout(3000)
            await expect(webTablesPage.$dataRows).toHaveCount(num-1)
        }
    });

    test("Add one Person with valid data", async ({ webTablesPage }) => {
        let person = data.getWebTableData();
        await webTablesPage.$addButton.click()
        await webTablesPage.regForm.FillForm(person);
        await webTablesPage.assertAddedPersonInTheTable(person)
        // await webTablesPage.assertAddedPersonInTheTable(person)
    });

    test.fixme("Add 12 Person with valid data", async ({ webTablesPage }) => {
        let person
        for (let i = 1; i < 15; i++) {
            person = data.getWebTableData()
            // console.log('Person in test: ',person)
            await webTablesPage.regForm.FillForm(person);
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


    // test(` Check listbox `, async ({ webTablesPage }) => {
    //     const result1 = await webTablesPage.$countRowsOnPageListBox.allInnerTexts();
    //     console.log(result1)
    //     const result2 = await webTablesPage.$countRowsOnPageListBox.inputValue();
    //     console.log(result2)
    // });

});
