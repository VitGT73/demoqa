import { type Page, type Locator, expect } from '@playwright/test';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'

export class CheckboxExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly testLocator:Locator;
  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;

  readonly homeToggle: Locator;
  readonly desktopToggle: Locator;
  readonly documentsToggle: Locator;
  readonly workspaceToggle: Locator;
  readonly officeToggle: Locator;
  readonly downloadsToggle: Locator;

  readonly checkboxHome : Locator;
  readonly checkboxDesktop : Locator;
  readonly checkboxNotes : Locator;
  readonly checkboxCommands : Locator;
  readonly checkboxDocuments : Locator;
  readonly checkboxWorkSpace : Locator;
  readonly checkboxReact : Locator;
  readonly checkboxAngular : Locator;
  readonly checkboxVeu : Locator;
  readonly checkboxOffice : Locator;
  readonly checkboxPublic : Locator;
  readonly checkboxPrivate : Locator;
  readonly checkboxClassified : Locator;
  readonly checkboxGeneral : Locator;
  readonly checkboxDownloads : Locator;
  readonly checkboxWord : Locator;
  readonly checkboxExcel : Locator;

  readonly resultMessage : Locator


  constructor(page: Page) {
    this.page = page;
    this.url = "/checkbox";
    this.headerText = "Check Box";
    this.header = page.locator("//div[@class='main-header']");
    // Expand and Collapse
    // this.expandAllButton = page.getByRole('button').getByLabel('Expand all');
    // this.collapseAllButton = page.getByRole('button').getByLabel('Collapse all');
    this.expandAllButton = page.getByRole('button',{name:'Expand all'});
    this.collapseAllButton = page.getByRole('button',{name:'Collapse all'});

    // toggles


    this.homeToggle = page.locator("//label[@for='tree-node-home']/preceding-sibling::button")
    this.desktopToggle = page.locator("//label[@for='tree-node-desktop']/preceding-sibling::button")
    this.documentsToggle = page.locator("//label[@for='tree-node-documents']/preceding-sibling::button")
    this.workspaceToggle = page.locator("//label[@for='tree-node-workspace']/preceding-sibling::button")
    this.officeToggle = page.locator("//label[@for='tree-node-office']/preceding-sibling::button")
    this.downloadsToggle = page.locator("//label[@for='tree-node-downloads']/preceding-sibling::button")

    this.checkboxHome = page.locator('label').filter({ hasText: 'Home' });
    this.checkboxDesktop = page.locator('label').filter({ hasText: 'Desktop' });
    this.checkboxNotes = page.locator('label').filter({ hasText: 'Notes' });
    this.checkboxDocuments = page.locator('label').filter({ hasText: 'Commands' });
    this.checkboxCommands = page.locator('label').filter({ hasText: 'Documents' })
    this.checkboxWorkSpace = page.locator('label').filter({ hasText: 'WorkSpace' })
    this.checkboxReact = page.locator('label').filter({ hasText: 'React' })
    this.checkboxAngular = page.locator('label').filter({ hasText: 'Angular' })
    this.checkboxVeu =page.locator('label').filter({ hasText: 'Veu' })
    this.checkboxOffice = page.locator('label').filter({ hasText: 'Office' })
    this.checkboxPublic = page.locator('label').filter({ hasText: 'Public' })
    this.checkboxPrivate = page.locator('label').filter({ hasText: 'Private' })
    this.checkboxClassified = page.locator('label').filter({ hasText: 'Classified' })
    this.checkboxGeneral =page.locator('label').filter({ hasText: 'General' })
    this.checkboxDownloads =page.locator('label').filter({ hasText: 'Downloads' })
    this.checkboxWord =page.locator('label').filter({ hasText: 'Word File.doc' })
    this.checkboxExcel =page.locator('label').filter({ hasText: 'Excel File.doc' })

    this.resultMessage = page.locator('#result')

  }

  async load(){
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  async assertPageHeader() {
    await expect(this.header).toHaveText(this.headerText);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }

  async assertExpandAll(){

    await expect(this.homeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)

  }
  async assertCollapseAll(){

    await expect(this.homeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-collapsed/)

  }


  async assertExpandOffice(){

    await expect(this.officeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)

  }
  // rct-node rct-node-parent rct-node-expanded


}

export default CheckboxExample
