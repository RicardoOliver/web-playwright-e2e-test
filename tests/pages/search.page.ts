import { Page, Locator, expect } from '@playwright/test';

export class SearchPage {
  results: Locator;

  constructor(private page: Page) {
    this.results = page.locator('[data-component-type="s-search-result"]');
  }

  async waitResults() {
    // 🔥 aguarda pelo menos 1 resultado real
    await this.page.waitForSelector('[data-component-type="s-search-result"]', {
      state: 'visible',
      timeout: 20000
    });

    await expect(this.results.first()).toBeVisible();
  }

  async hasResults() {
    const count = await this.results.count();
    expect(count).toBeGreaterThan(0);
  }

  async clickFirstProduct() {
    const first = this.results.first();

    // 🔥 múltiplos seletores (Amazon muda MUITO)
    const link = first.locator('h2 a, a.a-link-normal').first();

    await expect(link).toBeVisible({ timeout: 15000 });

    // 🔥 scroll obrigatório (CI/headless)
    await link.scrollIntoViewIfNeeded();

    // 🔥 pequeno wait para estabilizar DOM
    await this.page.waitForTimeout(500);

    // 🔥 retry inteligente
    for (let i = 0; i < 3; i++) {
      try {
        await link.click({ timeout: 5000 });

        // 🔥 garante navegação (IMPORTANTÍSSIMO)
        await this.page.waitForLoadState('domcontentloaded');

        return;
      } catch (error) {
        if (i === 2) throw error;

        console.log(`Retry clique produto: tentativa ${i + 1}`);
        await this.page.waitForTimeout(1000);
      }
    }
  }
}