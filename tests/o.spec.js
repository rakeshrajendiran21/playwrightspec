// import {test} from '@playwright/test'
// test('orangeDemo',async ({page})=>{
//   await  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// const UserN = page.locator('//input[@name="username"]')
// await UserN.fill('Admin')
// const Pass = page.locator('//input[@placeholder="Password"]')
// await Pass.fill('admin123')
// const Butt = page.locator ('//button[contains(@class,"oxd-button oxd-button--medium")]')
// await Butt.click()
// })

// import {test} from '@playwright/test'
// test('admin',async({page})=>{
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//   await page.getByPlaceholder('Username').fill('Admin')
//   await page.getByPlaceholder('Password').fill('admin123')
//   await page.locator('//button[contains(@class,"oxd-button oxd-button--medium")]').click()

// })















import {test} from '@playwright/test'
test ('full',async ({page})=>{
  await page.goto('https://demo.automationtesting.in/Register.html')
    const fname = await page.getByPlaceholder('First Name').fill('Rakesh')
    const lastname = await page.locator('//input[@placeholder="Last Name"]')
    await lastname.fill('sharma')
    const add = await page.locator('//textarea[contains(@class,"form-control ng-pristine")]')
    await add.fill('tiruvannamalai')
    const  emaail = await page.locator('//input[@type="email"]')
await emaail.getAttribute('pattern')
await emaail.getAttribute('required')
const ph = await page.locator('//input[contains(@class,"form-control ng-pristine ng-untouched ng-invalid")]')
await ph.getAttribute('pattern')
await ph.getAttribute('required')
const gen = await page.locator('//input[@value="Male"]')
await gen.check()
await gen.isChecked()
const hob = await page.locator('//input[@id="checkbox1"]')
await hob.check()
await hob.isChecked()
const lan = await page.locator('//div[@id="msdd"]')
lan.check()
const skill =await page.locator('//select[@id="Skills"]')
skill.selectOption({value:"Adobe InDesign"})
skill.locator('option:checked').allTextContents

const cou = await page.locator('//select[@id="country"]')
cou.selectOption([{value:"Australia"},{index:'2'}])
cou.locator('option:checked').allTextContents()
  
const year = await page.locator('//select[@id="yearbox"]')
year.selectOption({value:"1916"}).allTextContents()

const month = await page.locator('//select[@placeholder="Month"]')
month.selectOption({value:"January"}).allTextContents()


const day = await page.locator('//select[@id="daybox"]')
day.selectOption({value:"1"}).allTextContents()

await page.locator('//input[@id="firstpassword"]')
await page.locator('//input[@id="secondpassword"]')
await page.locator('//button[@id="submitbtn"]').click()


})