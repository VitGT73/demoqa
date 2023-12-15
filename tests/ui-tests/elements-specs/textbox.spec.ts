import { test, expect } from "../../fixtures/elements.fixture";
// import {TextBoxExample} from '../../objects/examples/elements/textbox.example'
import { TextboxRandomData } from '../../testdata/textbox.data'

let data = new TextboxRandomData;
const fullName = data.getFullName();
const eMail = data.getEmail(true);
const currentAddress = data.getCurrentAddress();
const permanentAddress = data.getPermanentAddress();
const novalidEmail = data.getEmail(false);

test.describe.only("Textbox element tests", () => {
    test("Forms page has header", async ({ textBoxPage }) => {
        await textBoxPage.header.selectText;
        await textBoxPage.assertPageHeader();
    });

    test("Submit Full Name texbox", async ({ textBoxPage }) => {
        await textBoxPage.fullnameInput.fill(fullName);
        await textBoxPage.submintButton.click();
        await expect(textBoxPage.fullnameAnswer).toHaveText("Name:" + fullName);
    });

    test("Submit E-mail texbox", async ({ textBoxPage }) => {
        await textBoxPage.emailInput.fill(eMail);
        await textBoxPage.submintButton.click();
        await expect(textBoxPage.emailAnswer).toHaveText("Email:"+eMail);
    });

    test("Submit Current Address texbox", async ({ textBoxPage }) => {
        await textBoxPage.currentAddressInput.fill(data.getFullName());
        await textBoxPage.submintButton.click();
        await expect(textBoxPage.currentAddressAnswer).toHaveText("Current Address :"+data.getFullName());
    });

    test("Submit Permanent Address texbox", async ({ textBoxPage }) => {
        await textBoxPage.permanentAddressInput.fill(data.getFullName());
        await textBoxPage.submintButton.click();
        await expect(textBoxPage.permanentAddressAnswer).toHaveText("Permananet Address :"+data.getFullName());
    });

    test("Negative. Submit no valid E-mail texbox", async ({ textBoxPage }) => {
        await textBoxPage.emailInput.fill(eMail);
        await textBoxPage.submintButton.click();
        await expect(textBoxPage.emailAnswer).toHaveText("Email:"+eMail);
    });
});
