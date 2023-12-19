import { type Page, type Locator, expect  } from '@playwright/test';

export class CheckboxPage {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;
  readonly resultMessage: Locator;

  private readonly toggleNames: string[]
  readonly toggles: Record<string, Locator> = {};

  readonly checkboxes: Record<string, Locator>;
  private checkboxIndexByName: Record<string, number>;
  private statusMessages: Record<string, string>;
  private readonly checkBoxesWithChild: Record<string, string[]>;
  private readonly togglesWithChild: Record<string, string[]>;

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

    this.toggles = this.createToggles([
      'Home', 'Desktop', 'Documents', 'WorkSpace', 'Office', 'Downloads'
    ])

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
  }

  private createCheckboxes(checkboxNames: string[]): Record<string, Locator> {
    const checkboxes: Record<string, Locator> = {};

    checkboxNames.forEach((checkboxName) => {
      checkboxes[checkboxName] = this.page.locator('label').filter({ hasText: checkboxName });
    });

    return checkboxes;
  }

  // Метод для создания toggles
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
      } else {
        console.error('Random checkbox not found');
      }
    }
  }

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

  async assertDesktopToggleChildsVisible() {
    console.error('Я внутри этой гребанной проверки')
    await expect(this.checkboxes["Desktop"]).toBeVisible();
    let text = await this.checkboxes["Desktop"].innerText()
    console.log(text)
    await expect(this.checkboxes["Notes"]).toBeVisible();
    text = await this.checkboxes["Notes"].innerText()
    console.log(text)
    await expect(this.checkboxes["Commands"]).toBeVisible();

    text = await this.checkboxes["Commands"].innerText();
    console.log(text)
  }

  async checkVisibilityForToggle(toggleName: string, isOpening: boolean): Promise<boolean> {
    const childCheckboxNames = this.togglesWithChild[toggleName];
    if (!childCheckboxNames) {
      console.error(`Toggle ${toggleName} not found in togglesWithChild`);
      return false;
    }

    const parentCheckbox = this.checkboxes[toggleName];
    if (!parentCheckbox) {
      console.error(`Checkbox ${toggleName} not found`);
      return false;
    }

    const isParentVisible = await parentCheckbox.isVisible();

    if (isOpening) {
      // Если открываем, все должны быть видимы
      if (!isParentVisible) {
        console.error(`Checkbox ${toggleName} should be visible when opening toggle`);
        return false;
      }
    } else {
      // Если закрываем, родительский видимый, дочерние скрыты
      if (!isParentVisible) {
        console.error(`Checkbox ${toggleName} should be visible when closing toggle`);
        return false;
      }
    }

    // Проверка видимости дочерних чек-боксов
    for (const childCheckboxName of childCheckboxNames) {
      const childCheckbox = this.checkboxes[childCheckboxName];
      if (!childCheckbox) {
        console.error(`Checkbox ${childCheckboxName} not found`);
        return false;
      }
      console.log(`Проверка видимости для ${childCheckboxName}`)
      const isChildVisible = await childCheckbox.isVisible();
      const shouldBeVisible = isOpening ? isChildVisible : !isChildVisible;

      if (!shouldBeVisible) {
        console.error(`Checkbox ${childCheckboxName} should be ${isOpening ? 'visible' : 'hidden'} when ${isOpening ? 'opening' : 'closing'} toggle`);
        return false;
      }
    }

    // Все условия выполнились успешно
    return true;
  }

  async myCheckVisibilityForToggle(toggleName: string, isOpening: boolean): Promise<boolean> {
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

  async assertVisibilityCheckBoxes(toggleName: string, isOpening: boolean){
    const res = await this.myCheckVisibilityForToggle(toggleName, isOpening)
    console.log("Результат:  ", res)
    await expect(res).toBeTruthy()
  }

}
