import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import testdata from '../test-data/testdata.json';

test("login testcase",async ({page})=>{

    const loginPage=new LoginPage(page);

    await page.goto("/client");
    await loginPage.login(testdata.username,testdata.password);

    await expect(page).toHaveTitle("Let's Shop");
    

});