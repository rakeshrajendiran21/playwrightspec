import {test} from '@playwright/test'
import { LoginPage } from '../page/loginpage'


test('validate adactin app',async({page})=>{
    const login =new LoginPage(page)
    await login.visiturl()
    await login.enterUsername('Rakesh20')
    await login.enterPassword('Rakesh@123')
    await login.clickButton()
    await login.verifymainPage()
    await login.selectLocation()
    await login.selectHotels()
    await login.selectRoomtype()
    await login.selectNumberofRooms()
    await login.SelectCheckInDate()
    await login.SelectCheckOutDate()
    await login.SelectAdultsperRoom()
    await login.selectChildrenperRoom()
    await login.SelectSearch()

})