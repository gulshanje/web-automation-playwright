const { firefox } = require('playwright');
const { test, expect } = require('@playwright/test');

test.describe('My Test Suite', () => {
  test('My Test Case', async ({}) => {
  //const browser = await chromium.launch();
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await authenticate(page);
  await browser.close();

  });
});

async function authenticate(page) {
  await page.goto('https://bitheap.tech');
  await page.screenshot({ path: 'screenshot.png' });
}