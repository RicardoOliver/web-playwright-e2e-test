import { Page, Locator, expect } from '@playwright/test';

export class SearchPage {
  results: Locator;

  constructor(private page: Page) {
    this.results = page.locator('[data-component-type="s-search-result"]');
  }

  async waitResults() {
    await expect(this.results.first()).toBeVisible({ timeout: 15000 });
  }

  async hasResults() {
    await expect(this.results.first()).toBeVisible();
  }

  async clickFirstProduct() {
    const first = this.results.first();

    // 🔥 tenta múltiplos seletores (fallback)
    const link = first.locator('a.a-link-normal').first();

    await expect(link).toBeVisible({ timeout: 15000 });

    // 🔥 garante que está na viewport
    await link.scrollIntoViewIfNeeded();

    // 🔥 retry manual (Amazon costuma falhar aqui)
    for (let i = 0; i < 3; i++) {
      try {
        await link.click({ timeout: 5000 });
        return;
      } catch (error) {
        if (i === 2) throw error;

        console.log(`Retry clique produto: tentativa ${i + 1}`);
        await this.page.waitForTimeout(1000);
      }
    }
  }
}