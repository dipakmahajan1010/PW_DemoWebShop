
import { test, expect } from '../utils/baseTest';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('Login and Logout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.login('abcxyz1010@gmail.com','abcxyz@123');
  await loginPage.assertLoginSuccess();
  await homePage.expectOnHome();
  await homePage.logout();
  await homePage.assertLogoutSuccess();
});
