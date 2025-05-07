import { test, expect } from '@playwright/test';

test('Test_01 - has title', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/John Smith - Web Designer/);
});

test('Test_02 - to have URL', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');

  // Expect URL "to contain" a substring.
  await expect(page).toHaveURL('http://localhost:5500/index.html');
});

test('Test_03 - verify More About Me button is visible', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  await expect(page.getByText('More About Me')).toBeVisible();
});

test('Test_04 - verify John Smith is visible', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  await expect(page.getByText('John Smith').first()).toBeVisible();
});

test('Test_05 - verify after clicking More About Me button', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  await page.getByText('More About Me').click();
  await expect(page).toHaveURL('http://localhost:5500/about.html');
});

test('Test_06 - verify Technical Skills & Professional Skills are visible', async ({ page }) => {
  await page.goto('http://localhost:5500/skills.html');
  await expect(page.getByText('Technical Skills')).toBeVisible();
  await expect(page.getByText('Professional Skills')).toBeVisible();
});

test('Test_07 - verify Communication & Project Management are visible', async ({ page }) => {
  await page.goto('http://localhost:5500/skills.html');
  await expect(page.getByText('Communication')).toBeVisible();
  await expect(page.getByText('Project Management')).toBeVisible();
});


test('Test_08 - verify JavaScript & UI/UX Design are visible', async ({ page }) => {
  await page.goto('http://localhost:5500/skills.html');
  await expect(page.getByText('JavaScript')).toBeVisible();
  await expect(page.getByText('UI/UX Design')).toBeVisible();
});

test('Test_09 - verify after clicking Skill', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  await page.getByText('Skill').click();
  await expect(page).toHaveURL('http://localhost:5500/skills.html');
});

test('Test_10 - verify after clicking Contact', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  await page.getByText('Contact').click();
  await expect(page).toHaveURL('http://localhost:5500/contact.html');
});

test('Test_11 - verify Get in Touch & Send Message are visible', async ({ page }) => {
  await page.goto('http://localhost:5500/contact.html');
  await expect(page.getByText('Get in Touch')).toBeVisible();
  await expect(page.getByText('Send Message')).toBeVisible();
});

test('Test_12 - verify after clicking Home tab', async ({ page }) => {
  await page.goto('http://localhost:5500/contact.html');
  await page.getByText('Home').click();
  await expect(page).toHaveURL('http://localhost:5500/index.html');
});

test('Test_13 - verify after clicking About tab', async ({ page }) => {
  await page.goto('http://localhost:5500/contact.html');
  await page.getByText('About').click();
  await expect(page).toHaveURL('http://localhost:5500/about.html');
});

test('Test_14 - verify after clicking About', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  await page.getByText('About').first().click();
  await expect(page).toHaveURL('http://localhost:5500/about.html');
});

test('Test_15 - verify Download CV btn is present in About page', async ({ page }) => {
  await page.goto('http://localhost:5500/about.html');
  await expect(page.getByText('Download CV')).toBeVisible();
  await expect(page.getByText('Web Designer & Developer')).toBeVisible();
});

test.only('Test_16 - verify Name, Email, Experience, Freelance are present in About page', async ({ page }) => {
  await page.goto('http://localhost:5500/about.html');
  await expect(page.getByText('Name:')).toBeVisible();
  await expect(page.getByText('Email:')).toBeVisible();
  await expect(page.getByText('Experience:')).toBeVisible();
  await expect(page.getByText('Freelance:')).toBeVisible();
});