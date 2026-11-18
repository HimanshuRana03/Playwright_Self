import{expect,test}from'@playwright/test';
test('Check the right page',async({page})=>{
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveURL('https://www.saucedemo.com');
})
test("success login",async({page,browserName})=>{
    //Increases the timeout for a specific test by three times its default value, useful for operations that inherently take longer to complete.test.slow() isko test ke andar use karna hai bahar use ni kar sakte why kyki ye test ke liye hi hai
    test.slow(browserName=== "firefox");
    await page.goto('https://www.saucedemo.com');
    await page.getByTestId('username').type('standard_user');
    await page.getByTestId('password').type('secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await page.getByTestId('shopping-cart-link').click();
    // const Testtext=await page.getByText('Your Cart').textContent();
    // if(Testtext==='Your Cart'){
    //     console.log("Test Passed")
    // }
    // else{
    //     console.log("Test Failed")
    // }
})
//test("failed login",async({page})=>{
    //  await page.goto('https://www.saucedemo.com');
    // await page.getByTestId('username').type('standard_user_wrong');
    // await page.getByTestId('password').type('secret_sauce');
    // await page.getByTestId('login-button').click();
    //await expect(page.getByTestId('shopping-cart-link')).toBeVisible();
    /**
     *2 ways to check the html report
     1)in terminal run command npx playwright --report=html
     2)in terminal run command npx playwright show-report
     2 ways is inbuilt in playwright.config.js file reporter: [['html', { open: 'always' }]],  this line is added so that report will be generated automatically after test run
     */
    //await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    //await expect(page.getByTestId('login-button')).toBeDisabled();
    //await expect(page.getByTestId('login-button')).toBeEnabled();
    //await expect(page.getByTestId('login-button')).toBeHidden();
    //await expect(page.getByTestId('login-button')).toHaveText("Login");
    //await expect(page.getByTestId('login-button')).toHaveAttribute("id","login-button");
    //await expect(page.getByTestId('login-button')).toHaveId("login-button");
     
//})