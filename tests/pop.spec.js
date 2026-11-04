import {test} from '@playwright/test'
// test('simple box',async ({page})=>{
//     await page.goto('https://demo.automationtesting.in/Alerts.html')

//     page.once('dialog',async(simplehandling)=>{
//         console.log('simplehandling',simplehandling.message())
//         await simplehandling.accept()
//     })

// await page.locator('//button[@onclick="alertbox()"]').click()


// await page.locator('(//a[@class="analystic"])[2]').click()
// page.once('dialog',async (confirmbox)=>{
//     console.log('confirm box',confirmbox.message())
//     await confirmbox.accept()
// })
// await page.locator('//button[@onclick="confirmbox()"]').click()


// await page.locator('(//a[@class="analystic"])[3]').click()

// page.once('dialog',async (promptbox)=>{
//     console.log('promptbox',promptbox.message())
//  await promptbox.accept('hello')
// })

// await page.locator('//button[@onclick="promptbox()"]').click()


// })



test('pageonalerthandling',async ({page})=>{
  await  page.goto('https://demo.automationtesting.in/Alerts.html')

    // await page.locator('//a[@class="analystic"]').click()

    page.on('dialog',async (pageon)=>{
        console.log('pageon',pageon.message())
        await pageon.accept('welcome')
    })
    // await page.locator('//a[@class="analystic"]').click()

    await page.locator('//button[@onclick="alertbox()"]').click() 

    await page.locator('(//a[@class="analystic"])[2]').click()

    await page.locator('//button[@onclick="confirmbox()"]').click()

await page.locator('(//a[@class="analystic"])[3]').click()

await page.locator('//button[@onclick="promptbox()"]').click()


})

