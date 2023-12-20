import { test, expect } from "../../fixtures/elements.fixture";
// import { TextboxRandomData } from '../../testdata/elements/textbox.data';

// let data = new TextboxRandomData();

// test.describe.configure({ mode: 'serial' });
test.describe ("Radio button tests", () => {
    // test.beforeAll( async ()=>{
    //     let data = new TextboxRandomData;
    // })
    test("Radio Button page has header", async ({ radioButtonPage }) => {
        await radioButtonPage.header.selectText;
        await radioButtonPage.assertPageHeader();
    });

    test("Check message after click 'Yes' radio", async ({ radioButtonPage }) => {
        await radioButtonPage.radioButtons['Yes'].click();

        await radioButtonPage.assertPresenceInSuccessMessage('Yes', true)
    });
    test("Check message after click 'Impressive' radio", async ({ radioButtonPage }) => {
        await radioButtonPage.radioButtons['Impressive'].click();
        await radioButtonPage.assertPresenceInSuccessMessage('Impressive', true)
    });


    test("Check message after click 'No' radio", async ({ radioButtonPage }) => {
        await radioButtonPage.radioButtons['Impressive'].click();
        await radioButtonPage.radioButtons['No'].click({ force: true });
        await radioButtonPage.assertPresenceInSuccessMessage('No', false)
        await radioButtonPage.assertPresenceInSuccessMessage('Impressive', true)

    });

    test("Validate checked 'Yes' radio", async ({ radioButtonPage }) => {
        await radioButtonPage.radioButtons['Yes'].click();
        await radioButtonPage.assertRadioIsChecked('Yes', true)
    });

    test("Validate checked 'Impressive' radio", async ({ radioButtonPage }) => {
        await radioButtonPage.radioButtons['Impressive'].click();
        await radioButtonPage.assertRadioIsChecked('Impressive', true);

    });


    test("Click 'Yes'. Validate uncheck other radio", async ({ radioButtonPage }) => {
        await radioButtonPage.radioButtons['Impressive'].click();
        await radioButtonPage.radioButtons['Yes'].click();
        await radioButtonPage.assertRadioIsChecked('Yes', true)
        await radioButtonPage.assertRadioIsChecked('Impressive', false);
    });

    test("Click 'Impressive'. Validate uncheck other radio radio", async ({ radioButtonPage }) => {
        await radioButtonPage.radioButtons['Yes'].click();
        await radioButtonPage.radioButtons['Impressive'].click();
        await radioButtonPage.assertRadioIsChecked('Impressive', true);
        await radioButtonPage.assertRadioIsChecked('Yes', false)
    });

    test("Validate checked 'No' radio", async ({ radioButtonPage }) => {
        await radioButtonPage.radioButtons['Impressive'].click();
        await radioButtonPage.radioButtons['No'].click({ force: true });
        await radioButtonPage.assertRadioIsChecked('No', false);
        await radioButtonPage.assertRadioIsChecked('Impressive', true);

    });

});
