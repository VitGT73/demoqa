import { type Page, type Locator, expect } from '@playwright/test';
import { WebTablesRegForm } from './webtables.regform'
import {
  WebTableInterface,
  parseSingleWebTableRow,
  parseWebTableRows,
} from '../../../interfaces/webtables.interface'
import { assert } from 'console';

export class WebTablesExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly regForm: WebTablesRegForm;

  // readonly user: WebTableInterface;

  // Main form
  // readonly dialog: Locator;
  readonly addButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly columnHeaderNames: string[];
  readonly columnHeaders: Record<string, Locator>;
  readonly tableRows: Locator;
  readonly rowGroup: Locator;
  readonly gridCell: Locator;


  // readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "/webtables";
    this.headerText = "Web Tables";
    this.header = page.locator("//div[@class='main-header']");

    // Main form
    // this.dialog = page.getByRole('dialog');
    this.searchInput = page.getByPlaceholder('Type to search');
    this.addButton = page.getByRole('button', { name: 'Add' })
    this.columnHeaderNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];
    this.columnHeaders = this.createColumnHeaders(this.columnHeaderNames);
    this.tableRows = page.getByRole('row') // включает заголовок
    this.rowGroup = page.getByRole('rowgroup') // не включает заголовок
    this.gridCell = page.getByRole('gridcell')

    this.regForm = new WebTablesRegForm(this.page);

    // this.closeButton = page.getByRole('button', { name: 'Close' })

  }  // End Constructor

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

  async getAllRowLocators(): Promise<Locator[]> {
    const rows = await this.rowGroup.all()
    return rows
  }


  async getDataArrayFromRows() {
    const tableData: WebTableInterface[] = [];
    const rowText = await this.rowGroup.allInnerTexts()
    const result = parseWebTableRows(rowText)
    console.log(result)

  }



  async parseAllRows(): Promise<WebTableInterface[]> {
    // const rows = await this.getAllRowLocators()
    const tableData: WebTableInterface[] = [];

    for (const row of await this.getAllRowLocators()) {
      // const cells = await this.gridCell.all()
      const rowText = await row.allInnerTexts()
      console.log(rowText)
      console.log('============')

      // Заготовка

    }


    return tableData;
  }




  async assertPageHeader() {
    await expect(this.header).toHaveText(this.headerText);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }

  async assertAddedPersonInTheTable(data: WebTableInterface) {
    await expect(this.page).toHaveURL("Исправь проверку");
  }

}

export default WebTablesExample
