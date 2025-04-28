import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestseller_0_1_1_2');
});

test('Test01 - Verify page title', async ({ page }) => {
    await expect(page).toHaveTitle('Amazon.in Bestsellers: The most popular items on Amazon');
});

test('Test02 - Verify Amazon banner text', async ({ page }) => {
    const bannerText = await page.locator('#zg_banner_text').textContent();
    expect(bannerText).toContain('Amazon Bestsellers');
});

test('Test03 - Clicking on Baby Products and capturing different screenshots', async ({ page }) => {
    await page.getByRole('link', { name: 'Baby Products' }).first().click();
    // capture screenshot of element
    await page.getByAltText("MamyPoko Pants All Night Absorb Baby Diapers, Large (L), 44 Count 9-14 kg").screenshot({ path: './screenshots/element.png' });
    // capture visible_page screenshot
    await page.screenshot({ path: './screenshots/visible_page.png' });
    // capture full_page screenshot
    await page.screenshot({ path: './screenshots/full_page.png', fullPage: true });
});

test('Test04 - Click on Books category & verify product visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Books' }).first().click();
    const products = page.getByLabel('Action & Adventure');
    await expect(products).toBeVisible();
});

test('Test05 - Click on Electronics category & verify Cameras & Photography is visible', async ({ page }) => {
    await page.getByRole('link', { name: 'Electronics' }).first().click();
    const item = page.getByRole('link', { name: 'Cameras & Photography' });
    await expect(item).toBeVisible();
});

test('Test06 - Performing mouse actions', async ({ page }) => {
    await page.getByRole('link', { name: 'Electronics' }).first().click({ button: 'left' });
    await page.getByRole('link', { name: 'Electronics' }).first().click({ button: 'middle' });
    await page.getByRole('link', { name: 'Electronics' }).first().click({ button: 'right' });
});

test('Test07 - Performing keyboard actions', async ({ page }) => {
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
});
