import { type Page, type Locator, expect } from '@playwright/test';
import { WebTablesRegForm } from './webtables.regform'
import { TableRow } from './webtables.tablerow'
import {
  WebTableInterface,
  parseSingleWebTableRow,
  parseWebTableRows,
  webTableContainsThisElement,
  countRowAllowedValues,
  headerNames,
  fieldNames,
} from '../../../interfaces/webtables.interface'
// import { assert } from 'console';

export class WebTablesExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly regForm: WebTablesRegForm;
  // readonly tableRows : TableRow[];

  // readonly user: WebTableInterface;

  // Main form
  // readonly dialog: Locator;
  readonly addButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  // readonly columnHeaderNames: string[];
  readonly columnHeaders: Record<string, Locator>;
  public tableRows: Record<number, TableRow>;
  readonly allDataRows: Locator;
  readonly gridCell: Locator;



  readonly previousButton: Locator;
  readonly nextButton: Locator;
  readonly pageNumberInput: Locator;
  private countRowsOnPageListBox: Locator;

  readonly pageTotalText: Locator;
  private _countRowsOnPage: number;

  // readonly closeButton: Locator;



  constructor(page: Page) {
    this.page = page;
    this.url = "/webtables";
    this.headerText = "Web Tables";
    this.header = page.locator("//div[@class='main-header']");
    this.regForm = new WebTablesRegForm(this.page);
    // Main form
    // this.dialog = page.getByRole('dialog');
    this.searchInput = page.getByPlaceholder('Type to search');
    this.addButton = page.getByRole('button', { name: 'Add' })


    // this.tableRows = page.getByRole('row') // включает заголовок
    this.allDataRows = page.getByRole('rowgroup') // не включает заголовок
    this.gridCell = page.getByRole('gridcell')



    this.pageNumberInput = page.getByLabel('jump to page');
    this.countRowsOnPageListBox = page.getByLabel('rows per page')
    this.pageTotalText = page.locator('.-totalPages')
    this.previousButton = page.getByRole('button', { name: 'Previous' })
    this.nextButton = page.getByRole('button', { name: 'Next' })


    // this.columnHeaderNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];
    this.columnHeaders = this.createColumnHeaders(headerNames);
    this._countRowsOnPage = 10;

    this.tableRows = this.createTableRows(this.countRowsOnPage);



  }  // End Constructor

  private createTableRows(countRows: number): Record<number, TableRow> {
    const rows: Record<number, TableRow> = {};

    for (let rowNumber = 1; rowNumber <= countRows; rowNumber++) {
      rows[rowNumber] = new TableRow(this.allDataRows.nth(rowNumber - 1))
    };

    return rows;
  }

  private createColumnHeaders(columnHeaderNames: string[]): Record<string, Locator> {
    const columnHeaders: Record<string, Locator> = {};

    columnHeaderNames.forEach((columnHeaderName) => {
      columnHeaders[columnHeaderName] = this.page.getByRole('columnheader', { name: columnHeaderName })
    });

    return columnHeaders;
  }

  // Setters

  private set countRowsOnPage(newCount: number) {
    // const allowedValues = [5, 10, 20, 25, 50, 100];

    expect(newCount, `Invalid value for countRowsOnPage. It must be greater than 0 and one of the allowed values: ${countRowAllowedValues.join(', ')}`).toBeGreaterThan(0);
    expect(countRowAllowedValues, `Invalid value for countRowsOnPage. It must be one of the allowed values: ${countRowAllowedValues.join(', ')}`).toContain(newCount);

    this._countRowsOnPage = newCount;
    this.tableRows = this.createTableRows(this.countRowsOnPage);
  }

  public async setCountRowsOnPage(newCount: number) {
    // const allowedValues = [5, 10, 20, 25, 50, 100];

    expect(newCount, `Invalid value for countRowsOnPage. It must be greater than 0 and one of the allowed values: ${countRowAllowedValues.join(', ')}`).toBeGreaterThan(0);
    expect(countRowAllowedValues, `Invalid value for countRowsOnPage. It must be one of the allowed values: ${countRowAllowedValues.join(', ')}`).toContain(newCount);

    // console.log('Count of row =', String(newCount))
    await this.countRowsOnPageListBox.selectOption(String(newCount))
    this.countRowsOnPage = newCount
  }


  // Getters
  public get countRowsOnPage() {
    return this._countRowsOnPage;
  }



  async load() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  async getAllRowLocators(): Promise<Locator[]> {
    const rows = await this.allDataRows.all()
    return rows
  }


  async getPersonsFromWebTable(): Promise<WebTableInterface[]> {
    await expect(this.allDataRows).toHaveCount(this.countRowsOnPage)
    const gridText = await this.allDataRows.allInnerTexts()
    const result = parseWebTableRows(gridText)
    return result;
  }



  async getPersonFromWebTableRow(row: Locator): Promise<WebTableInterface | null> {
    const rowTexts = await row.allInnerTexts();

    // Проверяем, что массив rowTexts не пустой
    if (rowTexts.length > 0) {
      const firstRowText = rowTexts[0]; // Получаем первый элемент массива

      return parseSingleWebTableRow(firstRowText);
    } else {
      console.error('Error: Empty rowTexts array.');
      return null; // Возвращаем null в случае ошибки или пустого массива
    }
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

  async assertAddedPersonInTheTable(addedPerson: WebTableInterface) {
    const person = addedPerson;
    const webTableData = await this.getPersonsFromWebTable()
    const result = webTableContainsThisElement(webTableData, person);
    await expect(result).toBeTruthy();
  }

  async assertCountRowOnPage(count: number){
    await expect(this.countRowsOnPage).toBe(count)
  }

  async assertCountAllDataRow(count: number){
    await expect(this.countRowsOnPage).toBe(count)
    await expect(this.allDataRows).toHaveCount(count)
  }


}

export default WebTablesExample
