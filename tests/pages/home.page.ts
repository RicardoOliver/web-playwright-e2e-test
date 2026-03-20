import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async go() {
    await this.page.goto('https://www.amazon.com.br/', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });

    // 🔥 aguarda o campo de busca existir (ESSENCIAL no CI)
    const searchInput = this.page.locator('#twotabsearchtextbox');

    await expect(searchInput).toBeVisible({ timeout: 15000 });

    await this.handleCookies();
  }

  async search(term: string) {
    const input = this.page.locator('#twotabsearchtextbox');
    const button = this.page.locator('#nav-search-submit-button');

    // 🔥 garante que o input está pronto
    await expect(input).toBeVisible({ timeout: 15000 });

    await input.fill(term);

    // 🔥 garante que botão está clicável
    await expect(button).toBeVisible();

    await button.click();
  }

  async handleCookies() {
    // 🔥 Amazon muda isso com frequência → fallback
    const accept = this.page.locator('input[name="accept"]');

    try {
      if (await accept.isVisible({ timeout: 3000 })) {
        await accept.click();
      }
    } catch {
      // ignora se não existir
    }
  }
}