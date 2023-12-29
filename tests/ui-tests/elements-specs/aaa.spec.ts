import { test, expect } from '@playwright/test';
// setTimeout(function(){debugger},4000) заморозка браузера

test.use({
  viewport: {
    height: 1080,
    width: 1400
  }
});

test.fixme('test', async ({ page }) => {
  await page.goto('https://qa.guru/cms/system/login',{waitUntil: 'domcontentloaded'});
  // await page.getByPlaceholder('Введите ваш эл. адрес').click();
  await page.getByRole('textbox', { name: 'Введите ваш эл. адрес' }).fill('user@mail.ru');
  // await page.getByPlaceholder('Введите ваш эл. адрес').first().fill('user@mail.ru');
  // await page.getByPlaceholder('Введите пароль').click();
  // await page.getByPlaceholder('Введите пароль').fill('zxcvbn');
  await page.getByRole('textbox', { name: 'Введите пароль' }).fill('zxcvbn');
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.getByRole('button', {name:'Неверный пароль'})).toBeVisible();
  await expect(page.getByRole('button', {name:'Неверный пароль'})).toBeHidden();
});
