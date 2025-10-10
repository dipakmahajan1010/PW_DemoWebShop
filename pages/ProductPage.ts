import { Page } from '@playwright/test';

export class ProductPage {

    readonly page: Page;
    addToCartButton;
    //productLink;

    constructor(page) {

        this.addToCartButton = this.page.locator('input[value="Add to cart"]');
       // this.productLink = (productName: string) => this.page.locator('.product-title a:text-is("${productName}")');

    }

    //select product for now we are going with whatever we have searched only that product we are adding
    // async selectProduct(productName: string) {

    //     await this.page.locator(this.productLink(productName)).click();

    // }

    async addToCart() {

        await this.page.locator(this.addToCartButton).click();

    }
}


