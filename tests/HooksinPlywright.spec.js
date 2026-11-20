import{expect,test}from'@playwright/test';

//Playwright hooks are built-in functions that automatically run setup and teardown steps at specific points in the test lifecycle. 
test.beforeEach("BeforeEach Practice",()=>{
    console.log("Before Each Practice");
})
test.afterEach("AfterEach Practice",()=>{
    console.log("After Each Practice");
})
test.beforeAll("BeforeAll Practice",()=>{
    console.log("Before All Practice");
})
test.afterAll("AfterAll Practice",()=>{
    console.log("After All Practice");
})
test('Test 1',async({page})=>{
console.log("Hooks in Playwright test 1");
//await page.goto("https://www.saucedemo.com");
console.log("Hooks in Playwright test 1 after page.goto");
})
test.describe("Test 2 and Test 3",()=>{
test.beforeEach("BeforeEach Practice",()=>{
    console.log("Before Each Practice in describe block only");
})
    test('Test 2',async({page})=>{
    console.log("Hooks in Playwright test 2");
    //await page.goto("https://www.saucedemo.com");
    console.log("Hooks in Playwright test 2 after page.goto");
    })
    test('Test 3',async({page})=>{
    console.log("Hooks in Playwright test 3");
    //await page.goto("https://www.saucedemo.com");
    console.log("Hooks in Playwright test 3 after page.goto");
    })
})
test('Test 4',async({page})=>{
console.log("Hooks in Playwright test 4");
//await page.goto("https://www.saucedemo.com");
console.log("Hooks in Playwright test 4 after page.goto");
})