import { type Page, type Locator, expect } from '@playwright/test';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'
// interface State {
//   toggle: string;
//   expand: boolean;
// }
export class CheckboxExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly testLocator: Locator;


  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;

  private readonly toggleNames: string[]
  readonly toggles: Record<string, Locator> = {};
  private readonly togglesWithChild: Record<string, string[]>;

  readonly checkboxes: Record<string, Locator>;
  private checkboxIndexByName: Record<string, number>;
  private readonly checkBoxesWithChild: Record<string, string[]>;
  private statusMessages: Record<string, string>;


  readonly resultMessage: Locator


  constructor(page: Page) {
    this.page = page;
    this.url = "/checkbox";
    this.headerText = "Check Box";
    this.header = page.locator("//div[@class='main-header']");
    this.resultMessage = page.locator('#result')

    // Expand and Collapse
    this.expandAllButton = page.getByRole('button', { name: 'Expand all' });
    this.collapseAllButton = page.getByRole('button', { name: 'Collapse all' });


    //Check boxes
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

    // toggles
    this.toggles = this.createToggles([
      'Home', 'Desktop', 'Documents', 'WorkSpace', 'Office', 'Downloads'
    ])

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
    this.checkBoxesWithChild = {
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
    this.togglesWithChild = {
      'Home': ['Desktop', 'Documents', 'Downloads'],
      'Desktop': ['Notes', 'Commands'],
      'Documents': ['WorkSpace', 'Office'],
      'WorkSpace': ['React', 'Angular', 'Veu'],
      'Office': ['Public', 'Private', 'Classified', 'General'],
      'Downloads': ['Word File.doc', 'Excel File.doc'],
    };

  }  // End class Constructor

  private createCheckboxes(checkboxNames: string[]): Record<string, Locator> {
    const checkboxes: Record<string, Locator> = {};

    checkboxNames.forEach((checkboxName) => {
      checkboxes[checkboxName] = this.page.locator('label').filter({ hasText: checkboxName });
    });

    return checkboxes;
  }

  private createToggles(toggleNames: string[]): Record<string, Locator> {
    const toggles: Record<string, Locator> = {};

    toggleNames.forEach((toggleName) => {
      const checkbox = this.checkboxes[toggleName];
      if (checkbox) {
        toggles[toggleName] = checkbox.locator("xpath=/preceding-sibling::button");
      }
    });
    return toggles;
  }

// Методы страницы
  async load() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
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

  async clickRandomCheckboxes(count: number): Promise<void> {
    const checkboxNames = Object.keys(this.checkboxes);

    // Выбираем случайные чекбоксы
    for (let i = 0; i < count; i++) {
      const randomCheckboxName = checkboxNames[Math.floor(Math.random() * checkboxNames.length)];
      const randomCheckbox = this.checkboxes[randomCheckboxName];

      if (randomCheckbox) {
        await randomCheckbox.click();
        console.log(`Clicked on a random checkbox: ${randomCheckboxName}`);

      // // Пауза только в режиме отладки
      // if (!process.env.HEADLESS) {
      //   await this.page.waitForTimeout(500);
      // }

      } else {
        console.error('Random checkbox not found');
      }
    }
  }
// Проверки



  async assertPageHeader() {
    await expect(this.header).toHaveText(this.headerText);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }

    // Сравниваем фактические статусы чек-боксов и выведенные в результирующую строку
  // ВАЖНО: если часть чек-боксов скрыто, то функция работает не верно
  async assertMessageContainsSelectedStatuses(): Promise<void> {
    const selectedCheckboxes = Object.keys(this.checkboxes).filter(async (checkboxName) => {
      const checkbox = this.checkboxes[checkboxName];
      if (checkbox) {
        const isChecked = await checkbox.isChecked();
        return isChecked;
      }
      return false;
    });

    const textContent = await this.resultMessage.textContent();
    if (textContent !== null) {
      for (const selectedCheckbox of selectedCheckboxes) {
        const statusMessage = this.statusMessages[selectedCheckbox];
        if (statusMessage && textContent.includes(statusMessage)) {
          console.log(`Status for ${selectedCheckbox} is included in the message for selected checkboxes.`);
        } else {
          console.error(`Status for ${selectedCheckbox} is missing in the message for selected checkboxes.`);
        }
      }
    } else {
      console.error('Result message text content is null');
    }
  }

    // Проверяем, что если чек-бокс выбран, то строке сообщений, указано его имя
    async assertCheckboxStatus(checkboxName: string, isChecked: boolean): Promise<void> {
      const statusMessage = this.statusMessages[checkboxName];
      if (statusMessage) {
        const relatedCheckboxes = [...new Set([...this.checkBoxesWithChild[checkboxName], checkboxName])];

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

    async assertToggleCollapsed(toggleName: string) {
      await expect(this.toggles[toggleName].locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-collapsed/)
      // Пример использования
      // await checkboxPage.assertToggleCollapsed('Home');
    }

    async assertAllTogglesCollapsed() {
      await this.assertToggleCollapsed('Home');
    }

    async assertToggleExpanded(toggleName: string) {
      await expect(this.toggles[toggleName].locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
    }

    async assertAllTogglesExpanded() {
      for (const toggleName in this.toggles) {
        if (this.toggles.hasOwnProperty(toggleName)) {
          await this.assertToggleExpanded(toggleName);
        }
      }
    }

    async CheckVisibilityForToggle(toggleName: string, isOpening: boolean): Promise<boolean> {
      const childCheckboxNames = this.togglesWithChild[toggleName];
      const parentCheckbox = this.checkboxes[toggleName];
      const isParentVisible = await parentCheckbox.isVisible();
      if (!isParentVisible) {
        return false;
      }

      // Проверка видимости дочерних чек-боксов
      for (const childCheckboxName of childCheckboxNames) {
        const childCheckbox = this.checkboxes[childCheckboxName];
        const isChildVisible = await childCheckbox.isVisible();
        console.log(`У Чек-бокса ${childCheckboxName} видимость: ${isChildVisible}`)
        if (isChildVisible !== isOpening) {
          return false;
        }
      }
      // Все условия выполнились успешно
      return true;
    }

    async assertVisibilityCheckBoxes(toggleName: string, isOpening: boolean) {
      const res = await this.CheckVisibilityForToggle(toggleName, isOpening)
      console.log("Результат:  ", res)
      await expect(res).toBeTruthy()
    }


}


export default CheckboxExample
