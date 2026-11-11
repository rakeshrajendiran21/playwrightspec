# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task.spec.js >> task
- Location: tests\task.spec.js:2:5

# Error details

```
Error: locator.fill: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//textarea[contains(@'class='form-control ng-valid ng-touched')]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6381:25)
    at InjectedScript._queryEngineAll (<anonymous>:7059:49)
    at InjectedScript.querySelectorAll (<anonymous>:7046:30)
    at eval (eval at evaluate (:311:30), <anonymous>:2:42)
    at UtilityScript.evaluate (<anonymous>:313:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('//textarea[contains(@\'class=\'form-control ng-valid ng-touched\')]')

```

```
Error: locator.getAttribute: Test ended.
Call log:
  - waiting for locator('//input[@type="tel"]')

```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | test('task',async ({page})=>{
  3  |     await page.goto('https://demo.automationtesting.in/Register.html')
  4  | const firstName = await page.locator('//input[@placeholder="First Name"]')
  5  | firstName.fill('rakesh')
  6  | const lastName = await page.locator('//input[@placeholder="Last Name"]')
  7  | lastName.fill('r')
  8  | const Address = await page.locator("//textarea[contains(@'class='form-control ng-valid ng-touched')]")
  9  | Address.fill('chennai')
  10 | const Email = await page.locator("//input[contains(@class='form-control ng-valid-email ng-touched ng-dirty')]")
  11 | Email.fill('rakesh@gmail.com')
  12 | const Email1 = await page.locator('//input[@type="email"]')
  13 | console.log(await Email1.getAttribute('required'))
  14 | console.log(await Email1.getAttribute('pattern'))
  15 | const Ph = await page.locator('//input[@type="tel"]')
  16 | Ph.fill(123)
> 17 | await Ph.getAttribute('required')
     |          ^ Error: locator.getAttribute: Test ended.
  18 | await Ph.getAttribute('pattern')
  19 | 
  20 | 
  21 | const Radio = page.locator('//input[@value="Male"]')
  22 | const R1 = Radio.check()
  23 | console.log('radiobutton',R1)
  24 | 
  25 | 
  26 | const checkbox = page.locator('//input[@type="checkbox"]')
  27 | const ch = checkbox.check()
  28 | console.log('ch',ch)
  29 | 
  30 | 
  31 | const lang = page.locator('//multi-select[@id="msdd"]')
  32 | await lang.selectOption([{index:1},{index:2}])
  33 | const lang1=lang.locator('option:checked').allTextContents()
  34 | const skill = await page.locator('//select[@id="Skills"]')
  35 | const selectedskills = await skill.selectOption({index:1})
  36 | console.log('selectedskills',selectedskills)
  37 | 
  38 | const country = await page.locator('//select[@id="countries"]')
  39 | country.selectOption()
  40 | const selectCountry=await page.locator('//select[@id="country"]')
  41 | await selectCountry.selectOption({index:1})
  42 | const selectedCountry = await selectCountry.inputValue()
  43 | console.log('selectedcountry',selectedCountry)
  44 | 
  45 | const year =await page.locator('//select[@placeholder="Year"]')
  46 |  await year.selectOption('1991')
  47 | const selectedyear = await year.locator().inputValue()
  48 | const month = await page.locator('//select[@placeholder="Month"]')
  49 | await month.selectOption('June')
  50 | const day = page.locator('//select[@placeholder="Day"]')
  51 | const PassWord = await page.locator('//input[@id="firstpassword"]')
  52 | PassWord.fill('Admin@123')
  53 | const confirmPass = await page.locator('//input[@id="secondpassword"]')
  54 | await page.fill('Admin@123')
  55 | const submit = await page.locator('//button[@id="submitbtn"]')
  56 | submit.click()
  57 | const Refresh = page.locator('//button[@id="Button1"]')
  58 | Refresh.click()
  59 | 
  60 | })
```