
// import { test } from "@playwright/test";
// import {CheckboxExample} from '../page-objects/examples/elements/checkbox.example'

export class CheckboxData {
  readonly checkboxNames : string[];
  readonly toggleNames : string[];
  readonly toggleNamesLevel2 : string[];
  readonly toggleNamesLevel3 : string[];
  readonly randomClickCount : number;

  constructor() {
    this.checkboxNames = [
      'Home', 'Desktop', 'Notes', 'Commands', 'Documents', 'WorkSpace', 'React',
      'Angular', 'Veu', 'Office', 'Public', 'Private', 'Classified', 'General',
      'Downloads', 'Word File.doc', 'Excel File.doc'
    ];
    this.toggleNames = ['Home', 'Desktop', 'Documents', 'WorkSpace', 'Office', 'Downloads'];
    this.toggleNamesLevel2 = ['Desktop', 'Documents', 'Downloads'];
    this.toggleNamesLevel3 = ['WorkSpace', 'Office'];
    this.randomClickCount = 5;
  }
}

export default CheckboxData

// export { TextBoxInterface } from '../interfaces/textbox.interface'
