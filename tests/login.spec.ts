import {test,expect} from '@playwright/test';

test("login testcase",async ({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("/client");
    await page.pause();

});