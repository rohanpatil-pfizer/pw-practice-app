import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:4200");
});

test.describe("first test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole("link", { name: "Forms" }).click();
    await page.getByRole("link", { name: "Form Layouts" }).click();
  });

  test.skip("Locator syntax Rules", async ({ page }) => {
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
  test.skip("User facing locators", async ({ page }) => {
    // await page.getByRole('textbox', { name: 'Email' }).first().click();
    // await page.getByRole('button', { name: 'Sign in' }).first().click();

    // await page.getByLabel('Email').first().click();
    // await page.getByPlaceholder('Jane Doe').click();
    await page.getByTestId("SignIn").click();
  });

  test('Locating Child elements',async ({page})=>{  
     await page.locator('nb-card nb-radio :text-is("Option 2")').click();
      //await page.locator('nb-card').getByRole('button',{name:'Sign in'}).click();
     await page.locator('nb-card').getByRole('button',{name:'Sign in'}).click(); 
  });

  test('Locating Parent Elements',async ({page})=>{

    // Parents are unique & can be used to locate their child elements
    // await page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox',{name:'Email'}).click();  
    await page.locator('nb-card',{has:page.locator('#inputEmail1')}).getByRole('textbox',{name:'Email'}).click();
    await page.locator('nb-card').filter({hasText:"Basic form"}).getByRole('textbox',{name:'Email'}).click();

  });

  test('Reusing the locators',async ({page})=>{
    const basicForm = page.locator('nb-card').filter({hasText:"Basic form"});

    await basicForm.getByRole('textbox',{name:'Email'}).fill('test@test.com');
    await basicForm.getByRole('textbox',{name:'Password'}).fill('Welcome123');
    await basicForm.locator('nb-checkbox').click();
    await basicForm.getByRole('button').click();


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
