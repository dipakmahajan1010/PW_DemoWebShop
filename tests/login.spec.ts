
import { test, expect } from '../utils/baseTest';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from 'pages/ProductPage';
import { CartPage } from 'pages/CartPage';


test('End to end flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage= new CartPage(page);

  let productName="Fiction";

  //Login and Logout flow
  await loginPage.login('abcxyz1010@gmail.com','abcxyz@123');
  await loginPage.assertLoginSuccess();
  await homePage.expectOnHome();
  // await homePage.logout();
  // await homePage.assertLogoutSuccess();

//Search product and Add to cart flow

  await productPage.searchProduct(productName);
  await productPage.addToCart();
  await cartPage.verifyCart(productName);

});


