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
  await expect(successtext).toHaveText('Data loaded with AJAX get request.',{timeout:20000}); 

});


test('Alternative Waits', async ({page}) => {
  const successBtn = page.locator('.bg-success');

  //  wait for element 
  // await page.waitForSelector('.bg-success');

  // wait for particular response
  // await page.waitForResponse('http://uitestingplayground.com/ajaxdata');

  // wait for network calls to be completed ('NOT RECOMMENDED')
  await page.waitForLoadState('networkidle'); // wait untill all network calls are completed, if some API calls are stuck then will move to next line

  const text = await successBtn.allTextContents(); 
  expect(text).toContain('Data loaded with AJAX get request.');

});