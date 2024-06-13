const playwright = require('playwright');
const assert = require('assert');

(async () => {
    const browser = await playwright.chromium.launch({
        headless: false,
        devtools: true
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({
        width: 1440,
        height: 9000
    })
    await page.goto('https://blazedemo.com/index.php');
/*
    //Taking Screenshot
    await page.screenshot({path: 'ea-${Date.now.toString}.png'});

    // Takes screenshot of the browser type:
    await page.screenshot({ path: 'example-${browserType}.png' });


    // Hovering
    await page.hover();
*/


    await page.waitForResponse( response => {
        return response.request().resourceType() === "xhr"
    })

    await page.waitForSelector('h1:hasText("Welcome to the Simple Travel Agency!")')
    
    // Selecting departure city from the drop down:
    await page.waitForSelector('[name="fromPort"]');


    // await p.selectOption('#id_contact', {label: 'Webmaster'});
    await page.selectOption('[name="fromPort"]', {label: 'Boston'});


    // Selecting DESTINATION city from the drop down:
    await page.waitForSelector('[name="toPort"]');

    await p.selectOption('[name="toPort"]', {label: 'London'});

    // Click the button await p.click('xpath=//button[@name="submit_search"]');
    await p.click('//button[text()="Find Flights"]');
    





    // await p.waitForSelector()


    // Filling in the values

    // 'xpath=//select[@id="cardType"], {values: "visa"}';



})();




