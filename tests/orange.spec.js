import {test,expect} from '@playwright/test'
test('handling orange',async ({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page).toHaveTitle('OrangeHRM')
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// const UserName = page.locator('//input[@name="username"]')
// await UserName.fill('Admin')
// const PassWord = page.locator('//input[@placeholder="Password"]')
// await PassWord.fill('admin123')
// const Button = page.locator('//button[contains(@class,"oxd-button oxd-button--medium")]')
// await Button.click()
})

