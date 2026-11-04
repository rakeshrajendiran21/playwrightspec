import {test} from '@playwright/test'
test('windowhandling',async ({context})=>{
    const page = await context.newPage()
    await page.goto('https://demo.automationtesting.in/Windows.html')

    // new window
    // await page.locator("//a[contains(text(),'open new window')]").click()

    const [newPage] = await Promise.all([context.waitForEvent('page'),page.locator('(//button[@class="btn btn-info"])[1]').click()])
const newpageUrl = await newPage.url()
console.log('newpage url', newpageUrl)
const newpageTitle = await newPage.title()
console.log('newpagetitle',newpageTitle)
await newPage.locator("//span[text()='Projects']").click()
const textofproject = await newPage.locator('//h1[@class="d-1"]').textContent()
console.log('the text retervied',textofproject)
await page.bringToFront()
const bringbackpage = await page.locator('//div[@class="col-sm-8 col-xs-8 col-md-8"]/h1').textContent()
console.log('bringbackpage',bringbackpage)


})
