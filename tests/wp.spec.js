import {test} from '@playwright/test'
test('winh',async({context})=>{
    const page=await context.newPage()
    await page.goto('https://demo.automationtesting.in/Windows.html')

    const [newpage]= await Promise.all([context.waitForEvent('page'),page.locator('//[@]').click()])
    const newurl= await newpage.url()
    const newtitle =await newpage.title()
    await newpage.locator('//span[@text()=""]').click()
    await newpage.locator().textContent()
    await page.bringToFront()
    await page.locator('//[@]').textContent()

})

import {test} from '@playwright/test'
test('pagon',async({page})=>{
    await page.goto()

    page.on('dialog',async(pageon)=>{
        await pageon.accept('welcome')

    })

    page.locator('//button[contains(@)]').click()

}
)

import {test} from '@playwright/test'
test ('pageonce',async ({page})=>{
    await page.goto()

await page.once('popup',async(pageonce)=>{
    await pageonce.accept()
})

    await page.locator
})

import {test} from '@playwright/test'

test('singledrop',async ({page})=>{
    await page.goto()
    const sd=await page.locator('//[contains(@)]')
    await sd.selectOption({index:2})
    await sd.locator('option:checked').textContent()

})

import {test} from '@playwright/test'
import { resolve } from 'node:dns'
test('md',async ({page})=>{
    page.goto('')
    const mudr = await page.locator('//[@]')
    await mudr.selectOption([{index:3},{value:'name'},{lable:'spider'}])
    await mudr.locator('option:checked').allTextContents()
})

const pr = new Promise(resolve,reject){
const a=10
if(a=10)
    resolve('good')
else
    reject('not')
}

pr.then((pro)=>(pro))

.catch(e)
console.log(e)