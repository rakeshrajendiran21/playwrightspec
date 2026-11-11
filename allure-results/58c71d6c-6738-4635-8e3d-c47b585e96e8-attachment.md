# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orange.spec.js >> handling orange
- Location: tests\orange.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | test('handling orange',async ({page})=>{
> 3  | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  4  | await expect(page).toHaveTitle('OrangeHRM')
  5  | await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  6  | // const UserName = page.locator('//input[@name="username"]')
  7  | // await UserName.fill('Admin')
  8  | // const PassWord = page.locator('//input[@placeholder="Password"]')
  9  | // await PassWord.fill('admin123')
  10 | // const Button = page.locator('//button[contains(@class,"oxd-button oxd-button--medium")]')
  11 | // await Button.click()
  12 | })
  13 | 
  14 | 
```