import { test, expect } from '@playwright/test';

test('Test01 - has title', async ({ page }) => {
    await page.goto('http://localhost:5500/mywebsite/index.html');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Book Tracker/);
});

test('Test02 - check heading', async ({ page }) => {
    await page.goto('http://localhost:5500/mywebsite/index.html');
    await page.getByText('Book Tracker').isVisible();
});

test('Test03 - verify username and password fields are enabled', async ({ page }) => {
    await page.goto('http://localhost:5500/mywebsite/index.html');
    await page.getByPlaceholder('Username').isEnabled();
    await page.getByPlaceholder('Password').isEnabled();
});

test("Test04 - check if Don't have an account? is visible", async ({ page }) => {
    await page.goto('http://localhost:5500/mywebsite/index.html');
    await page.getByText("Don't have an account? ").isVisible();
});

test('Test05 - check if login button is enabled', async ({ page }) => {
    await page.goto('http://localhost:5500/mywebsite/index.html');
    await page.getByText('submit').isVisible();
});