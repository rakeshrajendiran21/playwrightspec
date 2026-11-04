import { test,expect } from "@playwright/test"

export class LoginPage{
    constructor(page){

        this.page = page
        this.userName=page.locator('//input[@id="username"]')
        this.passWord=page.locator('//input[@id="password"]')
        this.button=page.locator('//input[@id="login"]')
        this.Location=page.locator('//select[@id="location"]')
        this.Hotels =page.locator('//select[@id="hotels"]')
        this.RoomType =page.locator('//select[@id="room_type"]')
        this.NumberofRooms=page.locator('//select[@id="room_nos"]')
        this.CheckInDate=page.locator('//input[@id="datepick_in"]')
        this.CheckOutDate=page.locator('//input[@id="datepick_out"]')
        this.AdultsperRoom=page.locator('//select[@id="adult_room"]')
        this.ChildrenperRoom=page.locator('//select[@id="child_room"]')
        this.Search=page.locator('//input[@id="Submit"]')

    }
    async visiturl(){
       await this.page.goto('https://adactinhotelapp.com/index.php')
    }
    async enterUsername(username){
await this.userName.fill(username)
    }
    async enterPassword(pwrd){
       await this.passWord.fill(pwrd)
    }
    async clickButton(){
        await this.button.click()
    }
    async verifymainPage(){
        await this.page.waitForURL('https://adactinhotelapp.com/SearchHotel.php')
        // await expect(this.page).toHaveURL('https://adactinhotelapp.com/SearchHotel.php')   
    }

    async selectLocation(){
        await this.Location.selectOption({lable:'Sydney'})
    }

    async selectHotels(){
        await this.Hotels.selectOption({lable:'Hotel Creek'})
    }
    async selectRoomtype(){
        await this.RoomType.selectOption({lable:'Standard'})

    }
    async selectNumberofRooms(){
        await this.NumberofRooms.selectOption({lable:'1'})
    }

    async SelectCheckInDate(){
        await this.CheckInDate.fill('27/10/2026')
    }
    async SelectCheckOutDate(){
        await this.CheckOutDate.fill('28/10/2026')
    }
    async SelectAdultsperRoom(){
        await this.AdultsperRoom.selectOption({lable:'1'})
    }
    async selectChildrenperRoom(){
        await this.ChildrenperRoom.selectOption({lable:'1'})
    }

    async SelectSearch(){
        await this.Search.click()
    }



}