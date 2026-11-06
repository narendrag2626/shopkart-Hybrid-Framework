import {test as base} from '@playwright/test'
import { RegistrationPage } from '../pages/RegistrationPage'
type MyFixtures={

    registrationPage:RegistrationPage
}
export const test=base.extend<MyFixtures>({
    registrationPage:async({page},use)=>{
        const registrationpage=new RegistrationPage(page)
        await use(registrationpage)

    }
})