import { test } from '@playwright/test';

test('Capture homepage screenshot', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await page.screenshot({
    path: 'screenshots/homepage.png',
    fullPage: true
  });

});