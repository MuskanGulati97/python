/*
const { firefox, chromium } = require('playright');


(async () => {
    const browser1 = await firefox.launch();
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();
    page1.goto('https://automationpractice.com/');

})();

(async () => {
    const browser1 = await chromium.launch();
    const context2 = await browser2.newContext();
})


() => {
    //Arrow Function
}


(function)();
(() => {
    //IIFE
});

*/


// const { chromium } = require('playright');
const playright = require('playright');

(async () => {
    // const browser = await chromium.launch();
    // const browser1 = await playright.firefox();
    const browser = await playright['chromium'].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('');
    await page.screenshot({path: 'newScreenshot.png'});
    await browser.close();
})();



/*

// data         = data-id='test'
// id           = #testid
// class        = .testclass
// css selector = 
// xpath        = 

<div id="#div1">
    <span class="testData">
        Test1
    </span>
</div>
<div id="#div2">
    <span class="testData">
        Test2
    </span>
</div>


#div1 span

#div2 .testdata

//[@div] = css


for taking unique locator:

- name
.parentClassName .childClassName[Title='Women']


- xpath= //a[@class='sf-with-ul'][@Title="Women"]
a is the tag name.




// To directly get a unique locator we can use square brackets
*/