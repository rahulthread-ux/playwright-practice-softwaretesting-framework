import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login.page';

test.describe('Login Tests', () => {

  test('User should see error on invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login('invalid@email.com', 'wrongpassword');

    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('User should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();

    // ⚠️ Replace with working credentials later
    const email = process.env.LOGIN_EMAIL!;
const password = process.env.LOGIN_PASSWORD!;

    await loginPage.login(email, password);

    // Post login validation
    await expect(page).toHaveURL(/account/);
  });

});