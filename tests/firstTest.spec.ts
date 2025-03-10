import { test } from "@playwright/test";

test.describe("first test suite", () => {
  test("Navigate to Forms", async ({ page }) => {
    await page.goto("localhost:4200");
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });
  test("second test", () => {});
});
