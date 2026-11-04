import {test} from '@playwright/test'
test('table',async({page})=>{
    await page.goto('https://vinothqaacademy.com/webtable/')
    const table = await page.locator('//table[@id="myTable"]').allTextContents()
    console.log(table)
    const tablehead = await page.locator('//table[@id="myTable"]//thead//tr//th[2]').allTextContents()
    console.log('th',tablehead)
    const tablebody = await page.locator('//table[@id="myTable"]//tbody//tr[2]//td[5]').allTextContents()
    console.log('tb',tablebody)

})