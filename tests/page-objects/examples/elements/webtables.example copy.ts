// import { type Page, type Locator, expect } from '@playwright/test';
// import { WebTablesRegForm } from './webtables.regform'
// import { AnyRow, DataRow } from './webtables.tablerow'
// import {
//   WebTableInterface,
//   parseSingleWebTableRow,
//   parseWebTableRows,
//   webTableContainsThisElement,
//   countRowAllowedValues,
//   headerNames,

// } from '../../../interfaces/webtables.interface'
// // import { assert } from 'console';

// export class WebTablesExample {
//   readonly page: Page;
//   readonly url: string;
//   readonly headerText: string;
//   readonly $header: Locator;
//   readonly regForm: WebTablesRegForm;
//   // readonly tableRows : TableRow[];

//   // readonly user: WebTableInterface;

//   // Main form
//   // readonly dialog: Locator;
//   readonly $addButton: Locator;
//   readonly $searchInput: Locator;
//   readonly $searchButton: Locator;
//   // readonly columnHeaderNames: string[];
//   readonly columnHeaders: Record<string, Locator>;
//   public allRowsList: Record<number, AnyRow>;
//   public dataRowsList: Record<number, DataRow>;
//   readonly $allRows: Locator;
//   readonly $dataRows: Locator;
//   readonly $gridCell: Locator;



//   readonly $previousButton: Locator;
//   readonly $nextButton: Locator;
//   readonly $pageNumberInput: Locator;
//   readonly $countRowsOnPageListBox: Locator;

//   readonly $pageTotalText: Locator;
//   // private countRowsOnPage: number;

//   // readonly closeButton: Locator;



//   constructor(page: Page) {
//     this.page = page;
//     this.url = "/webtables";
//     this.headerText = "Web Tables";
//     this.$header = page.locator("//div[@class='main-header']");
//     this.regForm = new WebTablesRegForm(this.page);
//     // Main form
//     // this.dialog = page.getByRole('dialog');
//     this.$searchInput = page.getByPlaceholder('Type to search');
//     this.$addButton = page.getByRole('button', { name: 'Add' })


//     // this.tableRows = page.getByRole('row') // включает заголовок
//     this.$allRows = page.getByRole('rowgroup') // не включает заголовок
//     this.$dataRows = page
//       .getByRole('rowgroup')
//       .filter({ has: page.getByRole('gridcell', { name: 'Edit Delete' }) }) // строки с данными
//     this.$gridCell = page.getByRole('gridcell')

//     this.$pageNumberInput = page.getByLabel('jump to page');
//     this.$countRowsOnPageListBox = page.getByLabel('rows per page')
//     this.$pageTotalText = page.locator('.-totalPages')
//     this.$previousButton = page.getByRole('button', { name: 'Previous' })
//     this.$nextButton = page.getByRole('button', { name: 'Next' })


//     // this.columnHeaderNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];
//     this.columnHeaders = this.createColumnHeaders(headerNames);
//     // this.countRowsOnPage = 10;
//     this.allRowsList =this.reNewAllRows()
//     this.dataRowsList =this.reNewDataRows()

//     // this.initialize();
//     // this.allRows = await this.reNewAllRows();



//   }  // End Constructor
//   // private async initialize(): Promise<void> {
//   //   this.allRows = await this.reNewAllRows();
//   //   this.dataRows = await this.reNewDataRows();
//   // }


//   public reNewAllRows(): Record<number, AnyRow> {
//     const rows: Record<number, AnyRow> = {};
//     // const countRows = await this.getCountRowsOnPage()
//     const countRows = 10
//     for (let rowNumber = 1; rowNumber <= countRows; rowNumber++) {
//       rows[rowNumber] = new AnyRow(this.$allRows.nth(rowNumber - 1))
//     };

//     return rows;
//   }

//   // public async reNewDataRows(): Promise<Record<number, DataRow>> {
//   public reNewDataRows(): Record<number, DataRow> {
//     const rows: Record<number, DataRow> = {};
//     // const countRows = await this.getCountRowsOnPage()
//     const countRows = 4

//     for (let rowNumber = 1; rowNumber <= countRows; rowNumber++) {
//       rows[rowNumber] = new DataRow(this.$dataRows.nth(rowNumber - 1))
//     };

//     return rows;
//   }

//   private async getCountRowsOnPage(): Promise<number> {
//     // const count = 10
//     // const count = await this.$countRowsOnPageListBox.inputValue()
//     await expect(this.$countRowsOnPageListBox).toHaveValue(String(10))
//     const count = await this.page.getByLabel('rows per page').inputValue();
//     return Number(count);
//   }

//   private createColumnHeaders(columnHeaderNames: string[]): Record<string, Locator> {
//     const columnHeaders: Record<string, Locator> = {};

//     columnHeaderNames.forEach((columnHeaderName) => {
//       columnHeaders[columnHeaderName] = this.page.getByRole('columnheader', { name: columnHeaderName })
//     });

//     return columnHeaders;
//   }

//   public async setCountRowsOnPage(newCount: number) {
//     // const allowedValues = [5, 10, 20, 25, 50, 100];

//     expect(newCount, `Invalid value for countRowsOnPage. It must be greater than 0 and one of the allowed values: ${countRowAllowedValues.join(', ')}`).toBeGreaterThan(0);
//     expect(countRowAllowedValues, `Invalid value for countRowsOnPage. It must be one of the allowed values: ${countRowAllowedValues.join(', ')}`).toContain(newCount);

//     // console.log('Count of row =', String(newCount))
//     await this.$countRowsOnPageListBox.selectOption(String(newCount))
//   }



//   async load() {
//     await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
//   }



//   async getPersonsFromWebTable(): Promise<WebTableInterface[]> {
//     const count = await this.getCountRowsOnPage()
//     await expect(this.$allRows).toHaveCount(count)
//     const gridText = await this.$allRows.allInnerTexts()
//     const result = parseWebTableRows(gridText)
//     return result;
//   }

//   async getPersonFromWebTableRow(row: Locator): Promise<WebTableInterface | null> {
//     const rowTexts = await row.allInnerTexts();

//     // Проверяем, что массив rowTexts не пустой
//     if (rowTexts.length > 0) {
//       const firstRowText = rowTexts[0]; // Получаем первый элемент массива

//       return parseSingleWebTableRow(firstRowText);
//     } else {
//       console.error('Error: Empty rowTexts array.');
//       return null; // Возвращаем null в случае ошибки или пустого массива
//     }
//   }


//   // async getAllRowLocators(): Promise<Locator[]> {
//   //   const rows = await this.$allRows.all()
//   //   return rows
//   // }
//   // async parseAllRows(): Promise<WebTableInterface[]> {
//   //   // const rows = await this.getAllRowLocators()
//   //   const tableData: WebTableInterface[] = [];

//   //   for (const row of await this.getAllRowLocators()) {
//   //     // const cells = await this.gridCell.all()
//   //     const rowText = await row.allInnerTexts()
//   //     console.log(rowText)
//   //     console.log('============')

//   //     // Заготовка

//   //   }
//   //   return tableData;
//   // }

//   async addOnePerson(person:WebTableInterface){
//     await this.$addButton.click()
//     await this.regForm.FillForm(person);
//   }

//   async assertPageHeader() {
//     await expect(this.$header).toHaveText(this.headerText);
//   }

//   async assertPageUrl() {
//     await expect(this.page).toHaveURL(this.url);
//   }

//   async assertAddedPersonInTheTable(addedPerson: WebTableInterface) {
//     const person = addedPerson;
//     const webTableData = await this.getPersonsFromWebTable()
//     const result = webTableContainsThisElement(webTableData, person);
//     await expect(result).toBeTruthy();
//   }

//   async assertCountAllRowOnPage(count: number) {
//     await expect(this.$countRowsOnPageListBox).toHaveValue(String(count))
//   }


//   async assertCountAllDataRow(count: number) {
//     await expect(this.$countRowsOnPageListBox).toHaveValue(String(count))
//     await expect(this.$allRows).toHaveCount(count)
//   }


// }

// export default WebTablesExample
