import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  // Define locators as class properties
  readonly billingDropdown;
  readonly billingContinueButton;
  readonly shippingAddressContinueButton;
  readonly shippingMethodContinueButton;
  readonly paymentMethodContinueButton;
  readonly paymentInfoContinueButton;
  readonly confirmOrderButton;
  readonly successMessage;

  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.billingDropdown = page.locator('select#billing-address-select');
    this.billingContinueButton = page.locator('input.button-1.new-address-next-step-button');
    this.shippingAddressContinueButton = page.locator('input.button-1.shipping-address-next-step-button');
    this.shippingMethodContinueButton = page.locator('input.button-1.shipping-method-next-step-button');
    this.paymentMethodContinueButton = page.locator('input.button-1.payment-method-next-step-button');
    this.paymentInfoContinueButton = page.locator('input.button-1.payment-info-next-step-button');
    this.confirmOrderButton = page.locator('input.button-1.confirm-order-next-step-button');
    this.successMessage = page.locator('div.title');
  }

  async selectBillingAddress(addressLabel: string) {
    await this.billingDropdown.selectOption({ label: addressLabel });
    await this.billingContinueButton.click();
  }

  async continueShippingAddress() {
    await this.shippingAddressContinueButton.waitFor();
    await this.shippingAddressContinueButton.click();
  }

  async continueShippingMethod() {
    await this.shippingMethodContinueButton.waitFor();
    await this.shippingMethodContinueButton.click();
  }

  async continuePaymentMethod() {
    await this.paymentMethodContinueButton.waitFor();
    await this.paymentMethodContinueButton.click();
  }

  async continuePaymentInfo() {
    await this.paymentInfoContinueButton.waitFor();
    await this.paymentInfoContinueButton.click();
  }

  async confirmOrder() {
    await this.confirmOrderButton.waitFor();
    await this.confirmOrderButton.click();
  }

  async verifyOrderSuccess() {
    await expect(this.successMessage).toContainText('Your order has been successfully processed!');
  }
}
