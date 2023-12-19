import { test, expect } from '@playwright/test';
import { CheckboxPage } from './test.example';

test.describe.configure({ mode: 'serial' });
test.describe.skip("Check Box element tests", () => {
    // Случайным образом выбираем несколько чекбоксов (например, 3)

    test('Click on the "Desktop" checkbox', async ({ page }) => {
        const checkboxPage = new CheckboxPage(page);
        await checkboxPage.page.goto(checkboxPage.url, { waitUntil: 'domcontentloaded' })
        await checkboxPage.expandAllButton.click();

        await checkboxPage.checkboxes['Desktop'].click();
        console.log('Clicked on the "Desktop" checkbox');
        await checkboxPage.assertCheckboxStatus('Desktop', true)

        await page.waitForTimeout(3000)
        checkboxPage.page.close()
    });

    test('Click on a random checkbox', async ({ page }) => {
        const checkboxPage = new CheckboxPage(page);
        await checkboxPage.page.goto(checkboxPage.url, { waitUntil: 'domcontentloaded' })
        await checkboxPage.expandAllButton.click();
        await checkboxPage.clickRandomCheckboxes(3);
        console.log('Clicked on random checkboxes');
        await checkboxPage.assertMessageContainsSelectedStatuses();

        await page.waitForTimeout(3000)
        checkboxPage.page.close()

    })

    test('Click on toggle', async ({ page }) => {
        const checkboxPage = new CheckboxPage(page);
        await checkboxPage.page.goto(checkboxPage.url, { waitUntil: 'domcontentloaded' })
        await checkboxPage.expandAllButton.click();

        const toggleName = 'WorkSpace'
        await checkboxPage.toggles[toggleName].click();
        await page.waitForTimeout(1500)
        // await checkboxPage.toggles['Desktop'].click();
        // await checkboxPage.toggles['Office'].click();
        // await expect(checkboxPage.checkboxes['Desktop']).toBeVisible()
        // await expect(checkboxPage.checkboxes['Notes']).toBeVisible()
        // await expect(checkboxPage.checkboxes['Commands']).toBeVisible()


        await page.waitForTimeout(1500)
        await checkboxPage.assertVisibilityCheckBoxes(toggleName,true)
        await page.waitForTimeout(1500)
        // await expect(checkboxPage.checkVisibilityForToggle('Desktop',true)).toBeTruthy();
        // await checkboxPage.page.close()


    })

})
