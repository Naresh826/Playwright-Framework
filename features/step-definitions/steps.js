// const { Given, When, Then } = require('@cucumber/cucumber');
// const { chromium } = require('playwright');
// const assert = require('assert');
// //const HomePage = require('../pages/Homepage');
// //const { allure } = require('allure-cucumberjs');

const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const assert = require('assert');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.browser.close();
});


let browser, context, page;

Given('I open the page {string}', { timeout: 72000 }, async function (url) {
  browser = await chromium.launch({ headless: false, slowMo: 100 });
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);
});

Then('the title should be {string}', { timeout: 72000 }, async function (expectedTitle) {
  const actualTitle = await page.title();

  if (actualTitle !== expectedTitle) {
    throw new Error(`Expected "${expectedTitle}", but got "${actualTitle}"`);
  }

  // await browser.close();
});

When('User should be on Launch Comapny website', { timeout: 72000 }, async function () {
  let pageURL = page.url();
  assert.equal(pageURL, "https://www.launchconsulting.com/")
});

Then('Verify Text in it', { timeout: 72000 }, async function () {
  //  await this.page.pause(3000);
 let contactUsButton = page.locator('(//div[@class="button-content-tile small"])[2]');
  let  actualText = await contactUsButton.textContent();

  console.log('Actual text:', actualText);
  assert.strictEqual(actualText.trim(), 'Contact Us');
   await browser.close();
});

