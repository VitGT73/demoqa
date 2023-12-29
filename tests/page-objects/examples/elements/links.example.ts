import { type Page, type Locator, expect } from '@playwright/test';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class LinksExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly newPageURL: string;
  readonly header: Locator;
  private readonly $homeLink: Locator;
  private readonly $dynamicHomeLink: Locator;
  readonly $createdLink: Locator;
  readonly $noContentLink: Locator;
  readonly $movedLink: Locator;
  readonly $badRequestLink: Locator;
  readonly $unauthorizedLink: Locator;
  readonly $forbiddenLink: Locator;
  readonly $notFoundLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "/links";
    this.headerText = "Links";
    this.header = page.locator("//div[@class='main-header']");
    this.newPageURL = 'https://demoqa.com/'
    this.$homeLink = page.getByRole('link', { name: 'Home', exact: true });
    this.$dynamicHomeLink = page.getByTestId('dynamicLink');
    this.$createdLink = page.getByRole('link', { name: 'Created' })
    this.$noContentLink = page.getByRole('link', { name: 'No Content' })
    this.$movedLink = page.getByRole('link', { name: 'Moved' })
    this.$badRequestLink = page.getByRole('link', { name: 'Bad Request' })
    this.$unauthorizedLink = page.getByRole('link', { name: 'Unauthorized' })
    this.$forbiddenLink = page.getByRole('link', { name: 'Forbidden' })
    this.$notFoundLink = page.getByRole('link', { name: 'Not Found' })
  }

  //  const page1Promise = page.waitForEvent('popup');
  //  await page.getByRole('link', { name: 'Home', exact: true }).click();
  //  const page1 = await page1Promise;
  //  const page2Promise = page.waitForEvent('popup');
  //  await page.getByRole('link', { name: 'HomekoP5t' }).click();
  //  const page2 = await page2Promise;
  //  await page.getByRole('link', { name: 'Created' }).click();
  //  await page.getByRole('link', { name: 'No Content' }).click();
  //  await page.getByRole('link', { name: 'Moved' }).click();
  //  await page.getByRole('link', { name: 'Bad Request' }).click();
  //  await page.getByRole('link', { name: 'Unauthorized' }).click();
  //  await page.getByRole('link', { name: 'Forbidden' }).click();
  //  await page.getByRole('link', { name: 'Not Found' }).click();


  async load() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  async clickHomeButton() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.$homeLink.click();
    const newPage = await page1Promise;
    return newPage
  }

  async clickDynamicHomeButton() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.$dynamicHomeLink.click();
    const newPage = await page1Promise;
    return newPage
  }

  async assertHomeLinkIsOpen(page: Page){
    await expect(page).toHaveURL(this.newPageURL)
  }

  async assertPageHeader() {
    await expect(this.header).toHaveText(this.headerText);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }

}

export default LinksExample
