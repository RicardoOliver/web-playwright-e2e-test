import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async go() {
    await this.page.goto('https://www.amazon.com.br/');
    await this.handleCookies();
  }

  async search(term: string) {
    await this.page.fill('#twotabsearchtextbox', term);
    await this.page.click('#nav-search-submit-button');
  }

  async handleCookies() {
    const accept = this.page.locator('input[name="accept"]');

    if (await accept.isVisible().catch(() => false)) {
      await accept.click();
    }
  }
}