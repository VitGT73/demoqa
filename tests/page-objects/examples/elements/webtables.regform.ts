import { type Page, type Locator, expect } from '@playwright/test';
import { WebTableInterface } from '../../../interfaces/webtables.interface'

export class WebTablesRegForm {
  readonly page: Page;
  readonly regFormTitle: Locator;
  readonly regFormTitleText: string;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly AgeInput: Locator;
  readonly SalaryInput: Locator;
  readonly DepartmentInput: Locator;
  readonly closeButton: Locator;
  readonly submitButton: Locator;

  // readonly user: WebTableInterface;

  constructor(page: Page) {
    this.page = page;

    // Registration Form
    this.regFormTitleText = 'Registration Form';
    this.regFormTitle = page.getByTestId('Registration Form');
    this.firstNameInput = page.getByPlaceholder('First Name')
    this.lastNameInput = page.getByPlaceholder('Last Name')
    this.emailInput = page.getByPlaceholder('name@example.com')
    this.AgeInput = page.getByPlaceholder('Age')
    this.SalaryInput = page.getByPlaceholder('Salary')
    this.DepartmentInput = page.getByPlaceholder('Department')
    this.closeButton = page.getByRole('button', { name: 'Close' })
    this.submitButton = page.getByRole('button', { name: 'Submit' })


  }  // End Constructor

  async assertPageHeader() {
    await expect(this.regFormTitle).toHaveText(this.regFormTitleText);
  }


}

export default WebTablesRegForm
