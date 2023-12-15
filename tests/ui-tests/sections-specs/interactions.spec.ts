import { test } from "../../fixtures/pages.fixture";

test.describe ("@Smoke Interactions page. Section - 'Interaction', open every example", () => {
    test.beforeEach(async ({ interactionsPage }) => {
        await interactionsPage.load();
    });

    test("Open Sortable example", async ({ interactionsPage }) => {
        await interactionsPage.accordionSection.interactionsSection.sortableItem.click();
        await interactionsPage.accordionSection.interactionsSection.sortableExample.assertPageUrl();
    });

    test("Open Selectable example", async ({ interactionsPage }) => {
        await interactionsPage.accordionSection.interactionsSection.selectableItem.click();
        await interactionsPage.accordionSection.interactionsSection.selectableExamples.assertPageUrl();
    });

    test("Open Resizable example", async ({ interactionsPage }) => {
        await interactionsPage.accordionSection.interactionsSection.resizableItem.click();
        await interactionsPage.accordionSection.interactionsSection.resizableExamples.assertPageUrl();
    });

    test("Open Droppable example", async ({ interactionsPage }) => {
        await interactionsPage.accordionSection.interactionsSection.droppableItem.click();
        await interactionsPage.accordionSection.interactionsSection.droppableExamples.assertPageUrl();
    });

    test("Open Dragabble example", async ({ interactionsPage }) => {
        await interactionsPage.accordionSection.interactionsSection.dragabbleItem.click();
        await interactionsPage.accordionSection.interactionsSection.dragabbleExamples.assertPageUrl();
    });

});
