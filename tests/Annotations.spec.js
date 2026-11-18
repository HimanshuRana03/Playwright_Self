import{expect,test}from '@playwright/test';
//test.describe: Used to group related tests into logical blocks, such as separating positive and negative test scenarios.
test.describe("test group 1",()=>{

    test("test1",({page})=>{
        console.log("Annotations in Playwright test 1");
    })
    test("test2",({page})=>{
        console.log("Annotations in Playwright test 2");
    })
})
//Declares a focused test or suite; when used, only these tests will execute, which is useful for debugging.
// test.only("test3",({page})=>{
//     console.log("Annotations in Playwright test 3");
// })
//test.skip: Marks tests or entire describe blocks as irrelevant, causing them to be ignored during execution. This can be applied directly, conditionally (e.g., based on browser), or via callback functions.
// test.skip("test3",({page})=>{
//      console.log("Annotations in Playwright test 3");
//  })

//test.fixme: Declares a test to be fixed, marking it as skipped until the underlying issue is resolved, helping manage broken functionality.
// test.fixme("test4",({page})=>{
//     console.log("Annotations in Playwright test 4");
// })

test("test5",({page})=>{
        console.log("Annotations in Playwright test 5");
    })
    test("test6",({page})=>{
        console.log("Annotations in Playwright test 6");
    })
/**
 * 
 */