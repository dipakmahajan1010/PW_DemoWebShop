import { Page } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    searchInput;
    readonly searchButton;

    constructor(page) {

        this.searchInput = this.page.locator('input[id="small-searchterms"]');
        this.searchButton = this.page.locator('input[value="Search"]');
    }

    async searchProduct(productName: string) {

        await this.page.locator(this.searchInput).fill(productName);
        await this.page.locator(this.searchButton).click();

    }
}
