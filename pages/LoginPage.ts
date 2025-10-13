import { Page } from '@playwright/test';

export default class LoginPage {

    readonly loginLink;
    readonly email;
    readonly password;
    readonly loginButton;

    //Constructor
    constructor(readonly page: Page) {
        //define locators
        this.loginLink = this.page.locator('a[href="/login"]');
        this.email = this.page.locator('#Email');
        this.password = this.page.locator('#Password');
        this.loginButton = this.page.locator('input[value="Log in"]');
    }

    // //Method
    // async loginPage(){
    //     await this.page.goto("https://demowebshop.tricentis.com/");

    // }
    async login(emailId: string, pword: string) {

        await this.loginLink.click();
        await this.email.fill(emailId);
        await this.password.fill(pword);
        await this.loginButton.click();

    }

}