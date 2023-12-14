import { test as base } from "@playwright/test";
import { TextBoxExample } from '../page-objects/examples/elements/textbox.example';
import { CheckboxExample } from '../page-objects/examples/elements/checkbox.example';

type ElementsItems = {
  textBoxExample: TextBoxExample;
  checkboxExample: CheckboxExample;
};

export const test = base.extend<ElementsItems>({

  textBoxExample: async ({ page }, use) => {
    const textBoxExample = new TextBoxExample(page);
    await textBoxExample.load();
    await use(textBoxExample);
  },

  checkboxExample: async ({ page }, use) => {
    const checkboxExample = new CheckboxExample(page);
    await checkboxExample.load();
    await use(checkboxExample);
  },

});

export { expect } from '@playwright/test';
