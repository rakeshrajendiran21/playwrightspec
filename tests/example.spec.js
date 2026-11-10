// @ts-check
import { test, expect } from '@playwright/test';

test('handling orange',async ({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page).toHaveTitle('OrangeHRM')
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

