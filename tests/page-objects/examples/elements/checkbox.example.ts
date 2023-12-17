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

  checkboxHome : Locator;
  checkboxDesktop : Locator;
  checkboxNotes : Locator;
  checkboxCommands : Locator;
  checkboxDocuments : Locator;
  checkboxWorkSpace : Locator;
  checkboxReact : Locator;
  checkboxAngular : Locator;
  checkboxVeu : Locator;
  checkboxOffice : Locator;
  checkboxPublic : Locator;
  checkboxPrivate : Locator;
  checkboxClassified : Locator;
  checkboxGeneral : Locator;
  checkboxDownloads : Locator;
  checkboxWord : Locator;
  checkboxExcel : Locator;


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

    // this.testLocator = page.locator('.rct-collapse').first()
    // this.testLocator = page.locator('li').getByLabel('Toggle')
    // this.testLocator = page.getByRole('button').filter({has: page.locator('label').filter({ hasText: 'Desktop' })});
    this.testLocator = page.locator("//label[@for='tree-node-desktop']/preceding-sibling::button")
//li[@class='rct-node rct-node-parent rct-node-expanded']//li[@class='rct-node rct-node-parent rct-node-expanded']//button[@title='Toggle']
//label[@for='tree-node-desktop']
//input[@id='tree-node-desktop']/following-sibling::span)[3]
//label[@for='tree-node-desktop'/following-sibling::button)
//label[@for='tree-node-desktop']/preceding-sibling::button
//label[@for='tree-node-desktop']/following-sibling::button

//button[@title='Toggle'])[2]

    // this.testLocator = page.getByRole('button', { name: 'Toggle' }) //.filter({ hasText: 'Desktop'})
    // 1) <button type="button" title="Toggle" aria-label="Toggle"…>…</button> aka locator('.rct-collapse').first()
    // locator('li').filter({ hasText: /^DesktopNotesCommands$/ }).getByLabel('Toggle')
    // locator('li').filter({ hasText: /^DocumentsWorkSpaceReactAngularVeuOfficePublicPrivateClassifiedGeneral$/ }).getByLabel('Toggle').first()
    // locator('li').filter({ hasText: /^WorkSpaceReactAngularVeu$/ }).getByLabel('Toggle')
    // locator('li').filter({ hasText: /^OfficePublicPrivateClassifiedGeneral$/ }).getByLabel('Toggle')
    // locator('li').filter({ hasText: /^DownloadsWord File\.docExcel File\.doc$/ }).getByLabel('Toggle')

    // //li[@class='rct-node rct-node-parent rct-node-expanded']//li[1]//span[1]//button[1]//*[name()='svg']
    // this.desktopToggle = page.getByRole('button',{name:'Desktop'}) // //li[@class='rct-node rct-node-parent rct-node-expanded']//li[1]//span[1]//button[1]//*[name()='svg']
    // this.documentsToggle = page.getByRole('button',{name:'Document'}) // //li[@class='rct-node rct-node-parent rct-node-expanded']//li[1]//span[1]//button[1]//*[name()='svg']
    // this.workspaceToggle = page.getByRole('button',{name:'WorkSpace'}) // //li[@class='rct-node rct-node-parent rct-node-expanded']//li[1]//span[1]//button[1]//*[name()='svg']
    // this.officeToggle = page.getByRole('button',{name:'Office'}) // //li[@class='rct-node rct-node-parent rct-node-expanded']//li[1]//span[1]//button[1]//*[name()='svg']
    // this.downloadsToggle = page.getByRole('button',{name:'Downloads'}) // //li[@class='rct-node rct-node-parent rct-node-expanded']//li[1]//span[1]//button[1]//*[name()='svg']


    //

    // await page.locator('li').filter({ hasText: /^DownloadsWord File\.docExcel File\.doc$/ }).getByLabel('Toggle').click();
    // await page.locator('li').filter({ hasText: /^OfficePublicPrivateClassifiedGeneral$/ }).getByLabel('Toggle').click();
    // await page.locator('li').filter({ hasText: /^WorkSpaceReactAngularVeu$/ }).getByLabel('Toggle').click();
    // await page.locator('li').filter({ hasText: /^DocumentsWorkSpaceOffice$/ }).getByLabel('Toggle').first().click();
    // await page.locator('li').filter({ hasText: /^DesktopNotesCommands$/ }).getByLabel('Toggle').click();
    // await page.getByLabel('Toggle').first().click();


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


}

export default CheckboxExample
