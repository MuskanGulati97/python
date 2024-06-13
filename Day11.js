const playwright = require('playwright');



//Using Try Catch
/*
(async() => {
    const b = await firefox.launch({headless: false});
    const c = await b.newContext();
    const p = await c.newPage();

    await p.goto('http://automationpractice.com/');
    try {
        await p.waitForSelector('#search_query_top1');
        console.log("Assertion Passed");
    } catch(error) {
        console.log('Assertion Failed: $(error)');
    }

}) ();
*/


// using .then and catch

(async() => {
    const b = await playwright.chromium.launch({headless: false});
    const c = await b.newContext({
        recordVideo: {
            dir: '.videos',
            size: {width: 640, height: 480}
        }
    });
    const p = await c.newPage();

    await p.goto('http://automationpractice.com/');
    await p.waitForSelector('#search_query_top1')
    .then(() => {
        console.log("Passed");
    }).catch(async(error) => {
        console.log('Assertion Failed: ${error}');
    });
    await b.close();

}) ();



// Methods to find the elements
// 1. $- Find an element which matches with in the page and return it

(async() => {
    const  browser = await playwright.chromium.launch({headless: false});
    const context = await browser.newContext({
        recordVideo: {
            dir: './videos',
            size: {width: 640, height: 480}
        }
    });
    const page = await context.newPage();
    await page.goto('http://automationpractice.com/');
    await (await page.waitForSelector('#search_query_top')).dispatchEvent(async() => {
        const element = await page.$('#search_query_top');
        console.log(element);
        await element.fell('Dress');
    });


// 2. Find all the elements of selector & return an array of all elements
    const elements = await page.$$('.sf-with-ul');
    let values = [];
    for ( let el of elements) {
        const text = await page.evaluate(el => el.innerText, el);
        console.log(text);
        values.push(text);
    }
    console.log(values);
    await page.fill('#search_query_top', 'Top');
    await page.click('[name="submit_search"]');




// 3. $eval : Pass selector as arguement then return the attributes
    await page.waitForSelector('#search_query_top');
    const searchedValue = await page.$eval('#search_query_top', el => el.value);
    console.log('searchedValue ' + searchedValue);

    const classes = await page.$eval('#search_query_top', el => el.classList);
    console.log('searchedvalue classes : ' + classes);
    console.log(classes);

    await browser.close();


})();