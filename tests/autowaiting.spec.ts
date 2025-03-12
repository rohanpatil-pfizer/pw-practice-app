import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://uitestingplayground.com/ajax');
  await page.getByRole('button', {name: 'Button Triggering AJAX Request'}).click();
});


test('Auto Waiting', async ({page}) => {
  const successtext = page.locator('.bg-success');
  
  // await successtext.click();
  
  
  //const text1 = await successtext.textContent(); // this will wait for the text to appear even if the default timeout is modified in config 
  
  const text1 = await successtext.allTextContents(); // this will not wait 
  expect(text1).toBe('Data loaded with Ajax get request.');

});