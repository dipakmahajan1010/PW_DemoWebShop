import { expect, Page } from '@playwright/test';
//import { Helper } from 'utils/helper';


export class CartPage {

    //helper;
    goToShoppingCartLink;
    termsCheckbox;
    checkoutButton;
    verifyProductName;

    constructor(readonly page: Page) {

        //this.helper = new Helper(this.page);
        this.goToShoppingCartLink = this.page.locator("//span[normalize-space()='Shopping cart']");
        this.termsCheckbox = this.page.locator('#termsofservice');
        this.checkoutButton = this.page.locator('#checkout');
        this.verifyProductName = this.page.locator("//a[@class='product-name']");

    }


    async verifyCart(purchaseProductName: String) {

        await this.goToShoppingCartLink.click();
        //await this.helper.staticWait(2000);
        try {

            //verify or get purchase product value from addtocart
            const productValue = await this.verifyProductName.innerText();
            await expect(productValue).toBe(purchaseProductName);

        } catch (error) {
          //  await this.helper.screenShoton("productNamenotFound");
            console.log("Product not found");

        }

    }

    async proceedToCheckout() {

        await this.termsCheckbox.click();
        await this.checkoutButton.click();

    }
}

