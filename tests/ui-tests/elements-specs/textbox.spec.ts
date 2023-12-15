// // import { test, expect } from '@playwright/test';
// import {TextBoxExample} from '../../objects/examples/elements/textbox.example'
// import { testUserData, TextBoxInterface } from '../../testdata/textbox.data'
import { test, expect } from "../../fixtures/elements.fixture";

test.describe.only("Textbox element tests", () => {
    test("Forms page has URL", async ({ textBoxPage }) => {
        await textBoxPage.assertPageUrl();
    });

    test("Forms page has header", async ({ textBoxPage }) => {
        await textBoxPage.header.selectText;
        await textBoxPage.assertPageHeader();
    });
});
