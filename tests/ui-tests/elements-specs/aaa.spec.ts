import { test, expect } from '@playwright/test';


test.describe.configure({ mode: 'serial'});
test.describe("Check Box element tests", () => {
    // Случайным образом выбираем несколько чекбоксов (например, 3)
    use:{headless: false }
    test('Click on the "Desktop" checkbox', async ({ page }) => {

        await page.goto('https://demoqa.com/checkbox', { waitUntil: 'domcontentloaded' })
        await page.getByLabel('Expand all').click();
        // const locator = page.locator('label').filter({ hasText: 'React' }).getByRole('img').first()
        const locator = page.locator('label').filter({ hasText: 'React' })
        await locator.click();
        const checked = await locator.isChecked()
        console.error('Check box React checked: ' + checked);

        await expect(locator).toBeChecked()
        await page.waitForTimeout(2000)

    })
})
