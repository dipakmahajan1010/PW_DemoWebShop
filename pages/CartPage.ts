import { expect, Page } from '@playwright/test';
import { Helper } from 'utils/helper';


export class CartPage {

  helper;
  goToShoppingCartLink;
  termsCheckbox;
  checkoutButton;
  verifyProductName;
  emptyCart;

  constructor(readonly page: Page) {

    this.helper = new Helper(this.page);
    this.goToShoppingCartLink = this.page.locator("//span[normalize-space()='Shopping cart']");
    this.termsCheckbox = this.page.locator('#termsofservice');
    this.checkoutButton = this.page.locator('#checkout');
    this.verifyProductName = this.page.locator("//a[@class='product-name']");
    this.emptyCart = this.page.locator("//div[@class='order-summary-content']");

  }


  async verifyCart(purchaseProductName: string) {

    await this.goToShoppingCartLink.click();
    await this.helper.staticWait(2000);

    // Wait for either product or empty cart message
    if (await this.verifyProductName.isVisible()) {
      //verify or get purchase product value from addtocart
      const productValue = await this.verifyProductName.innerText();
      await expect(productValue).toBe(purchaseProductName);

    } else if (await this.emptyCart.isVisible()) {
      const emptyCartMessage = (await this.emptyCart.textContent())?.trim() || '';
      await expect(emptyCartMessage).toBe("Your Shopping Cart is empty!");
      await this.helper.screenShoton("productNamenotFound");
      console.log("Product not found");

    } else {
      console.log("Neither product nor empty cart message found.");
    }
  }


  async proceedToCheckout() {

    await this.termsCheckbox.click();
    await this.checkoutButton.click();

  }
}

