import { test, expect } from '@playwright/test';

test('DemoQA CheckBox Locators', async ({ page }) => {

  await page.goto('https://demoqa.com/checkbox');

  // Wait for page to load
  await page.waitForTimeout(5000);

  // Scroll down
  await page.mouse.wheel(0, 500);

  // Expand All button
  const expandAll = page.locator('#expandAll');
  await expandAll.click({ force: true });

  // Home checkbox
  const homeCheckbox = page.locator("label[for='tree-node-home']");
  
  // Desktop checkbox
  const desktopCheckbox = page.locator("label[for='tree-node-desktop']");

  // Downloads checkbox
  const downloadsCheckbox = page.locator("label[for='tree-node-downloads']");

  // Result section
  const resultSection = page.locator('#result');

  await homeCheckbox.click();
  await desktopCheckbox.click();
  await downloadsCheckbox.click();

  await expect(resultSection).toBeVisible();

  console.log('Checkbox Assignment Executed Successfully');
});