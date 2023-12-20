import { TextBoxInterface } from '../../interfaces/textbox.interface';

import { fakerRU as faker } from '@faker-js/faker';

export class TextboxRandomData {

  constructor() {
  }
  getFullName() {
    return faker.person.fullName();
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
  getAddress() {
    const country = faker.location.country()
    const zipcode = faker.location.zipCode()
    const city = faker.location.city()
    const street = faker.location.streetAddress()
    // const build = faker.location.buildingNumber()
    const apartment = faker.location.secondaryAddress()


    return apartment + ', ' + street + ', ' + city + ', ' + zipcode + ', ' + country
  }
  getCurrentAddress() {
    return this.getAddress()
  }
  getPermanentAddress() {
    return this.getCurrentAddress()
  }
  getTextBoxData(valid:boolean){
    const data : TextBoxInterface = {
      fullName: this.getFullName(),
      email:this.getEmail(valid),
      currentAddress:this.getCurrentAddress(),
      permanentAddress:this.getPermanentAddress()
    };
    return data
  }
}

export default TextboxRandomData

// export { TextBoxInterface } from '../interfaces/textbox.interface'
