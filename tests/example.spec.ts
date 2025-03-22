import { test, expect } from '@playwright/test';

const E2E_TEST_URL = 'http://localhost:5173';

test('first rendering', async ({ page }) => {
  await page.goto(E2E_TEST_URL);

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Main')).toBeVisible();
});

test('테스트 페이지1 접속', async ({ page }) => {
  await page.goto(E2E_TEST_URL);

  // 메뉴 토글 버튼 클릭
  await page.getByRole('menuitem', { name: 'TestPage' }).click();

  // TestPage1 클릭
  await page.getByRole('menuitem', { name: 'TestPage1' }).click();

  await expect(page.getByText('Test Page 1')).toBeVisible();
});
