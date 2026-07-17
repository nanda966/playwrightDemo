import { test } from '@playwright/test';

test('Debug using PWDEBUG', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await page.pause();

  await page.getByRole('link', { name: 'Docs' }).click();

});