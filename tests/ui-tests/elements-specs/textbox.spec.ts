import { test, expect } from "../../fixtures/elements.fixture";
// import {TextBoxExample} from '../../objects/examples/elements/textbox.example'
import { TextboxRandomData } from '../../testdata/textbox.data'

let data = new TextboxRandomData;
// const fullName = data.getFullName();
// const eMail = data.getEmail(true);
// const currentAddress = data.getCurrentAddress();
// const permanentAddress = data.getPermanentAddress();
// const novalidEmail = data.getEmail(false);

test.describe("Textbox element tests", () => {
    // test.beforeAll( async ()=>{
    //     let data = new TextboxRandomData;
    // })
    test("Forms page has header", async ({ textBoxPage }) => {
        await textBoxPage.header.selectText;
        await textBoxPage.assertPageHeader();
    });

    test("Submit FullName in textbox", async ({ textBoxPage }) => {
        const textBoxData = data.getTextBoxData(true);
        await textBoxPage.fullnameInput.fill(textBoxData.fullName);
        await textBoxPage.submitButton.click();
        await textBoxPage.assertFullName(textBoxData.fullName);
        // await expect(textBoxPage.fullnameAnswer).toHaveText("Name:" + fullName);
    });

    test("Submit E-mail in textbox", async ({ textBoxPage }) => {
        const eMail = data.getEmail(true);
        await textBoxPage.emailInput.fill(eMail);
        await textBoxPage.submitButton.click();
        await textBoxPage.assertValidEmail(eMail);
        // await expect(textBoxPage.emailAnswer).toHaveText("Email:"+eMail);
    });

    test("Submit Current Address in textbox", async ({ textBoxPage }) => {
        const currentAddress = data.getCurrentAddress();
        await textBoxPage.currentAddressInput.fill(currentAddress);
        await textBoxPage.submitButton.click();
        await textBoxPage.assertCurrentAddress(currentAddress)
        // await expect(textBoxPage.currentAddressAnswer).toHaveText("Current Address :"+currentAddress);
    });

    test("Submit Permanent Address in textbox", async ({ textBoxPage }) => {
        const permanentAddress = data.getPermanentAddress();
        await textBoxPage.permanentAddressInput.fill(permanentAddress);
        await textBoxPage.submitButton.click();
        await textBoxPage.assertPermanentAddress(permanentAddress)
        // await expect(textBoxPage.permanentAddressAnswer).toHaveText("Permananet Address :"+permanentAddress);
    });

    test("Submit all fields valid data in textbox", async ({ textBoxPage }) => {
        const textBoxData = data.getTextBoxData(true);
        await textBoxPage.FillForm(textBoxData);
        await textBoxPage.assertValidForm(textBoxData);
    });

    test("Negative. Submit no valid E-mail in textbox", async ({ textBoxPage }) => {
        const novalidEmail = data.getEmail(false);
        await textBoxPage.emailInput.fill(novalidEmail);
        await textBoxPage.submitButton.click();
        await textBoxPage.assertNoValidEmail();
    });

    test("Submit all fields no valid data in textbox", async ({ textBoxPage }) => {
        const textBoxData = data.getTextBoxData(false);
        await textBoxPage.FillForm(textBoxData);
        await textBoxPage.assertNoValidForm();
    });
});
