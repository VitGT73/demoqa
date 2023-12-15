import { type Page, type Locator , expect } from '@playwright/test';
import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class TextBoxExample {
    readonly page: Page;
    readonly url: string;
    readonly headerText: string;
    readonly header: Locator;

    readonly fullnameInput:Locator;
    readonly emailInput :Locator;
    readonly currentAddressInput :Locator;
    readonly permanentAddressInput :Locator;
    readonly submintButton: Locator;

    readonly fullnameAnswer: Locator;
    readonly emailAnswer: Locator;  // ограничения смотри в конце этого файла
    readonly currentAddressAnswer: Locator;
    readonly permanentAddressAnswer: Locator;

    constructor(page: Page) {
      this.page = page;
      this.url = "/text-box";
      this.headerText = "Text Box";
      this.header = page.locator("//div[@class='main-header']");
      // this.header = page.getByText('Text Box').first();

      this.fullnameInput = page.getByPlaceholder('Full Name');
      this.emailInput = page.getByPlaceholder('name@example.com');
      this.currentAddressInput = page.getByPlaceholder('Current Address');
      this.permanentAddressInput = page.locator('#permanentAddress');
      this.submintButton = page.getByRole('button', { name: 'Submit' });

      this.fullnameAnswer = page.locator("//p[@id='name']");
      this.emailAnswer = page.locator("//p[@id='email']");
      this.currentAddressAnswer = page.locator("//p[@id='currentAddress']");
      this.permanentAddressAnswer = page.locator("//p[@id='permanentAddress']");

    }

    async load(){
      await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
    }

    async assertPageHeader() {
      await expect(this.header).toHaveText(this.headerText);
    }

    async assertPageUrl() {
      await expect(this.page).toHaveURL(this.url);
    }

    async FillForm(data: TextBoxInterface){
      this.fullnameInput.fill(data.fullName);
      this.emailInput.fill(data.email);
      this.currentAddressInput.fill(data.currentAddress);
      this.submintButton.fill(data.permanentAddress);
      }
   }

  export default TextBoxExample


//  "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",

//   Начало строки ^ и конец строки $:

// Ограничивают весь паттерн так, чтобы он соответствовал всей строке, а не только ее части.
// Группы с символами a-zA-Z0-9_\\-\\.:

// Первая группа: ([a-zA-Z0-9_\\-\\.]+) - позволяет использовать латинские буквы (в верхнем или нижнем регистре), цифры, подчеркивание, дефис и точку в локальной части email (часть до символа @).
// Вторая группа: ([a-zA-Z0-9_\\-\\.]+) - аналогична первой, но для доменной части email (часть после символа @ и до точки перед доменным уровнем).
// Третья группа: ([a-zA-Z]{2,5}) - ограничивает доменный уровень (часть после последней точки) от 2 до 5 латинских букв.
// Таким образом, введенный email должен соответствовать следующим условиям:

// Наличие символов в локальной и доменной частях email.
// Латинские буквы (в верхнем или нижнем регистре), цифры, подчеркивание, дефис и точка разрешены в обеих частях.
// Доменный уровень должен содержать от 2 до 5 латинских букв.
// Этот паттерн вполне стандартен для простой валидации email, но в реальных приложениях валидация email часто бывает сложнее из-за различных допустимых форматов.



// Регулярное выражение /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ предназначено для валидации email-адресов. Давайте разберем его по частям:
// ^: Обозначает начало строки.
// \w+: Означает один или более (за счет +) словесных символов. Это соответствует началу локальной части email-адреса (часть до символа @).
// ([\.-]?\w+)*: Группа, которая позволяет использовать точку (.) или дефис (-) с последующими одним или более словесными символами. Звездочка (*) после этой группы указывает, что эта группа может повторяться ноль или более раз.
// @: Обозначает символ @, который обязательно должен следовать после локальной части email-адреса.
// \w+: Аналогично первой группе, означает один или более словесных символов. Это соответствует началу доменной части email-адреса (часть после символа @ и до точки перед доменным уровнем).
// ([\.-]?\w+)*: Аналогичная группа, разрешающая точку (.) или дефис (-) перед доменным уровнем и последующие словесные символы.
// (\.\w{2,3})+: Группа, представляющая точку (.), за которой следуют от двух до трех словесных символов. Знак плюса (+) после этой группы позволяет ей повторяться один или более раз, что позволяет обрабатывать доменные уровни вида ".com", ".net" и т.д.
// $: Обозначает конец строки.
// Таким образом, данное регулярное выражение проверяет, что введенная строка начинается с локальной части email, за которой следует символ @, затем доменная часть с возможными точками и дефисами, и заканчивается двумя или тремя словесными символами после последней точки.
