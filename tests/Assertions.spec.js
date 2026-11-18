import { expect,test } from "@playwright/test";
test("Assertions in Playwright",async({page})=>{
    await page.goto("https://www.saucedemo.com");
    const login_button=await page.getByTestId("login-button");
    //expect(login_button).toBeVisible();
    //expect(login_button).toHaveCount(1);
    //expect(login_button).toBeDisabled()
    //expect(login_button).toBeEnabled();
    //expect(login_button).toBeHidden()
    //expect(login_button).toHaveText("Login");
    //expect(login_button).toHaveAttribute("id","login-button");
    //expect(login_button).toHaveId("login-button");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
})