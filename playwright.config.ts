import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: 'tests/steps/**/*.ts',
});

export default defineConfig({
  testDir,

  timeout: 30000,

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html']],

  use: {
    baseURL: 'https://www.amazon.com.br',

    headless: process.env.CI ? true : false,

    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },

    trace: 'on-first-retry',
  },
});