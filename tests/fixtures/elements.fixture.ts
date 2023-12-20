import { test as base } from "@playwright/test";
import { TextBoxExample } from '../page-objects/examples/elements/textbox.example';
import { CheckboxExample } from '../page-objects/examples/elements/checkbox.example';
import { RadioButtonExample } from '../page-objects/examples/elements/radiobutton.example';
import { WebTablesExample } from '../page-objects/examples/elements/webtables.example';
import { ButtonExample } from '../page-objects/examples/elements/button.example';
import { LinksExample } from '../page-objects/examples/elements/links.example';
import { BrokenLinksExample } from '../page-objects/examples/elements/brockenlinks.example';
import { UploadAndDownloadExample } from '../page-objects/examples/elements/uploadandownload.example';
import { DynamicPropertiesExample } from '../page-objects/examples/elements/dynamicproperties.example';

type ElementsPages = {
  textBoxPage: TextBoxExample;
  checkboxPage: CheckboxExample;
  // checkboxPageExpandAll: CheckboxExample;
  radioButtonPage: RadioButtonExample;
  webTablesPage: WebTablesExample;
  buttonPage: ButtonExample;
  linksPage: LinksExample;
  brokenLinksPage: BrokenLinksExample;
  uploadAndDownloadPage: UploadAndDownloadExample;
  dynamicPropertiesPage: DynamicPropertiesExample;

};

export const test = base.extend<ElementsPages>({

  textBoxPage: async ({ page }, use) => {
    const textBoxPage = new TextBoxExample(page);
    await textBoxPage.load();
    await use(textBoxPage);
  },

  checkboxPage: async ({ page }, use) => {
    const checkboxPage = new CheckboxExample(page);
    await checkboxPage.load();
    await use(checkboxPage);
  },

  // checkboxPageExpandAll: async ({ page }, use) => {
  //   const checkboxPage = new CheckboxExample(page);
  //   await checkboxPage.load();
  //   await checkboxPage.expandAllButton.click();
  //   await use(checkboxPage);
  // },

  radioButtonPage: async ({ page }, use) => {
    const radioButtonPage = new RadioButtonExample(page);
    await radioButtonPage.load();
    await use(radioButtonPage);
  },

  webTablesPage: async ({ page }, use) => {
    const webTablesPage = new WebTablesExample(page);
    await webTablesPage.load();
    await use(webTablesPage);
  },

  buttonPage: async ({ page }, use) => {
    const buttonPage = new ButtonExample(page);
    await buttonPage.load();
    await use(buttonPage);
  },

  linksPage: async ({ page }, use) => {
    const linksPage = new LinksExample(page);
    await linksPage.load();
    await use(linksPage);
  },

  brokenLinksPage: async ({ page }, use) => {
    const brokenLinksPage = new BrokenLinksExample(page);
    await brokenLinksPage.load();
    await use(brokenLinksPage);
  },

  uploadAndDownloadPage: async ({ page }, use) => {
    const uploadAndDownloadPage = new CheckboxExample(page);
    await uploadAndDownloadPage.load();
    await use(uploadAndDownloadPage);
  },

  dynamicPropertiesPage: async ({ page }, use) => {
    const dynamicPropertiesPage = new DynamicPropertiesExample(page);
    await dynamicPropertiesPage.load();
    await use(dynamicPropertiesPage);
  },

});

export { expect } from '@playwright/test';
