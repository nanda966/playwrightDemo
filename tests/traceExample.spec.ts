import { test } from '@playwright/test';

test('Generate Trace', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Docs' }).click();

  await page.getByRole('link', { name: 'API' }).click();

});