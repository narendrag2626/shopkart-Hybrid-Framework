import {Page,Locator} from '@playwright/test'
export class RegistrationPage{
    page:Page
    downButton:Locator
    signUpLink:Locator
    signUpButton:Locator
    regfullNameInput:Locator
    regemailAddressInput:Locator
    regpasswordInput:Locator
    createAccountButton:Locator

    constructor(page:Page)
    {
        this.page=page
        this.downButton=this.page.locator(".lucide.lucide-chevron-down.w-3.h-3")
        this.signUpLink=this.page.locator(".text-sm.font-bold.text-flipkart-blue")
        this.signUpButton=this.page.getByRole('button',{name:"Sign Up"})
        this.regfullNameInput=this.page.getByPlaceholder("Enter your full name")
        this.regemailAddressInput=this.page.getByPlaceholder("Enter your email")
        this.regpasswordInput=this.page.getByPlaceholder("Create a password (min 6 chars)")
        this.createAccountButton=this.page.getByText("Create Account")
    }
    async registerUser(fullname:string,email:string,password:string):Promise<void>
    {
        await this.downButton.click()
        await this.signUpLink.click()
        await this.signUpButton.click()
        await this.regfullNameInput.fill(fullname)
        await this.regemailAddressInput.fill(email)
        await this.regpasswordInput.fill(password)
        await this.createAccountButton.click()
    }
    //getWelcomeMessage(fullname: string) {
   // return this.page.getByRole('button').filter({ hasText: fullname })

}
