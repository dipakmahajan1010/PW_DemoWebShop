import { Page } from '@playwright/test';

export class HomePage {

    searchInput;
    readonly searchButton;

    constructor(readonly page: Page) {

        this.searchInput = this.page.locator('input[id="small-searchterms"]');
        this.searchButton = this.page.locator('input[value="Search"]');
    }

    async searchProduct(productName: string) {

        await this.searchInput.fill(productName);
        await this.searchButton.click();

    }
}
