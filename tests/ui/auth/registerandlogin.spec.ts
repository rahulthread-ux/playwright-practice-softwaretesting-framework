import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../../pages/register.page';
import { getValidUser } from '../../../utils/test-data';
import { appendUserToExcel } from '../../../utils/excelWriter';

test('User should register successfully', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  registerPage.navigateToRegister();

  const user = getValidUser();

//   const timestamp = Date.now();

//   const user = {
//     firstName: 'Rahul',
//     lastName: 'Test',
//     dob: '1995-05-10',
//     street: '123 Test Street',
//     postalCode: '12345',
//     city: 'Delhi',
//     state: 'Delhi',
//     country: 'India',
//     phone: '9827098270',
//     email: `rahul${timestamp}@test.com`,
//     password: 'aaSSHHDD!@123'
//   };

  await registerPage.register(user);
  appendUserToExcel(user.email, user.password);

  await expect(page).toHaveURL(/login|account/);

  
});