import { WebTableInterface } from '../../interfaces/webtables.interface';

import { fakerRU as faker } from '@faker-js/faker';


export class WebTablesRandomData {
  
  public readonly headerNames: string[];

  constructor() {
    this.headerNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];
  }

  getFirstName() {
    return faker.person.firstName();
  }

  getLastName() {
    return faker.person.firstName();
  }

  getEmail(isValid: boolean): string {
    if (isValid) {
      // Генерация валидного email
      return faker.internet.email();
    } else {
      // Генерация невалидного email
      return 'invalid-email';
    }
  }

  getAge() {
    return faker.number.int({ min: 0, max: 99 })
  }

  getSalary() {
    return faker.number.int({ min: 0, max: 9999999999 })
  }

  getDepartment() {
    return faker.person.jobType()
  }

  getTextBoxData(valid: boolean) {
    const data: WebTableInterface = {
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      email: this.getEmail(valid),
      age: this.getAge(),
      salary: this.getSalary(),
      department: this.getDepartment()
    };
    return data
  }
}

export default WebTablesRandomData

// export { TextBoxInterface } from '../interfaces/textbox.interface'
