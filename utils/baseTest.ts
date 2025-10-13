// import { test as base } from '@playwright/test';
// export const test = base.extend({
//  // Common setup for each test
//  beforeEach: async ({ page }, use) => {
//    await page.goto('https://demowebshop.tricentis.com/');
//    await use(page);
//  },
//  // Common teardown
//  afterEach: async ({ page }) => {
//    await page.close();
//  }
// });
// export{expect} from '@playwright/test';

import { test as base, expect } from '@playwright/test';
export { expect };
export const test = base;

test.beforeEach(async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
});

test.afterEach(async ({ page }) => {
  await page.close(); // Optional — Playwright handles this automatically
});
