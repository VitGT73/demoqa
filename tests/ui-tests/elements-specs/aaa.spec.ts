import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1400
  }
});

test.skip('test', async ({ page }) => {
  await page.goto('https://demoqa.com/', { waitUntil: "domcontentloaded" });
  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByText('Text Box').click();
  await page.getByText('Web Tables').click();
  await page.locator('#edit-record-3').getByRole('img').click();
  await expect(page.locator('#registration-form-modal')).toContainText('Registration Form');
});
