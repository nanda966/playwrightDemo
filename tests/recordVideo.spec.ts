import { test } from '@playwright/test';

test('Record Video Example', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Docs' }).click();

});