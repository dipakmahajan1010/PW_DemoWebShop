import { Page, expect } from '@playwright/test';

export class HomePage {

    searchInput;
    readonly searchButton;
  welcomeBanner: any;

    constructor(readonly page: Page) {

        this.welcomeBanner = this.page.locator("//img[@alt='Tricentis Demo Web Shop']");
        this.searchInput = this.page.locator('input[id="small-searchterms"]');
        this.searchButton = this.page.locator('input[value="Search"]');
    }

    async expectOnHome() {
      await expect(this.welcomeBanner).toBeVisible();
    }

    async logout() {
        await this.page.click('a[href="/logout"]');
      }
    
      async assertLogoutSuccess() {
        await expect(this.page.locator('a[href="/login"]')).toBeVisible();
      }

    async searchProduct(productName: string) {

        await this.searchInput.fill(productName);
        await this.searchButton.click();

    }
}
