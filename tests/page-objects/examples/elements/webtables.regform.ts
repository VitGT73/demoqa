import { type Page, type Locator, expect } from '@playwright/test';
import { WebTableInterface } from '../../../interfaces/webtables.interface'

export class WebTablesRegForm {
  readonly page: Page;

  readonly regForm: Locator;
  readonly outOfRegForm: Locator;
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
  readonly greenBorder: ;
  readonly redBorder: string;

  // readonly user: WebTableInterface;

  constructor(page: Page) {
    this.page = page;

    // Registration Form
    this.regForm = page.locator('.modal-content');
    this.outOfRegForm = page.getByRole('dialog');
    this.regFormTitleText = 'Registration Form';
    this.regFormTitle = page.getByTestId('registration-form-modal');
    this.firstNameInput = page.getByPlaceholder('First Name')
    this.lastNameInput = page.getByPlaceholder('Last Name')
    this.emailInput = page.getByPlaceholder('name@example.com')
    this.AgeInput = page.getByPlaceholder('Age')
    this.SalaryInput = page.getByPlaceholder('Salary')
    this.DepartmentInput = page.getByPlaceholder('Department')
    this.closeButton = page.getByRole('button', { name: 'Close' })
    this.submitButton = page.getByRole('button', { name: 'Submit' })

    this.greenBorder = '1px solid rgb(40, 167, 69)';
    this.redBorder = '1px solid rgb(220, 53, 69)';
    // чтобы получить эти значения нужно в DevTools в консоли выполнить:
    // getComputedStyle($('#salary')[0])["border"], где #salary - CSS-локатор (id) поля Salary


  }  // End Constructor

  async assertFormTitle() {
    await expect(this.regFormTitle).toHaveText(this.regFormTitleText);
  }

  async assertFormIsVisible(isOpen: boolean) {
    if (isOpen) {
      await expect(this.regForm).toBeVisible()
    } else {
      await expect(this.regForm).toBeHidden()
    }
  }

  async assertAgeInput() {
    await expect(this.regFormTitle).toHaveText(this.regFormTitleText);
  }

  async assertSalaryInput(isValid) {
    if(isValid){
      await expect(this.SalaryInput).toHaveCSS('border', this.greenBorder);
    }else{
      await expect(this.SalaryInput).toHaveCSS('border', this.redBorder);
    }
  }
}

export default WebTablesRegForm
