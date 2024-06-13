
// const assert = require('assert');
// const expect = require('chai').expect;


const playwright = require('playwright');

(async() =>{
 
    const browser = await playwright.firefox.launch({headless:false});
    const context = await browser.newContext();
    const p = await context.newPage();
    await p.goto('http://automationpractice.com/index.php');


    
    //Using ID
    await p.waitForSelector('#search_query_top');
    await p.fill('#search_query_top', 'Dress');

    //Using name
    await p.click('[name="submit_search"]');

    //Using text
    await p.click('text=Cart');

    await p.click('text=Women');

    //CSS selector
    await p.click('#contact-link a');

    //Combine CSS & text selectors
    // await p.waitForSelector('#contact-link :has=text("Contact us")');
    // await p.click ('#contact-link :has=text("Contact us")')

    //Select by attribute with CSS selector
    // We can use ID, name
    await p.waitForSelector('data-validate="isEmail"');

    await p.fill('[data-Validate="isEmail"', 'test@gmail.com');

    //Combine CSS & text selectors
    await p.waitForSelector('a:has-text("Sign in")');
    await p.click('a:has-text("Sign in")');

    //Element that contains another, with CSS Seector
    await p.waitForSelector('#header_logo:has(.logo');
    await p.click('#header_logo:has(.logo');

    // Pick n-th match
    await p.click(':nth-match(.sf-with-ul, 4)'); //Not a good approach, if class is moved, the code may fail.

    // Xpath Selector
    // We can go from child to parent class to(Backward) unlike CSS selector
    await p.waitForSelector('xpath=//input[@id="search_query_top"]');
    await p.fill('xpath=//input[@id="search_query_top"]', 'Test Value');
    await p.click('xpath=//button[@name="submit_search"]');


    // Get Parent from child
    //span[text()='Search']/parent::button
    //Get child from parent
    //span[text()='Search']/button


    //Working with drop downs
    await p.goto('http://automationpractice.com/index.php?controller=contact');
    await p.waitForSelector('#id_contact');

    //Using Label
    await p.selectOption('#id_contact', {label: 'Webmaster'});

    //Using value
    await p.selectOption('#id_contact', {value: '2'});



    //Using Focus

    await p.goto('https://www/globalsqa.com/angularJs-protactor/Multiform/#/form/profile');
    try {
        await p.waitForSelector('h2: has-text("Let\'s Be Friends")');
        console.log('Locator found for verification');
    } catch(error) {
        console.log('Locator not found. Error: ' + error);
    }


    await p.waitForSelector('[ng-model="FormData.name"]');
    await p.focus('[ng-model="FormData.name"]');
    await p.fille('[ng-model="FormData.name"]', 'Test Username');

    await p.focus('[ng-model="FormData.email"]');
    await p.fill('[ng-model="FormData.email"]', 'testemail@gmail.com');
    await p.click('[ui-sref="FormData.interests"]');

    // Check box and isChecked

    await p.check('[value="xbox"]');
    const checkedValue = await p.isChecked('[value="xbox"]');
    console.log("VALUE: " + checkedValue);


    //Assertions
    assert.strict.equal(checkedValue, true);

    // npm install chai
    try {
        expect(checkedValue).to.equal(false);
    } catch(error) {
        console.log('Error Name: ' + error.name);
        console.log('Error Message: ' + error.message);
    }
})();