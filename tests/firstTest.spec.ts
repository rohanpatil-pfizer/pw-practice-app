import { test } from "@playwright/test";


test.beforeEach(async ({ page }) => {
  await page.goto("localhost:4200");
  await page.getByText('Forms').click();
});

test.describe("first test suite", () => {
  
  test("Navigate to Forms", async ({ page }) => {
    await page.getByText('Form Layouts').click();
  });

  test("Navigate to DatePicker", async({page}) => {  
    await page.getByText('Datepicker').click();    
  });
});
