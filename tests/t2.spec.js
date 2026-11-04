import { test } from '@playwright/test';

test('task', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  // Names
  await page.locator('//input[@placeholder="First Name"]').fill('rakesh');
  await page.locator('//input[@placeholder="Last Name"]').fill('r');

  // Address
  await page.locator('//textarea[@ng-model="Adress"]').fill('chennai');

  // Email
  const email = page.locator('//input[@type="email"]');
  await email.fill('rakesh@gmail.com');
  console.log('email required:', await email.getAttribute('required'));
  console.log('email pattern:', await email.getAttribute('pattern'));

  // Phone (fill() needs a string, not a number)
  const phone = page.locator('//input[@type="tel"]');
  await phone.fill('9876543210');
  console.log('phone required:', await phone.getAttribute('required'));
  console.log('phone pattern:', await phone.getAttribute('pattern'));

  // Gender radio
  const male = page.locator('//input[@value="Male"]');
  await male.check();
  console.log('radio checked:', await male.isChecked());

  // Hobbies checkboxes (type="checkbox" matches 3 elements, so target by id)
  const cricket = page.locator('#checkbox1');
  await cricket.check();
  console.log('cricket checked:', await cricket.isChecked());
  await page.locator('#checkbox2').check(); // Movies

  // Languages: custom dropdown (not a <select>), so click and pick the options
  await page.locator('#msdd').click();
  await page.locator('//ul[contains(@class,"ui-autocomplete")]//a[text()="English"]').click();
  await page.locator('//ul[contains(@class,"ui-autocomplete")]//a[text()="Hindi"]').click();
  await page.locator('//label[text()="Languages"]').click(); // close dropdown

  // Skills
  const skills = page.locator('//select[@id="Skills"]');
  const selectedSkills = await skills.selectOption({ index: 1 });
  console.log('selectedSkills:', selectedSkills);

  // Country (the plain select; options are limited on this page)
  await page.locator('//select[@id="countries"]').selectOption({ index: 0 });

  // Select Country (select2 widget)
  await page.locator('span[role="combobox"]').click();
  await page.locator('//li[contains(@class,"select2-results__option") and text()="India"]').click();

  // Date of birth
  const year = page.locator('//select[@placeholder="Year"]');
  await year.selectOption('1991');
  console.log('selectedYear:', await year.inputValue());

  await page.locator('//select[@placeholder="Month"]').selectOption('June');
  await page.locator('//select[@placeholder="Day"]').selectOption('15');

  // Passwords
  await page.locator('//input[@id="firstpassword"]').fill('Admin@123');
  await page.locator('//input[@id="secondpassword"]').fill('Admin@123');

  // Submit, then Refresh
  await page.locator('//button[@id="submitbtn"]').click();
  await page.locator('//button[@id="Button1"]').click();
});