import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
export class RegisterPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly dobInput: Locator;
  readonly streetInput: Locator;
  readonly postalCodeInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly countrySelect: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly registerSubmitButton: Locator;       
    constructor(page: Page) {   
    super(page);
    this.firstNameInput = page.locator('[data-test="first-name"]');
    this.lastNameInput = page.locator('[data-test="last-name"]');
    this.dobInput = page.locator('[data-test="dob"]');
    this.streetInput = page.locator('[data-test="street"]');
    this.postalCodeInput = page.locator('[data-test="postal_code"]');
    this.cityInput = page.locator('[data-test="city"]');
    this.stateInput = page.locator('[data-test="state"]');
    this.countrySelect = page.locator('[data-test="country"]');
    this.phoneInput = page.locator('[data-test="phone"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.registerSubmitButton = page.locator('[data-test="register-submit"]');  
    }       

    async navigateToRegister() {    
        await this.navigate('/auth/register');
    }       

    async register(userData: {
        firstName: string;
        lastName: string;
        dob: string;
        street: string;
        postalCode: string;
        city: string;
        state: string;
        country: string;
        phone: string;
        email: string;
        password: string;
    }) {
        await this.firstNameInput.fill(userData.firstName);
        await this.lastNameInput.fill(userData.lastName);  
        await this.dobInput.fill(userData.dob);
        await this.streetInput.fill(userData.street);
        await this.postalCodeInput.fill(userData.postalCode);
        await this.cityInput.fill(userData.city);
        await this.stateInput.fill(userData.state);
        await this.countrySelect.selectOption(userData.country);
        await this.phoneInput.fill(userData.phone);
        await this.emailInput.fill(userData.email);
        await this.passwordInput.fill(userData.password);
        await this.registerSubmitButton.click();
    }
}