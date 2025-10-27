
import { test, expect } from '../utils/baseTest';
import { ProductPage } from 'pages/ProductPage';
import { CartPage } from 'pages/CartPage';

test('Search and Add to Cart Product', async ({ page }) => {
  const productPage = new ProductPage(page);
  const cartPage= new CartPage(page);

  let productName="Fiction";

//Search product and Add to cart flow

  await productPage.searchProduct(productName);
  await productPage.addToCart();
  await cartPage.verifyCart(productName);
  await cartPage.proceedToCheckout();



});


