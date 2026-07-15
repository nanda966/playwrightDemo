import { test, expect } from '@playwright/test';

test('DemoQA Page Actions', async ({ page }) => {

  // =========================
  // Scenario 1 - Text Box
  // =========================

  await page.goto('https://demoqa.com/text-box');

  await page.locator('#userName').fill('Kishore');
  await page.locator('#userEmail').fill('kishore@test.com');
  await page.locator('#currentAddress').fill('Hyderabad');
  await page.locator('#permanentAddress').fill('India');

  await page.locator('#submit').click();

  await expect(page.locator('#name')).toContainText('Kishore');
  await expect(page.locator('#email')).toContainText('kishore@test.com');

  console.log('Text Box Scenario Passed');

  // =========================
  // Scenario 2 - Check Box
  // =========================

  await page.goto('https://demoqa.com/checkbox');

await page.waitForTimeout(3000);

// Expand Home tree using arrow
await page.locator("button[title='Toggle']").first().click();

// Select Home checkbox
await page.locator(".rct-checkbox").first().click();

await expect(page.locator('#result')).toBeVisible();

console.log('Check Box Scenario Passed');

  // =========================
  // Scenario 3 - Radio Button
  // =========================

  await page.goto('https://demoqa.com/radio-button');

  await page.locator("label[for='yesRadio']").click();

  await expect(page.locator('.text-success')).toContainText('Yes');

  console.log('Radio Button Scenario Passed');

  // =========================
  // Scenario 4 - Buttons
  // =========================

  await page.goto('https://demoqa.com/buttons');

  // Double Click
  await page.locator('#doubleClickBtn').dblclick();

  // Right Click
  await page.locator('#rightClickBtn').click({ button: 'right' });

  // Dynamic Click
  await page.getByRole('button', { name: 'Click Me' }).last().click();

  // Verify Messages
  await expect(page.locator('#doubleClickMessage')).toBeVisible();
  await expect(page.locator('#rightClickMessage')).toBeVisible();
  await expect(page.locator('#dynamicClickMessage')).toBeVisible();

  console.log('Buttons Scenario Passed');
});