import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: 'tests/steps/**/*.ts',
});

export default defineConfig({
  testDir,

  // 🔥 mais tempo (CI precisa)
  timeout: 60000,

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html']],

  use: {
    baseURL: 'https://www.amazon.com.br',

    headless: process.env.CI ? true : false,

    // 🔥 viewport fixo (ESSENCIAL)
    viewport: { width: 1280, height: 720 },

    // 🔥 evita bloqueio da Amazon
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36',

    // 🔥 tempos de ação
    actionTimeout: 15000,
    navigationTimeout: 30000,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});