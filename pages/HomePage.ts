import { Page, expect } from '@playwright/test';

export class HomePage {


  welcomeBanner: any;

    constructor(readonly page: Page) {

        this.welcomeBanner = this.page.locator("//img[@alt='Tricentis Demo Web Shop']");
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

   
}
