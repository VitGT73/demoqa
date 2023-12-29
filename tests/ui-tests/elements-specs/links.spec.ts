import { test, expect } from "../../fixtures/elements.fixture";

test.describe.only("Links tests", () => {
    test.describe("Smoke tests", () => {
        test("Links page has header ", async ({ linksPage }) => {
            await linksPage.header.selectText;
            await linksPage.assertPageHeader();
        });
    });
    test.describe("Open new tab", () => {
        test("Home page", async ({ linksPage }) => {
            const page = await linksPage.clickHomeButton();
            await linksPage.assertHomeLinkIsOpen(page);
        });
        test("Dynamic Home page", async ({ linksPage }) => {
            const page = await linksPage.clickDynamicHomeButton();
            await linksPage.assertHomeLinkIsOpen(page);
        });
    });
    // test.describe("API call", () => {
    //     test("Check Double click Button", async ({ linksPage }) => {
    //         await linksPage.dblClickButton.dblclick();
    //         await linksPage.assertDbkClickMessage();
    //     });
    // });


});
