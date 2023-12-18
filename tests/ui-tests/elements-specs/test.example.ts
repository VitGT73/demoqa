import { Page, Locator } from '@playwright/test';

export class CheckboxPage {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;
  readonly resultMessage: Locator;

  readonly checkboxes: Record<string, Locator>; // Изменили тип на объект
  private checkboxIndexByName: Record<string, number>;
  private statusMessages: Record<string, string>;

  constructor(page: Page) {
    this.page = page;
    this.url = "/checkbox";
    this.headerText = "Check Box";
    this.header = page.locator("//div[@class='main-header']");
    // Expand and Collapse
    this.expandAllButton = page.getByRole('button', { name: 'Expand all' });
    this.collapseAllButton = page.getByRole('button', { name: 'Collapse all' });
    this.resultMessage = page.locator('#result');

    // Используем новый метод для создания локаторов чекбоксов
    this.checkboxes = this.createCheckboxes([
      'Home', 'Desktop', 'Notes', 'Commands', 'Documents', 'WorkSpace', 'React',
      'Angular', 'Veu', 'Office', 'Public', 'Private', 'Classified', 'General',
      'Downloads', 'Word File.doc', 'Excel File.doc'
    ]);

    // Создаем объект с соответствием индексов именам чек-боксов
    this.checkboxIndexByName = {};
    Object.entries(this.checkboxes).forEach(([checkboxName, locator], index) => {
      this.checkboxIndexByName[checkboxName] = index;
    });

    // Статусные сообщения для каждого чекбокса
    this.statusMessages = {
      'Home': 'home',
      'Desktop': 'desktop',
      'Notes': 'notes',
      'Commands': 'commands',
      'Documents': 'documents',
      'WorkSpace': 'workspace',
      'React': 'react',
      'Angular': 'angular',
      'Veu': 'veu',
      'Office': 'office',
      'Public': 'public',
      'Private': 'private',
      'Classified': 'classified',
      'General': 'general',
      'Downloads': 'downloads',
      'Word File.doc': 'wordFile',
      'Excel File.doc': 'excelFile',
    };
  }

  private createCheckboxes(checkboxNames: string[]): Record<string, Locator> {
    const checkboxes: Record<string, Locator> = {};

    checkboxNames.forEach((checkboxName) => {
      checkboxes[checkboxName] = this.page.locator('label').filter({ hasText: checkboxName });
    });

    return checkboxes;
  }

  getCheckboxByName(checkboxName: string): Locator | undefined {
    return this.checkboxes[checkboxName];
  }

  getCheckboxIndexByName(checkboxName: string): number | undefined {
    return this.checkboxIndexByName[checkboxName];
  }

  async clickCheckbox(checkboxName: string): Promise<void> {
    const checkbox = this.checkboxes[checkboxName];

    if (checkbox) {
      await checkbox.click();
      console.log(`Clicked on checkbox: ${checkboxName}`);
    } else {
      console.error('Checkbox not found');
    }
  }

  async assertCheckboxStatus(checkboxName: string, isChecked: boolean): Promise<void> {
    const statusMessage = this.statusMessages[checkboxName];
    if (statusMessage) {
      const textContent = await this.resultMessage.textContent();
      if (textContent !== null && ((isChecked && textContent.includes(statusMessage)) || (!isChecked && !textContent.includes(statusMessage)))) {
        console.log(`Checkbox status for ${checkboxName}: ${isChecked ? 'checked' : 'unchecked'}`);
      } else {
        console.error(`Unexpected checkbox status for ${checkboxName}`);
      }
    } else {
      console.error('Status message not found');
    }
  }


  async clickRandomCheckboxes(count: number): Promise<void> {
    const checkboxNames = Object.keys(this.checkboxes);

    // Выбираем случайные чекбоксы
    for (let i = 0; i < count; i++) {
      const randomCheckboxName = checkboxNames[Math.floor(Math.random() * checkboxNames.length)];
      await this.clickCheckbox(randomCheckboxName);
      await this.assertCheckboxStatus(randomCheckboxName, true);
    }
  }
}
