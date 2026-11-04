import {test} from '@playwright/test'
test('windowhandling',async ({context})=>{
    const page1 = await context.newPage()
    await page1.goto('https://demo.automationtesting.in/Windows.html')

    // new window
    // await page.locator("//a[contains(text(),'open new window')]").click()

    const [newPage1] = await Promise.all([context.waitForEvent('page'),page1.locator('(//button[@class="btn btn-primary"])').click()])
const newpageUrl = await newPage1.url()
console.log('newpage url', newpageUrl)
const newpageTitle = await newPage1.title()
console.log('newpagetitle',newpageTitle)
await newPage1.goto('https://www.selenium.dev/')
// await newPage1.locator("//span[text()='Projects']").click()
// const textofproject = await newPage1.locator('//h1[@class="d-1"]').textContent()
// console.log('the text retervied',textofproject)
await page1.bringToFront()
const bringbackpage = await page1.locator('//div[@class="col-sm-8 col-xs-8 col-md-8"]/h1').textContent()
console.log('bringbackpage',bringbackpage)


})
