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
        await checkboxPage.assertCheckboxStatus('Desktop', true)
        console.log('Clicked on the "Desktop" checkbox');
        await page.waitForTimeout(3000)

    });

//     test('Click on a random checkbox', async ({ page }) => {
//         const checkboxPage = new CheckboxPage(page);
//         checkboxPage.page.goto(checkboxPage.url, { waitUntil: 'domcontentloaded' })
//         checkboxPage.expandAllButton.click();


//   // Указываем количество чек-боксов для клика
//         const count = 3;
//         await checkboxPage.clickRandomCheckboxes(count);
//         await checkboxPage.assertCheckboxStatus('Desktop'.checkboxes, true)
//         await page.waitForTimeout(3000)

//     });

})
