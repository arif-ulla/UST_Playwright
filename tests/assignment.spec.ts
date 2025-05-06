import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
});

test('check heading', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  await page.getByText('Demo Website').isVisible();
});

test('about home btn', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');

  await page.getByTestId('aboutbtn').click();
  await expect(page).toHaveURL('http://localhost:5500/about.html');

  await page.getByTestId('homebtn').click();
  await expect(page).toHaveURL('http://localhost:5500/index.html');  
});