import { type Page, type Locator, expect } from "@playwright/test";

export class BooksSection {
  readonly page: Page;
  readonly rootItem: Locator;
  readonly loginItem: Locator;
  readonly profileItem:Locator;
  readonly bookStoreItem: Locator;
  readonly bookStoreAPI: Locator;


  constructor(page: Page) {
    this.page = page;
    this.rootItem = page.getByText('Book Store Application')

    this.loginItem= page.getByRole('list').getByText('Login', { exact: true });
    this.profileItem= page.getByRole('list').getByText('Profile', { exact: true });
    this.bookStoreItem= page.getByRole('list').getByText('Book Store', { exact: true });
    this.bookStoreAPI= page.getByRole('list').getByText('Book Store API', { exact: true });

  }


  async isOpen() {
    await expect(this.loginItem).toBeVisible();
    await expect(this.profileItem).toBeVisible();
    await expect(this.bookStoreItem).toBeVisible();
    await expect(this.bookStoreAPI).toBeVisible();

  }

  async isClose() {
    await expect(this.loginItem).toBeHidden();
    await expect(this.profileItem).toBeHidden();
    await expect(this.bookStoreItem).toBeHidden();
    await expect(this.bookStoreAPI).toBeHidden();
  }
}



export default BooksSection
