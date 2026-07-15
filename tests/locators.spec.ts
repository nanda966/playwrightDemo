import { test, expect } from '@playwright/test';

test('DemoQA Locator Examples', async ({ page }) => {

  // Open Website
  await page.goto('https://demoqa.com/text-box');

  // 1. getByPlaceholder()
  await page.getByPlaceholder('Full Name').fill('Kishore');

  // 2. getByLabel()
  await page.getByPlaceholder('name@example.com').fill('kishore@test.com');

  // 3. locator()
  await page.locator('#currentAddress').fill('Hyderabad');

  // 4. CSS Selector
  await page.locator('textarea#permanentAddress').fill('India');

  // 5. XPath
  await page.locator('//button[@id="submit"]').click();

  // 6. getByText()
  await page.getByText('Name:Kishore').isVisible();

  // 7. getByRole()
  await page.getByRole('textbox', { name: 'Full Name' }).click();

});