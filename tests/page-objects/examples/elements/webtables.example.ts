import { type Page, type Locator, expect } from '@playwright/test';
import { WebTableInterface } from '../../../interfaces/webtables.interface'

export class WebTablesExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;

  readonly user: WebTableInterface;

  // Registration Form
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly AgeInput: Locator;
  readonly SalaryInput: Locator;
  readonly DepartmentInput: Locator;
  readonly closeButton: Locator;
  readonly submitButton: Locator;
  readonly regFormTitle: Locator;

  // Main form
  readonly addButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly columnHeaderNames: string[];
  readonly columnHeaders: Record<string, Locator>;
  readonly rows: Locator;
  readonly rowGroup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "/webtables";
    this.headerText = "Web Tables";
    this.header = page.locator("//div[@class='main-header']");

    // Registration Form
    this.regFormTitle = page.getByTestId('Registration Form');
    this.firstNameInput = page.getByPlaceholder('First Name')
    this.lastNameInput = page.getByPlaceholder('Last Name')
    this.emailInput = page.getByPlaceholder('name@example.com')
    this.AgeInput = page.getByPlaceholder('Age')
    this.SalaryInput = page.getByPlaceholder('Salary')
    this.DepartmentInput = page.getByPlaceholder('Department')
    this.closeButton = page.getByRole('button', { name: 'Close' })
    this.submitButton = page.getByRole('button', { name: 'Submit' })

    // Main form
    this.searchInput = page.getByPlaceholder('Type to search');
    this.addButton = page.getByRole('button', { name: 'Add' })
    this.columnHeaderNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];
    this.columnHeaders = this.createColumnHeaders(this.columnHeaderNames);
    this.rows = this.page.getByRole('row')
    this.rowGroup = this.page.getByRole('rowgroup')

  }
  private createColumnHeaders(columnHeaderNames: string[]): Record<string, Locator> {
    const columnHeaders: Record<string, Locator> = {};

    columnHeaderNames.forEach((columnHeaderName) => {
      columnHeaders[columnHeaderName] = this.page.getByRole('columnheader', { name: columnHeaderName })
    });

    return columnHeaders;
  }


  async load() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  async assertPageHeader() {
    await expect(this.header).toHaveText(this.headerText);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }

}

export default WebTablesExample
