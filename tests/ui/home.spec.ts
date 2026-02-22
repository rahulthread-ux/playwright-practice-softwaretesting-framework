import { test, expect } from '@playwright/test';

test('Home page should load successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Practice Software Testing/);

  //await expect(page.locator('text=Categories')).toBeVisible();
  await expect(page.locator('[data-test="nav-categories"]')).toBeVisible();
  await expect(page.locator('text=Sort')).toBeVisible();
});