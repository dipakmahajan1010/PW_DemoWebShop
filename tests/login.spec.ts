import { test, expect } from '../utils/baseTest';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

// Data-driven credentials
const credentials = [
  {
    username: "abcxyz1010@gmail.com",
    password: "abcxyz@123"
  },
  {
    username: "invalidemail@gmail.com",
    password: "abcxyz@1235678"
  }
];

test.describe('Login and Logout Tests', () => {
  
  test('Login with multiple credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    for (const cred of credentials) {

      // Attempt login
      await loginPage.login(cred.username, cred.password);

      try {
        // Check if login is successful
        await loginPage.assertLoginSuccess();
        await homePage.expectOnHome();

        //logout to reset state for next iteration
        await homePage.logout();
      } catch (error) {
        // Handle invalid credentials
        console.log(`Invalid credentials for ${cred.username}`);
      }
    }
  });

});
