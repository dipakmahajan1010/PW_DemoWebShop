import { Page, expect } from '@playwright/test';

export class ProductPage {

    addToCartButton;
    searchInput;
    searchButton;

    constructor(readonly page: Page) {

        this.searchInput = this.page.locator('input[id="small-searchterms"]');
        this.searchButton = this.page.locator('input[value="Search"]');
        this.addToCartButton = this.page.locator('input[value="Add to cart"]');


    }


    async searchProduct(productName: string) {

        await expect(this.searchInput).toBeVisible();
        await this.searchInput.fill(productName);
        await expect(this.searchButton).toBeVisible();
        await this.searchButton.click();

    }

    async addToCart() {

        await expect(this.addToCartButton).toBeVisible();
        await this.addToCartButton.click();

    }
}


