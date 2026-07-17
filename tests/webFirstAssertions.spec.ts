import { test, expect } from '@playwright/test';

test('DemoQA Text Box - User Workflow with Assertions', async ({ page }) => {

  // Navigate to Application
  await page.goto('https://demoqa.com/text-box');

  // Verify page title
  // Auto-waiting ensures Playwright waits until the title is available
  await expect(page).toHaveTitle('DEMOQA');

  // Verify URL
  // Auto-waiting waits until navigation is complete
  await expect(page).toHaveURL('https://demoqa.com/text-box');

  // Locators
  const fullName = page.locator('#userName');
  const email = page.locator('#userEmail');
  const currentAddress = page.locator('#currentAddress');
  const permanentAddress = page.locator('#permanentAddress');
  const submitButton = page.locator('#submit');

  // Verify input fields are visible
  await expect(fullName).toBeVisible();
  await expect(email).toBeVisible();

  // Verify Submit button is enabled
  await expect(submitButton).toBeEnabled();

  // Test Data
  const userData = {
    name: 'Sai Chandu',
    email: 'saichandu@test.com',
    currentAddress: 'Hyderabad',
    permanentAddress: 'Kukatpally'
  };

  // Enter data
  await fullName.fill(userData.name);
  await email.fill(userData.email);
  await currentAddress.fill(userData.currentAddress);
  await permanentAddress.fill(userData.permanentAddress);

  // Verify entered values
  // Auto-waiting waits until value appears in the field
  await expect(fullName).toHaveValue(userData.name);
  await expect(email).toHaveValue(userData.email);

  // Submit form
  await submitButton.click();

  // Output Section Locators
  const outputName = page.locator('#name');
  const outputEmail = page.locator('#email');

  // Verify output section is visible
  await expect(outputName).toBeVisible();

  // Verify exact text
  await expect(outputName).toHaveText(`Name:${userData.name}`);

  // Verify partial text
  await expect(outputEmail).toContainText(userData.email);

  // -------------------------
  // Generic Assertions
  // -------------------------

  const expectedStatus = 'Success';
  const actualStatus = 'Success';

  // Verify exact value
  expect(actualStatus).toBe(expectedStatus);

  const expectedUser = {
    name: 'Sai Chandu',
    city: 'Hyderabad'
  };

  const actualUser = {
    name: 'Sai Chandu',
    city: 'Hyderabad'
  };

  // Verify object equality
  expect(actualUser).toEqual(expectedUser);

  const skills = ['Playwright', 'TypeScript', 'Automation'];

  // Verify array contains value
  expect(skills).toContain('Playwright');
});