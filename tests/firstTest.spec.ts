import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:4200");
});

test.describe("first test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('link', { name: 'Forms' }).click();
  });

  test("Navigate to Forms", async ({ page }) => {
    await page.getByRole('link', { name: 'Form Layouts' }).click();
  });

  test("Navigate to DatePicker", async ({ page }) => {
    await page.getByRole('link', { name: 'Datepicker' }).click();
  });
});

test.describe("second test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('link', { name: 'Charts', exact: true }).click();
  });

  test("Navigate to Charts", async ({ page }) => {
    await page.getByRole('link', { name: 'Echarts' }).click();
  });
});
