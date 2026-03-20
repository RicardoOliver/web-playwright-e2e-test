import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async validateLoaded() {
    await expect(this.page).toHaveURL(/amazon\.com\.br/);
  }

  async validateTitle() {
    await expect(this.page.locator('#productTitle')).toBeVisible();
  }

  async validatePriceIfExists() {
    const price = this.page.locator('.a-price');

    if (await price.count() > 0) {
      await expect(price.first()).toBeVisible();
    }
  }

  async screenshot(name: string) {
    await this.page.screenshot({
      path: `screenshots/${name}-${Date.now()}.png`,
      fullPage: true
    });
  }
}