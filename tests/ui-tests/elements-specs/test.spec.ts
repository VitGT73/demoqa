import { test } from '@playwright/test';
import { CheckboxPage } from './test.example';

test.describe.only("Check Box element tests", () => {
    // Случайным образом выбираем несколько чекбоксов (например, 3)

    test('Click on the "Desktop" checkbox', async ({ page }) => {
        const checkboxPage = new CheckboxPage(page);
        checkboxPage.page.goto(checkboxPage.url, { waitUntil: 'domcontentloaded' })
        checkboxPage.expandAllButton.click();

        await checkboxPage.checkboxes['Desktop'].click();
        console.log('Clicked on the "Desktop" checkbox');
        await page.waitForTimeout(3000)
        // Дополнительные проверки или действия, если необходимо
    // });

    // test('Click on a random checkbox', async ({ page }) => {
        // const checkboxPage = new CheckboxPage(page);
        // checkboxPage.page.goto(checkboxPage.url, { waitUntil: 'domcontentloaded' })
        // checkboxPage.expandAllButton.click();


  // Указываем количество чек-боксов для клика
        const count = 3;
        await checkboxPage.clickRandomCheckboxes(count);
        await page.waitForTimeout(3000)
    });

})
