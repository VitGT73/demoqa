import { type Page, type Locator, expect } from '@playwright/test';
import { WebTablesRegForm } from './webtables.regform'
import { TableRow } from './webtables.tablerow'
import {
  WebTableInterface,
  parseSingleWebTableRow,
  parseWebTableRows,
  webTableContainsThisElement,
} from '../../../interfaces/webtables.interface'
// import { assert } from 'console';

export class WebTablesExample {
  readonly page: Page;
  readonly url: string;

  public tableRows: Record<number, TableRow>;
  readonly allDataRows: Locator;
  readonly gridCell: Locator;



  readonly previousButton: Locator;
  readonly nextButton: Locator;
  readonly pageNumberInput: Locator;
  readonly countRowsOnPageListBox: Locator;
  readonly pageTotalText: Locator;
  public countRowsOnPage: number;

  // readonly closeButton: Locator;



  constructor(page: Page) {
    this.page = page;
    this.url = "/webtables";

    this.countRowsOnPage = 10;
    this.tableRows = this.createTableRows(this.countRowsOnPage);



  }  // End Constructor

  private createTableRows(countRows: number): Record<number, TableRow> {
    const rows: Record<number, TableRow> = {};

    for (let rowNumber = 1; rowNumber <= countRows; rowNumber++) {
      rows[rowNumber] = new TableRow(this.allDataRows.nth(rowNumber - 1))
    };

    return rows;
  }


}

export default WebTablesExample
