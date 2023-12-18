import { Page, Locator } from '@playwright/test';

export class CheckboxPage {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;

  readonly checkboxes: Record<string, Locator>; // Изменили тип на объект
  private checkboxIndexByName: Record<string, number>;

  constructor(page: Page) {
    this.page = page;
    this.url = "/checkbox";
    this.headerText = "Check Box";
    this.header = page.locator("//div[@class='main-header']");
    // Expand and Collapse
    this.expandAllButton = page.getByRole('button', { name: 'Expand all' });
    this.collapseAllButton = page.getByRole('button', { name: 'Collapse all' });


    this.checkboxes = {
      'Home': page.locator('label').filter({ hasText: 'Home' }),
      'Desktop': page.locator('label').filter({ hasText: 'Desktop' }),
      'Notes': page.locator('label').filter({ hasText: 'Notes' }),
      'Commands': page.locator('label').filter({ hasText: 'Commands' }),
      'Documents': page.locator('label').filter({ hasText: 'Documents' }),
      'WorkSpace': page.locator('label').filter({ hasText: 'WorkSpace' }),
      'React': page.locator('label').filter({ hasText: 'React' }),
      'Angular': page.locator('label').filter({ hasText: 'Angular' }),
      'Veu': page.locator('label').filter({ hasText: 'Veu' }),
      'Office': page.locator('label').filter({ hasText: 'Office' }),
      'Public': page.locator('label').filter({ hasText: 'Public' }),
      'Private': page.locator('label').filter({ hasText: 'Private' }),
      'Classified': page.locator('label').filter({ hasText: 'Classified' }),
      'General': page.locator('label').filter({ hasText: 'General' }),
      'Downloads': page.locator('label').filter({ hasText: 'Downloads' }),
      'Word File.doc': page.locator('label').filter({ hasText: 'Word File.doc' }),
      'Excel File.doc': page.locator('label').filter({ hasText: 'Excel File.doc' }),
      // Добавьте другие локаторы по необходимости
    };

    // Создаем объект с соответствием индексов именам чек-боксов
    this.checkboxIndexByName = {};
    Object.entries(this.checkboxes).forEach(([checkboxName, locator], index) => {
      this.checkboxIndexByName[checkboxName] = index;
    });
  }

  getCheckboxByName(checkboxName: string): Locator | undefined {
    return this.checkboxes[checkboxName];
  }

  getCheckboxIndexByName(checkboxName: string): number | undefined {
    return this.checkboxIndexByName[checkboxName];
  }

  async clickRandomCheckboxes(count: number): Promise<void> {
    const checkboxNames = Object.keys(this.checkboxes);

    // Выбираем случайные чекбоксы
    for (let i = 0; i < count; i++) {
      const randomCheckboxName = checkboxNames[Math.floor(Math.random() * checkboxNames.length)];
      const randomCheckbox = this.checkboxes[randomCheckboxName];

      if (randomCheckbox) {
        await randomCheckbox.click();
        console.log(`Clicked on a random checkbox: ${randomCheckboxName}`);
      } else {
        console.error('Random checkbox not found');
      }
    }
  }
}
