// import { test, expect } from '@playwright/test';
import { test } from "../../fixtures/pages.fixture";

test.describe ("@Smoke Book Store page. Section - 'Book Store Application', open every example", () => {
    test.beforeEach(async ({ booksPage }) => {
        await booksPage.load();
    });

    test("Open Login example", async ({ booksPage }) => {
        await booksPage.accordionSection.booksSection.loginItem.click();
        await booksPage.accordionSection.booksSection.loginExample.assertPageUrl();
    });

    test("Open Book Store example", async ({ booksPage }) => {
        await booksPage.accordionSection.booksSection.bookStoreItem.click();
        await booksPage.accordionSection.booksSection.bookStoreExample.assertPageUrl();
    });

    test("Open Profile example", async ({ booksPage }) => {
        await booksPage.accordionSection.booksSection.profileItem.click();
        await booksPage.accordionSection.booksSection.profileExample.assertPageUrl();
    });

    test("Open Book Store API example", async ({ booksPage }) => {
        await booksPage.accordionSection.booksSection.bookStoreAPIItem.click();
        await booksPage.accordionSection.booksSection.bookStoreAPIExample.assertPageUrl();
    });

});
