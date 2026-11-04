import{test} from '@playwright/test'
test('register',async ({page})=>{
    page.goto('https://demo.automationtesting.in/Register.html')
    const FirstName = await page.locator('//input[@placeholder="First Name"]')
    FirstName.fill('ram')

    const email = await page.locator('//input[@type="email"]')
    email.fill('rak@gmail.com')
    await email.getAttribute('required')
    await email.getAttribute('pattern')
    const ph =await page.locator('//input[@type="tel"]')
    page.fill('9800786543')
    await ph.getAttribute('required')
    await ph.getAttribute('pattern')

    const radio = await page.locator('//input[@value="Male"]')
    await radio.check();
    await radio.isChecked();

    const check = await page.locator('//input[@value="Cricket"]')
    await check.check();
    await check.isChecked();

    // language doubt

    const lan = await page.locator('//div[@id="msdd"]')
lan.check()
// ----------

const skill = await page.locator('//select[@id="Skills"]')
await skill.selectOption({index:1})

const coun =await  page.locator('//select[@id="countries"]')
coun.selectOption({index:0})


// country doubt 
const selectcountry = await page.locator('//span[@role="combobox"]')
selectcountry.click()
// ---------

// year

const Year = await page.locator('//select[@placeholder="Year"]')
Year.selectOption({value:"1916"})
// month
const month = page.getByPlaceholder('Month')
month.selectOption({value:"January"})
// date
const Day = page.locator('//select[@placeholder="Day"]')
Day.selectOption({value:"1"})

page.getByPlaceholder('Day').selectOption('1 ')

})