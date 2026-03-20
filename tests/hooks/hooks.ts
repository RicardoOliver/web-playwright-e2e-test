import { test } from '@playwright/test';

// BEFORE (antes de cada cenário)
test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
});

// AFTER (depois de cada cenário)
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({
      path: `screenshots/error-${testInfo.title}.png`,
      fullPage: true
    });
  }
});