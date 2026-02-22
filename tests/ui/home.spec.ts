import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';

test('Home page should load successfully', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateToHome();

  await expect(page).toHaveTitle(/Practice Software Testing/);
  await expect(homePage.categoriesLabel).toBeVisible();
  await expect(homePage.sortLabel).toBeVisible();
});