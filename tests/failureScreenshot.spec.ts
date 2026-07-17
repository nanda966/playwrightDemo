import { test, expect } from '@playwright/test';

test('Passing Test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Failing Test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('h1')).toHaveText('Wrong Text');
});