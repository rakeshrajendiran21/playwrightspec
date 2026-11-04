// import {test} from '@playwright/test'
// test('webtable',async({page})=>{
//     await page.goto('https://vinothqaacademy.com/webtable/')
//     const tabledata = await page.locator('//table[@id="myTable"]').allTextContents()
// // console.log('table',tabledata)
// const tablehead = await page.locator('//table[@id="myTable"]//thead').allTextContents()
// // console.log('th',tablehead)
// const tablerow = await page.locator('//table[@id="myTable"]//thead//tr//th[3]').allTextContents()
// // console.log(tablerow)
// const tbody = await page.locator('//table[@id="myTable"]//tbody').allTextContents()
// // console.log(tbody)

// const tbodytr = await page.locator('//table[@id="myTable"]//tbody//tr[4]//td[4]').allTextContents()
// console.log(tbodytr)
// })


import {test} from '@playwright/test'
test ('webtable',async({page})=>{
    await page.goto('https://assertqa.com/practice/webtables')
    const table = await page.locator('//table[@id="employees-table"]').allTextContents()
// console.log(table)
 const thead = await page.locator('//table[@id="employees-table"]//thead//tr//th[3]').allTextContents()
//  console.log(thead)
const tbody = await page.locator('//table[@id="employees-table"]//tbody//tr[2]//td[3]').allTextContents()
console.log(tbody)
})