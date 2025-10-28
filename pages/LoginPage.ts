import { Page, expect } from '@playwright/test';

export class LoginPage {

    readonly loginLink;
    readonly email;
    readonly password;
    readonly loginButton;
    readonly errorMessage;

    //Constructor
    constructor(readonly page: Page) {
        //define locators
        this.loginLink = this.page.locator('a[href="/login"]');
        this.email = this.page.locator('#Email');
        this.password = this.page.locator('#Password');
        this.loginButton = this.page.locator('input[value="Log in"]');
        this.errorMessage = '.validation-summary-errors';
    }

    async login(emailId: string, pword: string) {

        try {
            await this.loginLink.click();
            await this.email.fill(emailId);
            await this.password.fill(pword);
            await this.loginButton.click();
        }
        catch (error) {
            console.log("Login was unsuccessfull");
            await expect(this.page.locator(this.errorMessage)).toContainText('Login was unsuccessful');

        }

    }

    async assertLoginSuccess() {
        await expect(this.page.locator('a[href="/logout"]')).toBeVisible();
        //await expect(this.page.locator('.account')).toBeVisible();

    }

}