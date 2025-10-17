import { Page } from "@playwright/test";

export class Helper {
    constructor(readonly page: Page) {

    }

    async screenShoton(fileName: string) {
        await this.page.screenshot({ path: `./Screenshots/${fileName}.png`, fullPage: true });

    }

    async staticWait(timeout: number) {

        await this.page.waitForTimeout(timeout);
    }

}
