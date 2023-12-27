import { test, expect } from "../../fixtures/elements.fixture";
import { WebTablesRandomData } from '../../testdata/elements/webtables.data';


const data = new WebTablesRandomData();

// test.describe.configure({ mode: 'serial' });
test.describe("Web Tables. Registration Form.", () => {
    test.describe("General tests", () => {

        test.beforeEach(async ({ webTablesPage }) => {
            await webTablesPage.$addButton.click();
        })

        test("Check Form is Open", async ({ webTablesPage }) => {
            await webTablesPage.regForm.assertFormIsVisible(true);
        });

        test("Check Has header 'Registration Form'", async ({ webTablesPage }) => {
            await webTablesPage.regForm.assertFormTitle(true);
        });

        test("Form is Close after click to X", async ({ webTablesPage }) => {
            await webTablesPage.regForm.closeButton.click();
            await webTablesPage.regForm.assertFormIsVisible(false);
        });

        test("Form is Close after press ESC", async ({ webTablesPage }) => {
            await webTablesPage.page.keyboard.press('Escape');
            await webTablesPage.regForm.assertFormIsVisible(false);
        });

        test(`Form is Close after click out of the Form`, async ({ webTablesPage }) => {
            // await webTablesPage.regForm.outOfRegForm.click({force:true})
            // await webTablesPage.page.locator('//body').click({force:true})
            await webTablesPage.regForm.clickOutOfForm();
            await webTablesPage.regForm.assertFormIsVisible(false);
        });


        test("Click 'Submit' after Fill Form valid data", async ({ webTablesPage }) => {
            const person = data.getWebTableData()
            // console.log('Person in test: ',person)
            await webTablesPage.regForm.FillForm(person);
            await webTablesPage.regForm.assertFormIsVisible(false);

        });


    });


    test.describe("Fill form (negative)", () => {

        test.beforeEach(async ({ webTablesPage }) => {
            await webTablesPage.$addButton.click();
        })

        test("Check Submit Empty From", async ({ webTablesPage }) => {
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertAllFieldHasRedBorder()
        });

        test("All data valid except First Name", async ({ webTablesPage }) => {
            const person = data.getNoValidWebTableData('First Name')
            await webTablesPage.regForm.FillForm(person);
            await webTablesPage.regForm.assertOneFieldRedOtherGreen('First Name')
        });

        test("All data valid except Last Name", async ({ webTablesPage }) => {
            const person = data.getNoValidWebTableData('Last Name')
            await webTablesPage.regForm.FillForm(person);
            await webTablesPage.regForm.assertOneFieldRedOtherGreen('Last Name')
        });

        test("All data valid except Email", async ({ webTablesPage }) => {
            const person = data.getNoValidWebTableData('Email')
            await webTablesPage.regForm.FillForm(person);
            await webTablesPage.regForm.assertOneFieldRedOtherGreen('Email')
        });

        test("All data valid except Age", async ({ webTablesPage }) => {
            const person = data.getNoValidWebTableData('Age')
            await webTablesPage.regForm.FillForm(person);
            await webTablesPage.regForm.assertOneFieldRedOtherGreen('Age')
        });

        test("All data valid except Salary", async ({ webTablesPage }) => {
            const person = data.getNoValidWebTableData('Salary')
            await webTablesPage.regForm.FillForm(person);
            await webTablesPage.regForm.assertOneFieldRedOtherGreen('Salary')
        });

        test("All data valid except Department", async ({ webTablesPage }) => {
            const person = data.getNoValidWebTableData('Department')
            await webTablesPage.regForm.FillForm(person);
            await webTablesPage.regForm.assertOneFieldRedOtherGreen('Department')
        });


    });

    test.describe("Validate fields", () => {

        test.beforeEach(async ({ webTablesPage }) => {
            await webTablesPage.$addButton.click();
        })

        test("First Name", async ({ webTablesPage }) => {
            await webTablesPage.regForm.firstNameInput.fill(data.getFirstName(true))
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertFirstNameInput(true)
        });

        test("Last Name", async ({ webTablesPage }) => {
            await webTablesPage.regForm.lastNameInput.fill(data.getLastName(true))
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertLastNameInput(true)
        });

        test("Email", async ({ webTablesPage }) => {
            await webTablesPage.regForm.emailInput.fill(String(data.getEmail(true)))
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertEmailInput(true)
        });


        test("Age", async ({ webTablesPage }) => {
            await webTablesPage.regForm.ageInput.fill(String(data.getAge(true)))
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertAgeInput(true)
        });

        test("Salary", async ({ webTablesPage }) => {
            await webTablesPage.regForm.salaryInput.fill(String(data.getSalary(true)))
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertSalaryInput(true)
        });
        test("Department", async ({ webTablesPage }) => {
            await webTablesPage.regForm.departmentInput.fill(data.getDepartment(true))
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertDepartmentInput(true)
        });
    });

    test.describe("Validate fields (negative)", () => {

        test.beforeEach(async ({ webTablesPage }) => {
            await webTablesPage.$addButton.click();
        })

        test("Empty First Name", async ({ webTablesPage }) => {
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertFirstNameInput(false)
        });

        test("Empty Last Name", async ({ webTablesPage }) => {
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertLastNameInput(false)
        });

        test("Empty Email", async ({ webTablesPage }) => {
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertEmailInput(false)
        });
        test("Empty Age", async ({ webTablesPage }) => {
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertAgeInput(false)
        });

        test("Empty Salary", async ({ webTablesPage }) => {
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertSalaryInput(false)
        });

        test("Empty Department", async ({ webTablesPage }) => {
            await webTablesPage.regForm.submitButton.click();
            await webTablesPage.regForm.assertDepartmentInput(false)
        });

    });



    test.describe("Validate E-mail field.", () => {

        test.beforeEach(async ({ webTablesPage }) => {
            await webTablesPage.$addButton.click();
        })

        for (const eMail of data.eMails) {
            test(`Input valid "${eMail.replace('@', ' @ ')}"`, async ({ webTablesPage }) => {
                await webTablesPage.regForm.emailInput.fill(eMail);
                await webTablesPage.regForm.submitButton.click();
                await webTablesPage.regForm.assertEmailInput(true)
            });
        }



    });


    test.describe.fixme("Validate E-mail field (negative).", () => {

        test.beforeEach(async ({ webTablesPage }) => {
            await webTablesPage.$addButton.click();
        })

        for (const eMail of data.badEmails) {
            test(`Input NO valid "${eMail.replace('@', ' @ ')}"`, async ({ webTablesPage }) => {
                await webTablesPage.regForm.emailInput.fill(eMail);
                await webTablesPage.regForm.submitButton.click();
                await webTablesPage.regForm.assertEmailInput(false)
            });

        }
    });
    // 25, 25, ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$


    // test.only(` Click to Column header `, async ({ webTablesPage }) => {
    //     const text = await webTablesPage.rowGroup.allInnerTexts();
    //     console.log(text)
    // });




    // test.describe("Registration Form - EDIT Person tests", () => {

    //     test.beforeEach(async ({ webTablesPage }) => {
    //         // await webTablesPage.addButton.click();
    //     })

    //     test("Has header 'Registration Form'", async ({ webTablesPage }) => {
    //         await webTablesPage.regForm.assertFormTitle(true);
    //     });

    //     test.fixme("Has XXXXX ader 'Registration Form'", async ({ webTablesPage }) => {
    //         await expect(webTablesPage.$countRowsOnPageListBox).toHaveValue(String(10))
    //         const result = await webTablesPage.$countRowsOnPageListBox.inputValue()
    //         console.log(result)
    //     });

    // });
});
