// import { test, expect } from '@playwright/test';
import { test , expect } from '../fixtures/pages.fixture';

test('has title', async ({ page, homePage }) => {
  await homePage.load();

  // Expect a title "to contain" a substring.
  await homePage.assertPageTitle();
});
