// @ts-check
import { test, expect } from "@playwright/test";

test('Product Page Add to Basket', async ({ page }) => {
  await page.goto("http://localhost:2221");
  
  const AddtoBasketButton = page.getByRole('button', { name: 'Add to Basket' }).first();
  await AddtoBasketButton.click();
});
