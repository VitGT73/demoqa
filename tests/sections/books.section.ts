import { type Page, type Locator, expect } from "@playwright/test";

export class BooksSection {
  readonly page: Page;
  readonly rootElement: Locator;
  readonly loginElement: Locator;
  readonly profileElement:Locator;
  readonly bookStoreElement: Locator;
  readonly bookStoreAPI: Locator;


  constructor(page: Page) {
    this.page = page;
    this.rootElement = page.getByText('Book Store Application')
    // this.rootElement = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first()

    this.loginElement= page.getByRole('list').getByText('Login', { exact: true });
    this.profileElement= page.getByRole('list').getByText('Profile', { exact: true });
    this.bookStoreElement= page.getByRole('list').getByText('Book Store', { exact: true });
    this.bookStoreAPI= page.getByRole('list').getByText('Book Store API', { exact: true });

  }


  async isOpen() {
    await expect(this.loginElement).toBeVisible();
    await expect(this.profileElement).toBeVisible();
    await expect(this.bookStoreElement).toBeVisible();
    await expect(this.bookStoreAPI).toBeVisible();

  }

  async isClose() {
    await expect(this.loginElement).toBeHidden();
    await expect(this.profileElement).toBeHidden();
    await expect(this.bookStoreElement).toBeHidden();
    await expect(this.bookStoreAPI).toBeHidden();
  }
}



export default BooksSection
