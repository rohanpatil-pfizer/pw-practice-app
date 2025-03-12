import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://uitestingplayground.com/ajax');
  await page.getByRole('button', {name: 'Button Triggering AJAX Request'}).click();
});


test('Auto Waiting', async ({page}) => {
  const successtext = page.locator('.bg-success');
  // await successtext.click();
  //const text1 = await successtext.textContent(); // this will wait for the text to appear even if the default timeout is modified in config 
   
  await successtext.waitFor({state: 'attached'}); // this will wait for the element to be visible needed for the method in next line to wait
  const text1 = await successtext.allTextContents(); 
  expect(text1).toContain('Data loaded with AJAX get request.');

  // expect has a timeout of 5 seconds, hence if we comment the above 3 lines then this below assertion will fail
  await expect(successtext).toHaveText('Data loaded with AJAX get request.'); 

});