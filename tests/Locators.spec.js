import {test,expect} from "@playwright/test";
test("Locators using xpath,css,property",async({page})=>{
    await page.goto("https://www.saucedemo.com");
    //xpath
    //await page.locator("//input[@placeholder='Username']").fill("standard_user");
    await page.getByTestId('username').fill('standard_user');
    //css
    await page.locator("input#password").fill('secret_sauce')
    //css without html tag
    await page.locator('#login-button').click();
    //text
    const textvalue=await page.locator("text='Swag Labs'");
    await expect(textvalue).toBeVisible();
})
 //getBy methods in Playwright
    test(("Locators using getBy methods in Playwright"),async({page})=>{
        await page.goto("https://www.demoblaze.com")
        await page.getByRole('link',{name:"Log In"}).click();
        //await page.getByLabel("Username:").fill("hacker@gmail.com")
        await page.locator('#loginusername').fill("hacker@gmail.com");
        await page.locator('#loginpassword').fill("hacker");
        await page.getByRole('button', { name: 'Log in' }).click();
        const welcome_text=await page.getByRole('link',{name:"Welcome hacker"}).textContent();
        console.log("welcome text is: "+welcome_text)
        //console.log(await page.getByAltText("Second slide").isVisible())

    })