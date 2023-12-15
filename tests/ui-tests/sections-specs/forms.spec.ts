import { test } from "../../fixtures/pages.fixture";

test.describe ("@Smoke Form page. Section - 'Forms', open every example", () => {
    test.beforeEach(async ({ formsPage }) => {
        await formsPage.load();
    });

    test("Open Login example", async ({ formsPage }) => {
        await formsPage.accordionSection.formsSection.practiceFormItem.click();
        await formsPage.accordionSection.formsSection.practiceFormExample.assertPageUrl();
    });

});
