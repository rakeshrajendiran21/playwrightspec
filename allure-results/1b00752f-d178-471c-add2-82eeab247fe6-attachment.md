# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: t2.spec.js >> task
- Location: tests\t2.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@placeholder="Last Name"]')
    - locator resolved to <input type="text" required="" ng-model="LastName" placeholder="Last Name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"/>

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('task', async ({ page }) => {
  4  |   await page.goto('https://demo.automationtesting.in/Register.html');
  5  | 
  6  |   // Names
  7  |   await page.locator('//input[@placeholder="First Name"]').fill('rakesh');
> 8  |   await page.locator('//input[@placeholder="Last Name"]').fill('r');
     |                                                           ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  9  | 
  10 |   // Address
  11 |   await page.locator('//textarea[@ng-model="Adress"]').fill('chennai');
  12 | 
  13 |   // Email
  14 |   const email = page.locator('//input[@type="email"]');
  15 |   await email.fill('rakesh@gmail.com');
  16 |   console.log('email required:', await email.getAttribute('required'));
  17 |   console.log('email pattern:', await email.getAttribute('pattern'));
  18 | 
  19 |   // Phone (fill() needs a string, not a number)
  20 |   const phone = page.locator('//input[@type="tel"]');
  21 |   await phone.fill('9876543210');
  22 |   console.log('phone required:', await phone.getAttribute('required'));
  23 |   console.log('phone pattern:', await phone.getAttribute('pattern'));
  24 | 
  25 |   // Gender radio
  26 |   const male = page.locator('//input[@value="Male"]');
  27 |   await male.check();
  28 |   console.log('radio checked:', await male.isChecked());
  29 | 
  30 |   // Hobbies checkboxes (type="checkbox" matches 3 elements, so target by id)
  31 |   const cricket = page.locator('#checkbox1');
  32 |   await cricket.check();
  33 |   console.log('cricket checked:', await cricket.isChecked());
  34 |   await page.locator('#checkbox2').check(); // Movies
  35 | 
  36 |   // Languages: custom dropdown (not a <select>), so click and pick the options
  37 |   await page.locator('#msdd').click();
  38 |   await page.locator('//ul[contains(@class,"ui-autocomplete")]//a[text()="English"]').click();
  39 |   await page.locator('//ul[contains(@class,"ui-autocomplete")]//a[text()="Hindi"]').click();
  40 |   await page.locator('//label[text()="Languages"]').click(); // close dropdown
  41 | 
  42 |   // Skills
  43 |   const skills = page.locator('//select[@id="Skills"]');
  44 |   const selectedSkills = await skills.selectOption({ index: 1 });
  45 |   console.log('selectedSkills:', selectedSkills);
  46 | 
  47 |   // Country (the plain select; options are limited on this page)
  48 |   await page.locator('//select[@id="countries"]').selectOption({ index: 0 });
  49 | 
  50 |   // Select Country (select2 widget)
  51 |   await page.locator('span[role="combobox"]').click();
  52 |   await page.locator('//li[contains(@class,"select2-results__option") and text()="India"]').click();
  53 | 
  54 |   // Date of birth
  55 |   const year = page.locator('//select[@placeholder="Year"]');
  56 |   await year.selectOption('1991');
  57 |   console.log('selectedYear:', await year.inputValue());
  58 | 
  59 |   await page.locator('//select[@placeholder="Month"]').selectOption('June');
  60 |   await page.locator('//select[@placeholder="Day"]').selectOption('15');
  61 | 
  62 |   // Passwords
  63 |   await page.locator('//input[@id="firstpassword"]').fill('Admin@123');
  64 |   await page.locator('//input[@id="secondpassword"]').fill('Admin@123');
  65 | 
  66 |   // Submit, then Refresh
  67 |   await page.locator('//button[@id="submitbtn"]').click();
  68 |   await page.locator('//button[@id="Button1"]').click();
  69 | });
```