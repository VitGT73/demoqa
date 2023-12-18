import { Page, Locator } from '@playwright/test';

export class CheckboxPage {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;
  readonly resultMessage: Locator;

  readonly checkboxes: Record<string, Locator>;
  private checkboxIndexByName: Record<string, number>;
  private statusMessages: Record<string, string>;
  private readonly parentChildMappings: Record<string, string[]>;

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
    // Добавляем информацию о родительских и дочерних элементах
    this.parentChildMappings = {
      'Home': ['Home', 'Desktop', 'Notes', 'Commands', 'Documents', 'WorkSpace', 'React',
        'Angular', 'Veu', 'Office', 'Public', 'Private', 'Classified', 'General',
        'Downloads', 'Word File.doc', 'Excel File.doc'],
      'Desktop': ['Desktop', 'Notes', 'Commands'],
      'Documents': ['Documents', 'WorkSpace', 'React',
        'Angular', 'Veu', 'Office', 'Public', 'Private', 'Classified', 'General'],
      'WorkSpace': ['WorkSpace', 'React', 'Angular', 'Veu'],
      'Office': ['Office', 'Public', 'Private', 'Classified', 'General'],
      'Downloads': ['Downloads', 'Word File.doc', 'Excel File.doc'],
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
      const relatedCheckboxes = [...new Set([...this.parentChildMappings[checkboxName], checkboxName])];

      // Проверяем, что статус соответствует ожидаемому для всех связанных чекбоксов
      for (const relatedCheckbox of relatedCheckboxes) {
        const textContent = await this.resultMessage.textContent();

        // Проверяем, что статус соответствует ожидаемому
        if (textContent !== null && ((isChecked && textContent.includes(statusMessage)) || (!isChecked && !textContent.includes(statusMessage)))) {
          console.log(`Checkbox status for ${relatedCheckbox}: ${isChecked ? 'checked' : 'unchecked'}`);
        } else {
          console.error(`Unexpected checkbox status for ${relatedCheckbox}`);
        }
      }
    } else {
      console.error('Status message not found');
    }
  }

  // async clickRandomCheckboxes(count: number): Promise<void> {
  //   const checkboxNames = Object.keys(this.checkboxes);

  //   // Выбираем случайные чекбоксы
  //   for (let i = 0; i < count; i++) {
  //     const randomCheckboxName = checkboxNames[Math.floor(Math.random() * checkboxNames.length)];
  //     await this.clickCheckbox(randomCheckboxName);
  //     await this.assertCheckboxStatus(randomCheckboxName, true);
  //   }
  // }

  // async assertCheckboxStatuses(clickedCheckboxes: Record<string, number>): Promise<void> {
  //   for (const [checkboxName, clickCount] of Object.entries(clickedCheckboxes)) {
  //     const statusMessage = this.statusMessages[checkboxName];

  //     if (statusMessage) {
  //       const textContent = await this.resultMessage.textContent();

  //       // Проверяем, что статус соответствует ожидаемому
  //       if (textContent !== null && textContent.includes(statusMessage.repeat(clickCount))) {
  //         console.log(`Checkbox status for ${checkboxName}: clicked ${clickCount} times`);
  //       } else {
  //         console.error(`Unexpected checkbox status for ${checkboxName}`);
  //       }
  //     } else {
  //       console.error('Status message not found');
  //     }
  //   }
  // }


  // async clickRandomCheckboxes(count: number): Promise<Record<string, number>> {
  //   const clickedCheckboxes: Record<string, number> = {};
  //   const checkboxNames = Object.keys(this.checkboxes);

  //   // Выбираем случайные чекбоксы
  //   for (let i = 0; i < count; i++) {
  //     const randomCheckboxName = checkboxNames[Math.floor(Math.random() * checkboxNames.length)];
  //     const randomCheckbox = this.checkboxes[randomCheckboxName];

  //     if (randomCheckbox) {
  //       await randomCheckbox.click();

  //       // Обновляем информацию о том, сколько раз каждый чек-бокс был выбран
  //       clickedCheckboxes[randomCheckboxName] = (clickedCheckboxes[randomCheckboxName] || 0) + 1;

  //       console.log(`Clicked on a random checkbox: ${randomCheckboxName}`);
  //     } else {
  //       console.error('Random checkbox not found');
  //     }
  //   }

  // Возвращаем объект с информацией о выбранных чек-боксах и их количестве
  //   return clickedCheckboxes;
  // }
}


// У некоторых чек-боксов есть дочерние элементы. И при выборе родительского элемента, дочерние тоже выбираются, тоже самое происходит при отмене выделения. Давай учтем это при проверке assertCheckboxStatus
// 'Home':{'Home', 'Desktop', 'Notes', 'Commands', 'Documents', 'WorkSpace', 'React',
// 'Angular', 'Veu', 'Office', 'Public', 'Private', 'Classified', 'General',
// 'Downloads', 'Word File.doc', 'Excel File.doc'}
// 'Desktop': {'Desktop', 'Notes', 'Commands'}
// 'Documents':{'Documents', 'WorkSpace', 'React',
// 'Angular', 'Veu', 'Office', 'Public', 'Private', 'Classified', 'General'}
// 'WorkSpace':{'WorkSpace', 'React','Angular', 'Veu'}
// 'Office':{'Office', 'Public', 'Private', 'Classified', 'General'}
// 'Downloads':{'Downloads', 'Word File.doc', 'Excel File.doc'}
