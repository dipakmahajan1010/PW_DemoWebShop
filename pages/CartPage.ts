import { Page } from '@playwright/test';


export class CartPage {

    //readonly page: Page;
    goToShoppingCartLink;
    termsCheckbox;
    checkoutButton;

    constructor(readonly page: Page) {

        this.goToShoppingCartLink = this.page.locator("//span[normalize-space()='Shopping cart']");
        this.termsCheckbox = this.page.locator('#termsofservice');
        this.checkoutButton = this.page.locator('#checkout');

    }


    async gotoShoppingCart() {

        //await this.page.locator(this.goToShoppingCartLink).click();
        await this.goToShoppingCartLink.click();

    }

    async proceedToCheckout() {

        await this.termsCheckbox.click();
        await this.checkoutButton.click();

    }
}

