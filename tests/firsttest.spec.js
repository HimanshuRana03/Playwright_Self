import { test, expect } from "@playwright/test";
test("first test writing",async({page})=>{
    await page.goto("https://playwright.dev/docs/intro")
    console.log("first test writing")
})
test("second example test",async()=>{
    console.log("second example test")
})