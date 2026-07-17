import { test, expect } from '@playwright/test';

test('Advanced Locator Practice', async ({ page }) => {

  // =========================
  // A. Add/Remove Elements
  // =========================

  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  // Click Add Element 5 times
  for (let i = 0; i < 5; i++) {
    await page.getByText('Add Element').click();
  }

  // Verify 5 Delete buttons
  await expect(page.locator('.added-manually')).toHaveCount(5);

  // Delete 3 buttons
  await page.locator('.added-manually').nth(0).click();
  await page.locator('.added-manually').nth(0).click();
  await page.locator('.added-manually').nth(0).click();

  // Verify 2 buttons remain
  await expect(page.locator('.added-manually')).toHaveCount(2);

  console.log('Add/Remove Elements Passed');

  // =========================
  // B. Checkboxes
  // =========================

  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
  const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

  await checkbox1.check();
  await checkbox2.check();

  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).toBeChecked();

  console.log('Checkboxes Passed');

  // =========================
  // C. Dropdown
  // =========================

  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const dropdown = page.locator('#dropdown');

  await dropdown.selectOption('1');
  await expect(dropdown).toHaveValue('1');

  await dropdown.selectOption('2');
  await expect(dropdown).toHaveValue('2');

  console.log('Dropdown Passed');
});