import {test} from '../fixtures/customFixtures'
import { expect } from '@playwright/test'
import {registrationData} from '../testdata/registrationData.json'
let fullname=registrationData.fullname
let email=registrationData.email
let password=registrationData.password
test("Verify Registration Functionality with valid data",async({page,registrationPage})=>{
    await page.goto('/')
    await registrationPage.registerUser(fullname,email,password)
    //await expect(registrationPage.getWelcomeMessage(fullname)).toBeVisible({timeout:10000})
})
