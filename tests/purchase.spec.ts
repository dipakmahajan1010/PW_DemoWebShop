
import { test, expect } from '../utils/baseTest';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from 'pages/ProductPage';
import { CartPage } from 'pages/CartPage';
import { CheckoutPage } from 'pages/CheckoutPage';
import * as testData from 'data.json';

test('End to end Purchase Product flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    const username=testData.user.username;
    const password=testData.user.password;
    const productName = testData.product.name;

    // Login
    await loginPage.login(username, password);
    try {
        await loginPage.assertLoginSuccess();
        await homePage.expectOnHome();
    } catch (error) {
        console.log("Invalid credentials");
    }

    // Search product and add to cart
    await productPage.searchProduct(productName);
    await productPage.addToCart();
    await cartPage.verifyCart(productName);
    await cartPage.proceedToCheckout();

    // Checkout product
    await checkoutPage.selectBillingAddress();
    await checkoutPage.continueShippingAddress();
    await checkoutPage.continueShippingMethod();
    await checkoutPage.continuePaymentMethod();
    await checkoutPage.continuePaymentInfo();
    await checkoutPage.confirmOrder();
    await checkoutPage.verifyOrderSuccess();
});



