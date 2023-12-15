import { type Page, type Locator, expect } from "@playwright/test";
import { LoginExample } from "../examples/books/login.example";
import { BookStoreExample } from "../examples/books/bookstore.example";
import { ProfileExample } from "../examples/books/profile.example";
import { BookStoreAPIExample } from "../examples/books/bookstoreapi.example";

export class BooksSection {
  readonly page: Page;
  readonly rootItem: Locator;
  readonly loginItem: Locator;
  readonly profileItem: Locator;
  readonly bookStoreItem: Locator;
  readonly bookStoreAPIItem: Locator;
  readonly loginExample: LoginExample;
  readonly bookStoreExample: BookStoreExample;
  readonly profileExample: ProfileExample;
  readonly bookStoreAPIExample: BookStoreAPIExample;

  constructor(page: Page) {
    this.page = page;
    this.rootItem = page.getByText('Book Store Application')

    this.loginItem = page.getByRole('list').getByText('Login', { exact: true });
    this.profileItem = page.getByRole('list').getByText('Profile', { exact: true });
    this.bookStoreItem = page.getByRole('list').getByText('Book Store', { exact: true });
    this.bookStoreAPIItem = page.getByRole('list').getByText('Book Store API', { exact: true });
    this.loginExample = new LoginExample(page);
    this.bookStoreExample = new BookStoreExample(page);
    this.profileExample = new ProfileExample(page);
    this.bookStoreAPIExample = new BookStoreAPIExample(page);
  }

  async isOpen() {
    await expect(this.loginItem).toBeVisible();
    await expect(this.profileItem).toBeVisible();
    await expect(this.bookStoreItem).toBeVisible();
    await expect(this.bookStoreAPIItem).toBeVisible();

  }

  async isClose() {
    await expect(this.loginItem).toBeHidden();
    await expect(this.profileItem).toBeHidden();
    await expect(this.bookStoreItem).toBeHidden();
    await expect(this.bookStoreAPIItem).toBeHidden();
  }
}



export default BooksSection
