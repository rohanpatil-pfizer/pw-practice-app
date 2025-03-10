import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:4200");
});

test.describe("first test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole("link", { name: "Forms" }).click();
    await page.getByRole("link", { name: "Form Layouts" }).click();
  });

  test("Locator syntax Rules", async ({ page }) => {
    //By Tag name
    page.locator("input").first().click();

    // by ID
    await page.locator("#inputEmail1");

    // by class name
    page.locator(".input-full-width");

    // by attribute
    page.locator('[placeholder="Email"]');

    // by Class value (full)
    page.locator(
      '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]'
    );

    // combine different selectors
    page.locator('input[placeholder="Email"]#inputEmail1.input-full-width');

    // by XPath (NOT Recommended)
    page.locator('//*[@id="inputEmail1"]');

    // by partial text match
    page.locator('button:has-text("Submit")');
    page.locator(':text-is("Using the Grid")');
  });

  // https://playwright.dev/docs/api/class-framelocator#frame-locator-frame-locator
  test("User facing locators", async ({ page }) => {
    // await page.getByRole('textbox', { name: 'Email' }).first().click();
    // await page.getByRole('button', { name: 'Sign in' }).first().click();

    // await page.getByLabel('Email').first().click();
    // await page.getByPlaceholder('Jane Doe').click();
    await page.getByTestId("SignIn").click();
  });
});

test.describe.skip("second test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole("link", { name: "Charts", exact: true }).click();
  });

  test("Navigate to Charts", async ({ page }) => {
    await page.getByRole("link", { name: "Echarts" }).click();
  });
});
