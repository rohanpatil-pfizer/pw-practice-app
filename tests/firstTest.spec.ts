import { test } from "@playwright/test";


test.beforeEach(async ({ page }) => {

});

test.describe("first test suite", () => {
  
  test("Navigate to Forms", async ({ page }) => {
    await page.goto("localhost:4200");
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });

  test("Navigate to DatePicker", async({page}) => {
    await page.goto("localhost:4200");
    await page.getByText('Forms').click();
    await page.getByText('Datepicker').click();    
  });
});
