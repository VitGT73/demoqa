import { type Page, type Locator, expect } from '@playwright/test';
import { DataRow, AnyRow } from './webtables.tablerow'

// import { assert } from 'console';

export class WebTablesExample {
  readonly page: Page;
  readonly url: string;


  readonly anyRows: Locator;
  readonly dataRows: Locator;



  constructor(page: Page) {
    this.page = page;
    this.url = "/webtables";

    // this.tableRows = page.getByRole('row') // включает заголовок
    this.anyRows = page.locator('.rows') // не включает заголовок

    this.dataRows = page.locator('.datarows')

  }  // End Constructor

}
