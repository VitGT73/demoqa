import {
  WebTableInterface,
  noValidWebTableInterface,
  headerNames,
  fieldNames,
  countRowAllowedValues,
} from '../../interfaces/webtables.interface';

import { faker } from '@faker-js/faker';


export class WebTablesRandomData {

  // public readonly headerNames: string[];
  // public readonly fieldNames: string[];
  public readonly eMails: string[];
  public readonly badEmails: string[];
  // public readonly countRowAllowedValues: number[];

  constructor() {
    // this.headerNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];
    // this.fieldNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department'];
    // this.countRowAllowedValues = [5, 10, 20, 25, 50, 100];

    this.eMails = [
      "user@example.com",
      "user123@domain.test",
      "user_name@sub.domain.specs",
      "user123@sub_domain.domain.org",
      "user.name@domain.co.uk",
      "user@exa_mple.com",
    ];
    this.badEmails = [
      // ^([a-zA-Z0-9_\-\.]+): Начало строки, за которым следует одна или более букв, цифр,
      // подчеркиваний, дефисов или точек.
      "",
      "@example.com",
      ".user@example.com",
      "us/er@mail.ru",
      "петя@ya.ru",
      // @: Символ "@"
      "negative.email.org",
      // ([a-zA-Z0-9_\-\.]+): Одна или более букв, цифр, подчеркиваний,
      // дефисов или точек для имени домена.
      "user@.com",
      "user@_.comm",
      "user@..comm",
      "user@.example.com",
      "user@почта.com",
      // \.: Символ точки ".".
      "user@example",
      "user123@localhost",
      // ([a-zA-Z]{2,5})$: Две до пяти букв для доменного имени, завершающих строку.
      "user@com.",
      "a@b.c",
      "user@example.co.m",
      "user@example.abcdef",
      "user@example.1",
      "user@example..com",
      "user@example.abcd1",
      "user@123.45.67.89",
    ]

  }

  getFirstName(isValid: boolean): string {
    if (isValid) {
      return faker.person.firstName('female');
    } else {
      return '';
    }
  }

  getLastName(isValid: boolean) {
    if (isValid) {
      return faker.person.lastName('female');
    } else {
      return '';
    }
  }

  getEmail(isValid: boolean): string {
    if (isValid) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const domain = faker.internet.domainName();

      // Генерируем случайный e-mail, объединяя имя, фамилию и домен
      const email = `${firstName}.${lastName}@${domain}`;

      return email.toLowerCase();
    } else {
      // Генерация невалидного email
      return 'invalid-email';
    }
  }

  getAge(isValid: boolean): number {
    if (isValid) {
      return faker.number.int({ min: 0, max: 99 })
    } else {
      // Невалидный возраст
      return 100;
    }
  }

  getSalary(isValid: boolean): number {
    if (isValid) {
      return faker.number.int({ min: 0, max: 9999999999 })
    } else {
      // Невалидный оклад
      return 1234567890123456;
    }
  }


  getDepartment(isValid: boolean): string {
    if (isValid) {
      return faker.person.jobArea();
    } else {
      return '';
    }
  }

  getPerson(): WebTableInterface {
    const data: WebTableInterface = {
      firstName: this.getFirstName(true),
      lastName: this.getLastName(true),
      email: this.getEmail(true),
      age: this.getAge(true),
      salary: this.getSalary(true),
      department: this.getDepartment(true)
    };
    return data;
  }
  getMultiplePersons(count: number): WebTableInterface[] {
    const persons : WebTableInterface[]=[];
    let person : WebTableInterface;
    for (let i = 1; i <= count; i++){
      person = this.getPerson();
      persons.push(person)

    }
    return persons;
  }


  getNoValidPerson(parameter: string): noValidWebTableInterface {
    // Только одна функция вызывается с параметром false, остальные с true
    const isTrueForParameter = (param: string): boolean => param === parameter;

    const data: WebTableInterface | noValidWebTableInterface = {
      firstName: this.getFirstName(!isTrueForParameter('First Name')),
      lastName: this.getLastName(!isTrueForParameter('Last Name')),
      email: this.getEmail(!isTrueForParameter('Email')),
      // age и salary не могут вернуть строку, только число, поэтому для них изменил код
      age: !isTrueForParameter('Age') ? this.getAge(true) : '',
      salary: !isTrueForParameter('Salary') ? this.getSalary(true) : '',
      department: this.getDepartment(!isTrueForParameter('Department'))
    };

    return data as noValidWebTableInterface;
  }

}

export default WebTablesRandomData

// export { TextBoxInterface } from '../interfaces/textbox.interface'
