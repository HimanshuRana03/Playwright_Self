import { test, expect } from "@playwright/test";
test("Form fill in Playwright", async ({ page }) => {
  //type,fill,pressSequentially
  //await page.goto("https://ultimateqa.com/filling-out-forms/");
  //await page.locator("#et_pb_contact_name_0").fill("Hacker");
  //await page.locator("#et_pb_contact_message_0").fill("Filling the form using fill functions in playwright")
  //await page.locator("#et_pb_contact_name_0").pressSequentially("Hacker",{delay:500});
  //await page.getByRole('button',{name:"Submit"}).first().click()
  //await expect(page.getByText("Thanks for contacting us")).toBeVisible();
});
test("click, dblclick, right click", async ({ page }) => {
  //click, dblclick, right click
  //await page.goto("https://doubleclicktest.com");
  //await page.getByText("Mouse Clicks:").click();
  //await page.getByText("Double Clicks:",{exact:true}).dblclick();
  //await page.getByText("Right Clicks:").click({button:"right"});
});
test("radio, checkbox", async ({ page }) => {
  await page.goto("https://artoftesting.com/samplesiteforselenium");
  // const radiobuttonmale= page.locator("#male");
  // const radiobuttonfemale=page.locator("#female");
  // await radiobuttonmale.check();
  // await radiobuttonfemale.check();
  // await expect(radiobuttonmale).not.toBeChecked()
  const checkbox1 = page.locator(".Automation");
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
  await checkbox1.uncheck();
  await expect(checkbox1).not.toBeChecked();
});
test.describe("dropdown", () => {
  test("dropdown using selectOption by text", async ({ page }) => {
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    //await page.locator("#testingDropdown").selectOption("Database Testing");
    //await expect(page.locator("#testingDropdown option:checked")).toHaveText("Database Testing");
    await page.locator("#testingDropdown").selectOption({ index: 3 });
    await expect(page.locator("#testingDropdown option:checked")).toHaveText(
      "Database Testing",
    );
  });
  test("dropdown using label", async ({ page }) => {
    await page.goto(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_optgroup",
    );
    // await page.frameLocator("#iframeResult").locator("select").selectOption({label:"Audi"});
    await page
      .frameLocator("#iframeResult")
      .locator("select")
      .selectOption("mercedes");
  });
  test("multiselect dropdown", async ({ page }) => {
    await page.goto("https://demoqa.com/select-menu");
    await page.locator("#cars").selectOption(["Volvo", "audi", "opel"]);
    //multiselect pe array ke andar values pass karte hai value, label, text ke through bhi kar sakte hai value: likne ki jaruat ni hai
  });
});
test.describe("alerts,prompts,confirmation box", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  });
  test("alerts", async ({ page }) => {
    //page.on() itself is not the callback function. It registers a callback function that will be triggered when the specified event occurs.
    //'dialog' is the event name and must remain 'dialog' to listen for that event. baki second wala parameter name hai toh kuch bhi rakh sakte hai

    page.on("dialog", (dialog) => {
      expect(dialog.type()).toEqual("alert");
      expect(dialog.message()).toContain("I am a JS Alert");
      dialog.accept();
    });
    await page.getByRole("button", { name: "Click for JS Alert" }).click();
    //click se phele dialog handler dena hoga
    expect(page.locator("#result")).toHaveText(
      "You successfully clicked an alert",
    );
  });
  test("confirmation box", async ({ page }) => {
    page.on("dialog", (dialog) => {
      expect(dialog.type()).toEqual("confirm");
      expect(dialog.message()).toContain("I am a JS Confirm");
      //dialog.accept();
      dialog.dismiss();
    });
    await page.getByRole("button", { name: "Click for JS Confirm" }).click();
    // await expect(page.locator("#result")).toHaveText("You clicked: Ok")
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
  });
  test("prompts", async ({ page }) => {
    page.on("dialog", (dialog) => {
      expect(dialog.type()).toEqual("prompt");
      expect(dialog.message()).toContain("I am a JS prompt");
      dialog.accept("Hello");
      //dialog.dismiss();
    });
    await page.getByRole("button", { name: "Click for JS Prompt" }).click();
     await expect(page.locator("#result")).toHaveText("You entered: Hello")
    //await expect(page.locator("#result")).toHaveText("You entered: null");
  });
});
/*test.describe("frames/iframes",()=>{
test("iframe with name",async({page})=>{
await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");
const frames=await page.frame("iframeResult");
frames.locator("#fname").fill("Hello");
frames.locator("input[value='Submit']").click();
})
test.skip("iframe with url",async({page})=>{
await page.goto("https://www.w3schools.com/html/html_iframe.asp");
const framev= await page.frame({url:"https://www.w3schools.com/html/default.asp"});
await framev.getByLabel('Button to open search field' ).click()
await framev.getByRole("textbox",{name:"Search field"}).fill("python")
})
test("iframe with frameLocator method",async({page})=>{
await page.goto("https://www.w3schools.com/html/html_iframe.asp");
const framev= await page.frameLocator("iframe[title='W3Schools HTML Tutorial']");
await framev.getByRole('button',{name:'Button to open search field' }).click()
await framev.getByRole("textbox",{name:"Search field"}).fill("python")
//await page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('link', { name: 'CSS', exact: true }).click();
})
})
*/
test("Handling new page",async({context})=>{
//In Playwright, child windows (popups / new tabs) are handled using the popup event or context.waitForEvent('page').
const page= await context.newPage();
await page.goto("https://demoqa.com/browser-windows");
//ab click karne se phele ek event create karenge
const pagepromise= context.waitForEvent("page");
await page.locator("#tabButton").click();
const newpage= await pagepromise;
await expect(newpage.locator("#sampleHeading")).toHaveText("This is a sample page")
})
