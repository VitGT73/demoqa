import { type Page, type Locator, expect } from '@playwright/test';
import { WebTableInterface, noValidWebTableInterface } from '../../../interfaces/webtables.interface'

export class WebTablesRegForm {
  readonly page: Page;

  readonly dialog: Locator;
  readonly outOfRegForm: Locator;
  readonly regFormTitle: Locator;
  readonly regFormTitleText: string;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator; //
  readonly ageInput: Locator;   //^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$
  readonly salaryInput: Locator;
  readonly departmentInput: Locator;
  readonly closeButton: Locator;
  readonly submitButton: Locator;
  readonly greenBorder: string;
  readonly redBorder: string; // default color "1px solid rgb(128, 189, 255)"

  constructor(page: Page) {
    this.page = page;

    // Registration Form
    this.dialog = page.locator('.modal-content');
    this.regFormTitleText = 'Registration Form';
    this.regFormTitle = page.getByTestId('registration-form-modal');
    this.firstNameInput = page.getByPlaceholder('First Name')
    this.lastNameInput = page.getByPlaceholder('Last Name')
    this.emailInput = page.getByPlaceholder('name@example.com')
    this.ageInput = page.getByPlaceholder('Age')
    this.salaryInput = page.getByPlaceholder('Salary')
    this.departmentInput = page.getByPlaceholder('Department')
    this.closeButton = page.getByRole('button', { name: 'Close' })
    this.submitButton = page.getByRole('button', { name: 'Submit' })

    this.greenBorder = '1px solid rgb(40, 167, 69)';
    this.redBorder = '1px solid rgb(220, 53, 69)';
    // чтобы получить эти значения нужно в DevTools в консоли выполнить:
    // getComputedStyle($('#salary')[0])["border"], где #salary - CSS-локатор (id) поля Salary


  }  // End Constructor

  async FillForm(data: WebTableInterface | noValidWebTableInterface) {
    await this.firstNameInput.fill(data.firstName)
    await this.lastNameInput.fill(data.lastName)
    await this.emailInput.fill(data.email)
    await this.ageInput.fill(String(data.age))
    await this.salaryInput.fill(String(data.salary))
    await this.departmentInput.fill(data.department)
    await this.submitButton.click()
  }

  async clickOutOfForm() {
    // this.regForm.click({ position: { x: 805, y: 445 }})
    if (this.dialog) {
      const boundingBox = await this.dialog.boundingBox();

      if (boundingBox) {
        // Кликните за пределами bounding box элемента
        const x = boundingBox.x + boundingBox.width + 10; // например, справа от элемента
        const y = boundingBox.y + boundingBox.height + 10; // и немного ниже элемента
        // console.log(boundingBox.x,boundingBox.y)
        // console.log(boundingBox.width,boundingBox.height)
        // console.log(boundingBox.x + boundingBox.width, boundingBox.y + boundingBox.height)

        await this.page.mouse.click(x, y);
      }
    }
  }

  // Проверки

  async assertFormTitle(isOpen: boolean) {
    if (isOpen) {
      await expect(this.regFormTitle).toHaveText(this.regFormTitleText);
    } else {
      await expect(this.regFormTitle).not.toHaveText(this.regFormTitleText);
    }

  }

  async assertFormIsVisible(isOpen: boolean) {
    if (isOpen) {
      await expect(this.dialog).toBeVisible()
    } else {
      await expect(this.dialog).toBeHidden()
    }
  }

  async assertFirstNameInput(isValid: boolean) {
    if (isValid) {
      const isVisible = await this.firstNameInput.isVisible()
      if (isVisible) { await expect(this.firstNameInput).toHaveCSS('border', this.greenBorder); }
    } else {
      await expect(this.firstNameInput).toHaveCSS('border', this.redBorder);
    }
  }

  async assertLastNameInput(isValid: boolean) {
    if (isValid) {
      await expect(this.lastNameInput).toHaveCSS('border', this.greenBorder);
    } else {
      await expect(this.lastNameInput).toHaveCSS('border', this.redBorder);
    }
  }

  async assertEmailInput(isValid: boolean) {
    if (isValid) {
      await expect(this.emailInput).toHaveCSS('border', this.greenBorder);
    } else {
      await expect(this.emailInput).toHaveCSS('border', this.redBorder);
    }
  }

  async assertAgeInput(isValid: boolean) {
    if (isValid) {
      await expect(this.ageInput).toHaveCSS('border', this.greenBorder);
    } else {
      await expect(this.ageInput).toHaveCSS('border', this.redBorder);
    }
  }

  async assertSalaryInput(isValid: boolean) {
    if (isValid) {
      await expect(this.salaryInput).toHaveCSS('border', this.greenBorder);
    } else {
      await expect(this.salaryInput).toHaveCSS('border', this.redBorder);
    }
  }

  async assertDepartmentInput(isValid: boolean) {
    if (isValid) {
      await expect(this.departmentInput).toHaveCSS('border', this.greenBorder);
    } else {
      await expect(this.departmentInput).toHaveCSS('border', this.redBorder);
    }
  }

  async assertAllFieldHasRedBorder() {
    await this.assertFirstNameInput(false);
    await this.assertLastNameInput(false);
    await this.assertEmailInput(false);
    await this.assertAgeInput(false);
    await this.assertSalaryInput(false);
    await this.assertDepartmentInput(false);
  }


  async assertOneFieldRedOtherGreen(parameter: string) {
    // Только одна проверка выполняется с параметром false, остальные с true
    const isTrueForParameter = (param: string): boolean => param === parameter;

    await this.assertFirstNameInput(!isTrueForParameter('First Name'));
    await this.assertLastNameInput(!isTrueForParameter('Last Name'));
    await this.assertEmailInput(!isTrueForParameter('Email'));
    await this.assertAgeInput(!isTrueForParameter('Age'));
    await this.assertSalaryInput(!isTrueForParameter('Salary'));
    await this.assertDepartmentInput(!isTrueForParameter('Department'));
  }

  async assertAddUserNoValidData(fieldName: string) {

    // ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department'];
    switch (fieldName) {
      case 'First Name':
        await expect(this.firstNameInput).toHaveCSS('border', this.redBorder)
        break;
      case 'Last Name':
        await expect(this.lastNameInput).toHaveCSS('border', this.redBorder)
        break;
      case 'Email':
        await expect(this.emailInput).toHaveCSS('border', this.redBorder)
        break;
      case 'Age':
        await expect(this.ageInput).toHaveCSS('border', this.redBorder)
        break;
      case 'Salary':
        await expect(this.salaryInput).toHaveCSS('border', this.redBorder)
        break;
      case 'Department':
        await expect(this.departmentInput).toHaveCSS('border', this.redBorder)
        break;
      default:
        await expect(fieldName).toBeTruthy();
    }
  }

}

export default WebTablesRegForm
