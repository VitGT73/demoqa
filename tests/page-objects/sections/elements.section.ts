import { type Page, type Locator, expect } from "@playwright/test";
import { TextBoxExample } from "../examples/elements/textbox.example";
import { CheckboxExample } from "../examples/elements/checkbox.example";
import { RadioButtonExample } from "../examples/elements/radiobutton.example";
import { WebTablesExample } from "../examples/elements/webtables.example";
import { ButtonExample } from "../examples/elements/button.example";
import { LinksExample } from "../examples/elements/links.example";
import { BrokenLinksExample } from "../examples/elements/brockenlinks.example";
import { UploadAndDownloadExample } from "../examples/elements/uploadandownload.example";
import { DynamicPropertiesExample } from "../examples/elements/dynamicproperties.example";

export class ElementsSection {
  readonly page: Page;
  readonly rootItem: Locator;
  readonly textBoxItem: Locator;
  readonly checkBoxItem: Locator;
  readonly radioButtonItem: Locator;
  readonly webTablesItem: Locator;
  readonly buttonsItem: Locator;
  readonly linksItem: Locator;
  readonly brockenLinksItem: Locator;
  readonly uploadAddDownloadItem: Locator;
  readonly dynamicPropertiesItem: Locator;
  readonly textBoxExample:TextBoxExample;
  readonly checkBoxExample:CheckboxExample;
  readonly radioButtonExample:RadioButtonExample;
  readonly webTablesExample:WebTablesExample;
  readonly buttonExample:ButtonExample;
  readonly linksExample:LinksExample;
  readonly brokenLinksExample:BrokenLinksExample;
  readonly uploadAndDownloadExample:UploadAndDownloadExample;
  readonly dynamicPropertiesExample:DynamicPropertiesExample;


  constructor(page: Page) {
    this.page = page;
    this.rootItem = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first()
    this.textBoxItem = page.locator('li').filter({ hasText: 'Text Box' })
    this.checkBoxItem = page.locator('li').filter({ hasText: 'Check Box' })
    this.radioButtonItem = page.locator('li').filter({ hasText: 'Radio Button' })
    this.webTablesItem = page.locator('li').filter({ hasText: 'Web Tables' })
    this.buttonsItem = page.locator('li').filter({ hasText: 'Buttons' })
    this.linksItem= page.getByRole('list').getByText('Links', { exact: true }); // /^Links$/
    this.brockenLinksItem = page.locator('li').filter({ hasText: 'Broken Links - Images' })
    this.uploadAddDownloadItem = page.locator('li').filter({ hasText: 'Upload and Download' })
    this.dynamicPropertiesItem = page.locator('li').filter({ hasText: 'Dynamic Properties' })
    this.textBoxExample = new TextBoxExample(page);
    this.checkBoxExample = new CheckboxExample(page);
    this.radioButtonExample = new RadioButtonExample(page);
    this.webTablesExample = new WebTablesExample(page);
    this.buttonExample = new ButtonExample(page);
    this.linksExample = new LinksExample(page);
    this.brokenLinksExample = new BrokenLinksExample(page);
    this.uploadAndDownloadExample = new UploadAndDownloadExample(page);
    this.dynamicPropertiesExample = new DynamicPropertiesExample(page);
  }


  async isOpen(){
  await expect(this.textBoxItem).toBeVisible();
  await expect(this.checkBoxItem).toBeVisible();
  await expect(this.radioButtonItem).toBeVisible();
  await expect(this.webTablesItem).toBeVisible();
  await expect(this.buttonsItem).toBeVisible();
  await expect(this.linksItem).toBeVisible();
  await expect(this.brockenLinksItem).toBeVisible();
  await expect(this.uploadAddDownloadItem).toBeVisible();
  await expect(this.dynamicPropertiesItem).toBeVisible();
}

  async isClose() {
  await expect(this.textBoxItem).toBeHidden();
  await expect(this.checkBoxItem).toBeHidden();
  await expect(this.radioButtonItem).toBeHidden();
  await expect(this.webTablesItem).toBeHidden();
  await expect(this.buttonsItem).toBeHidden();
  await expect(this.linksItem).toBeHidden();
  await expect(this.brockenLinksItem).toBeHidden();
  await expect(this.uploadAddDownloadItem).toBeHidden();
  await expect(this.dynamicPropertiesItem).toBeHidden();
}
}

export default ElementsSection;
