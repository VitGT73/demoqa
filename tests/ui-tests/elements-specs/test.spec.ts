import { test } from '@playwright/test';
import { CheckboxPage } from './test.example';

test.describe.configure({ mode: 'serial' });
test.describe.only("Check Box element tests", () => {
    // Случайным образом выбираем несколько чекбоксов (например, 3)

    test('Click on the "Desktop" checkbox', async ({ page }) => {
        const checkboxPage = new CheckboxPage(page);
        checkboxPage.page.goto(checkboxPage.url, { waitUntil: 'domcontentloaded' })
        checkboxPage.expandAllButton.click();

        await checkboxPage.checkboxes['Desktop'].click();
        console.log('Clicked on the "Desktop" checkbox');
        await checkboxPage.assertCheckboxStatus('Desktop', true)

        await page.waitForTimeout(3000)
        checkboxPage.page.close()
    });

    test('Click on a random checkbox', async ({ page }) => {
        const checkboxPage = new CheckboxPage(page);
        checkboxPage.page.goto(checkboxPage.url, { waitUntil: 'domcontentloaded' })
        checkboxPage.expandAllButton.click();
        await checkboxPage.checkboxes['Documents'].click();
        console.log('Clicked on the "Documents" checkbox');
        await checkboxPage.assertCheckboxStatus('Documents', true)

        await page.waitForTimeout(3000)
        checkboxPage.page.close()

    })
})
