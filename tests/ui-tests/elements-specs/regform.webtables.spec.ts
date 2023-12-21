import { test, expect } from "../../fixtures/elements.fixture";
import { WebTablesRandomData } from '../../testdata/elements/webtables.data';

const data = new WebTablesRandomData();

test.describe.configure({ mode: 'serial' });
test.describe("Web Tables. Registration Form - ADD user tests", () => {

    test.beforeEach( async ({ webTablesPage })=>{
        await webTablesPage.addButton.click();
    })

    test("Registration Form is Open", async ({ webTablesPage }) => {
        await webTablesPage.regForm.assertFormIsVisible(true);
    });

    test("Has header 'Registration Form'", async ({ webTablesPage }) => {
        await webTablesPage.regForm.assertFormTitle();
    });

    test("Registration Form is Close", async ({ webTablesPage }) => {
        await webTablesPage.regForm.closeButton.click();
        await webTablesPage.regForm.assertFormIsVisible(false);
    });

    test("Click out of the Registration Form close Form", async ({ webTablesPage }) => {
        await webTablesPage.regForm.outOfRegForm.click();
        await webTablesPage.regForm.assertFormIsVisible(false);
    });

    test.only("Check Submit Empty From", async ({ webTablesPage }) => {
        await webTablesPage.regForm.submitButton.click();
        await expect(webTablesPage.regForm.SalaryInput).toHaveCSS('border', '1px solid rgb(220, 53, 69)');
    });




// 25, 25, ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$


    // test.only(` Click to Column header `, async ({ webTablesPage }) => {
    //     const text = await webTablesPage.rowGroup.allInnerTexts();
    //     console.log(text)
    // });


});

test.describe("Web Tables. Registration Form - EDIT user tests", () => {

    test.beforeEach( async ({ webTablesPage })=>{
        await webTablesPage.addButton.click();
    })

    test("Has header 'Registration Form'", async ({ webTablesPage }) => {
        await webTablesPage.regForm.assertFormTitle();
    });



});
