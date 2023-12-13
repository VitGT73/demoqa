import { type Page, type Locator, expect } from "@playwright/test";

export class InteractionsSection {
  readonly page: Page;
  readonly rootElement: Locator;
  readonly sortableElement: Locator;
  readonly selectableElement: Locator;
  readonly resizableElement: Locator;
  readonly droppableElement: Locator;
  readonly dragabbleElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rootElement = page.locator('span').filter({ hasText: 'Interactions' }).locator('div').first();
    // this.rootElement = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first()
    this.sortableElement = page.locator('li').filter({ hasText: 'Sortable' });
    this.selectableElement = page.locator('li').filter({ hasText: 'Selectable' });
    this.resizableElement = page.locator('li').filter({ hasText: 'Resizable' });
    this.droppableElement = page.locator('li').filter({ hasText: 'Droppable' });
    this.dragabbleElement = page.locator('li').filter({ hasText: 'Dragabble' });
  }

  async isOpen() {
    await expect(this.sortableElement).toBeVisible();
    await expect(this.selectableElement).toBeVisible();
    await expect(this.resizableElement).toBeVisible();
    await expect(this.droppableElement).toBeVisible();
    await expect(this.dragabbleElement).toBeVisible();
  }

  async isClose() {
    await expect(this.sortableElement).toBeHidden();
    await expect(this.selectableElement).toBeHidden();
    await expect(this.resizableElement).toBeHidden();
    await expect(this.droppableElement).toBeHidden();
    await expect(this.dragabbleElement).toBeHidden();
  }
}



export default InteractionsSection
