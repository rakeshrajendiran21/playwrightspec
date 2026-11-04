import {test} from '@playwright/test'
// test('frame', async ({page})=>{
// await page.goto('https://demo.automationtesting.in/Frames.html')
// const innerframe = await page.frameLocator('//iframe[@id="singleframe"]')
// await innerframe.locator('//input[@type="text"]').fill('trend')
// })


test('nestedframe', async ({page})=>{

    await page.goto('https://demo.automationtesting.in/Frames.html')
    await page.locator('(//a[@class="analystic"])[2]').click()
        const outerframe = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
const innerframe = await outerframe.frameLocator('//iframe[@src="SingleFrame.html"]')
await innerframe.locator('//div[@class="container"]//input[@type="text"]').fill('innerframe')

})