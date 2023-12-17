import { test, expect } from "@playwright/test";

test.describe("Check Box element tests", () => {


    test("Test Expand and Collapse in checkbox", async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox', { waitUntil: "domcontentloaded" });

        await page.getByLabel('Expand all').click();
        await page.getByLabel('Collapse all').click();

        await page.getByTitle('Expand all').click();
        await page.getByTitle('Collapse all').click();

        await page.locator("//button[@title='Expand all']").click();
        await page.locator("//button[@title='Collapse all']").click();

        await page.getByRole('button',{name:'Expand all'}).click();
        await page.getByRole('button',{name:'Collapse all'}).click();
        // await page.getByRole('button').getByLabel('Collapse all').click();

        // await page.getByRole('button').getByTitle('Expand all').click();
        // await page.getByRole('button').getByTitle('Collapse all').click();
    })
})
