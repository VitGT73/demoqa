// import { TextBoxInterface } from '../interfaces/textbox.interface'

import { fakerRU as faker } from '@faker-js/faker'

export class TextboxRandomData {

    constructor() {
    }
    getFullName() {
      return 'John Doe'
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
    getCurrentAddress() {
      return '123 Main Street, City, Country'
    }
    getPermanentAddress() {
      return '456 Park Avenue, Town, Country'
    }
}

export default TextboxRandomData

// export { TextBoxInterface } from '../interfaces/textbox.interface'
