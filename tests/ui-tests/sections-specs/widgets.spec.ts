import { test } from "../../fixtures/pages.fixture";

test.describe ("@Smoke Widgets page. Section - 'Widgets', open every example", () => {
    test.beforeEach(async ({ widgetsPage }) => {
        await widgetsPage.load();
    });

    test("Open Accordion example", async ({ widgetsPage }) => {
        await widgetsPage.accordionSection.widgetSection.accordionItem.click();
        await widgetsPage.accordionSection.widgetSection.accordionElement.assertPageUrl();
    });

    test("Open Auto complete example", async ({ widgetsPage }) => {
        await widgetsPage.accordionSection.widgetSection.autoCompleteItem.click();
        await widgetsPage.accordionSection.widgetSection.autoCompleteElement.assertPageUrl();
    });

    test("Open Date Picker example", async ({ widgetsPage }) => {
        await widgetsPage.accordionSection.widgetSection.dataPickerItem.click();
        await widgetsPage.accordionSection.widgetSection.dataPickerElement.assertPageUrl();
    });

    test("Open Slider example", async ({ widgetsPage }) => {
        await widgetsPage.accordionSection.widgetSection.sliderItem.click();
        await widgetsPage.accordionSection.widgetSection.sliderElement.assertPageUrl();
    });

    test("Open Progress Bar example", async ({ widgetsPage }) => {
        await widgetsPage.accordionSection.widgetSection.progressBarItem.click();
        await widgetsPage.accordionSection.widgetSection.progressBarElement.assertPageUrl();
    });

    test("Open Tabs example", async ({ widgetsPage }) => {
        await widgetsPage.accordionSection.widgetSection.tabsItem.click();
        await widgetsPage.accordionSection.widgetSection.tabsElement.assertPageUrl();
    });

    test("Open Tool Tips example", async ({ widgetsPage }) => {
        await widgetsPage.accordionSection.widgetSection.toolTipsItem.click();
        await widgetsPage.accordionSection.widgetSection.toolTipsElement.assertPageUrl();
    });

    test("Open Menu example", async ({ widgetsPage }) => {
        await widgetsPage.accordionSection.widgetSection.selectMenuItem.click();
        await widgetsPage.accordionSection.widgetSection.selectMenuElement.assertPageUrl();
    });

    test("Open Select Menu example", async ({ widgetsPage }) => {
        await widgetsPage.accordionSection.widgetSection.accordionItem.click();
        await widgetsPage.accordionSection.widgetSection.accordionElement.assertPageUrl();
    });
});
