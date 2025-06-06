
import { test, expect } from '@playwright/test';

import config from '../config/config';  


test('Login Test using env variables', async ({ page }) => {
  await page.goto(process.env.BASE_URL);

  await page.fill('#user-name', config.username);
  await page.fill('#password', config.password);
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
});
