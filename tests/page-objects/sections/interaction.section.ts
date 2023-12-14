import { type Page, type Locator, expect } from "@playwright/test";

export class InteractionsSection {
  readonly page: Page;
  readonly rootItem: Locator;
  readonly sortableItem: Locator;
  readonly selectableItem: Locator;
  readonly resizableItem: Locator;
  readonly droppableItem: Locator;
  readonly dragabbleItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rootItem = page.locator('span').filter({ hasText: 'Interactions' }).locator('div').first();
    this.sortableItem = page.locator('li').filter({ hasText: 'Sortable' });
    this.selectableItem = page.locator('li').filter({ hasText: 'Selectable' });
    this.resizableItem = page.locator('li').filter({ hasText: 'Resizable' });
    this.droppableItem = page.locator('li').filter({ hasText: 'Droppable' });
    this.dragabbleItem = page.locator('li').filter({ hasText: 'Dragabble' });
  }

  async isOpen() {
    await expect(this.sortableItem).toBeVisible();
    await expect(this.selectableItem).toBeVisible();
    await expect(this.resizableItem).toBeVisible();
    await expect(this.droppableItem).toBeVisible();
    await expect(this.dragabbleItem).toBeVisible();
  }

  async isClose() {
    await expect(this.sortableItem).toBeHidden();
    await expect(this.selectableItem).toBeHidden();
    await expect(this.resizableItem).toBeHidden();
    await expect(this.droppableItem).toBeHidden();
    await expect(this.dragabbleItem).toBeHidden();
  }
}



export default InteractionsSection
