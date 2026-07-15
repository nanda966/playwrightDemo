import { test, chromium } from '@playwright/test';

test('Playwright Assignment', async () => {

  await test.step('Launch Browser', async () => {
    console.log('Browser Launched');
  });

  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await test.step('Open Google', async () => {
    await page.goto('https://www.google.com');
  });

  await test.step('Print Page Title', async () => {
    console.log("Page Title:", await page.title());
  });

  await browser.close();
});