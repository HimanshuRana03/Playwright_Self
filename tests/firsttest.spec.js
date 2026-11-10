import { test, expect } from "@playwright/test";
test("first test writing",async({page})=>{
    /**
     * agar page fixture khud karna hai
     * const Browser = await chromium.launch();
     * const context = await Browser.newContext();
     * const page = await context.newPage();
     */
    await page.goto("https://playwright.dev/docs/intro")
    await page.getByRole('button', { name: 'Getting Started' }).click();
    console.log("first test writing")
})
test("second example test",async()=>{
    console.log("second example test")
})