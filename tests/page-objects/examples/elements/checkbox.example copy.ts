import { type Page, type Locator, expect } from '@playwright/test';
// import {TextBoxInterface} from '../../../interfaces/textbox.interface'
// interface State {
//   toggle: string;
//   expand: boolean;
// }
export class CheckboxExample {
  readonly page: Page;
  readonly url: string;
  readonly headerText: string;
  readonly header: Locator;
  readonly testLocator: Locator;

  private nodeHomeState: boolean | undefined;
  private nodeDocumentsState: boolean| undefined;
  private nodeDownloadsState: boolean| undefined;
  private nodeDesktopState: boolean| undefined;
  private nodeWorkSpaceState: boolean| undefined;
  private nodeOfficeState: boolean| undefined;
  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;

  readonly homeToggle: Locator;
  readonly desktopToggle: Locator;
  readonly documentsToggle: Locator;
  readonly workspaceToggle: Locator;
  readonly officeToggle: Locator;
  readonly downloadsToggle: Locator;

  readonly checkboxHome: Locator;
  readonly checkboxDesktop: Locator;
  readonly checkboxNotes: Locator;
  readonly checkboxCommands: Locator;
  readonly checkboxDocuments: Locator;
  readonly checkboxWorkSpace: Locator;
  readonly checkboxReact: Locator;
  readonly checkboxAngular: Locator;
  readonly checkboxVeu: Locator;
  readonly checkboxOffice: Locator;
  readonly checkboxPublic: Locator;
  readonly checkboxPrivate: Locator;
  readonly checkboxClassified: Locator;
  readonly checkboxGeneral: Locator;
  readonly checkboxDownloads: Locator;
  readonly checkboxWord: Locator;
  readonly checkboxExcel: Locator;

  readonly resultMessage: Locator


  constructor(page: Page) {
    this.page = page;
    this.url = "/checkbox";
    this.headerText = "Check Box";
    this.header = page.locator("//div[@class='main-header']");
    // Expand and Collapse
    this.expandAllButton = page.getByRole('button', { name: 'Expand all' });
    this.collapseAllButton = page.getByRole('button', { name: 'Collapse all' });

    //Check boxes

    this.checkboxHome = page.locator('label').filter({ hasText: 'Home' });
    this.checkboxDesktop = page.locator('label').filter({ hasText: 'Desktop' });
    this.checkboxNotes = page.locator('label').filter({ hasText: 'Notes' });
    this.checkboxCommands = page.locator('label').filter({ hasText: 'Commands' });
    this.checkboxDocuments = page.locator('label').filter({ hasText: 'Documents' })
    this.checkboxWorkSpace = page.locator('label').filter({ hasText: 'WorkSpace' })
    this.checkboxReact = page.locator('label').filter({ hasText: 'React' })
    this.checkboxAngular = page.locator('label').filter({ hasText: 'Angular' })
    this.checkboxVeu = page.locator('label').filter({ hasText: 'Veu' })
    this.checkboxOffice = page.locator('label').filter({ hasText: 'Office' })
    this.checkboxPublic = page.locator('label').filter({ hasText: 'Public' })
    this.checkboxPrivate = page.locator('label').filter({ hasText: 'Private' })
    this.checkboxClassified = page.locator('label').filter({ hasText: 'Classified' })
    this.checkboxGeneral = page.locator('label').filter({ hasText: 'General' })
    this.checkboxDownloads = page.locator('label').filter({ hasText: 'Downloads' })
    this.checkboxWord = page.locator('label').filter({ hasText: 'Word File.doc' })
    this.checkboxExcel = page.locator('label').filter({ hasText: 'Excel File.doc' })

    // toggles
    this.homeToggle = this.checkboxHome.locator("xpath=/preceding-sibling::button")
    // this.homeToggle = page.locator('label').filter({ hasText: 'Home' }).locator("xpath=/preceding-sibling::button")
    // this.homeToggle = page.locator("//label[@for='tree-node-home']").locator("xpath=/preceding-sibling::button")
    // this.homeToggle = page.locator("//label[@for='tree-node-home']/preceding-sibling::button")
    this.desktopToggle = this.checkboxDesktop.locator("xpath=/preceding-sibling::button")
    this.documentsToggle = this.checkboxDocuments.locator("xpath=/preceding-sibling::button")
    this.workspaceToggle = this.checkboxWorkSpace.locator("xpath=/preceding-sibling::button")
    this.officeToggle = this.checkboxOffice.locator("xpath=/preceding-sibling::button")
    this.downloadsToggle = this.checkboxDownloads.locator("xpath=/preceding-sibling::button")
    this.resultMessage = page.locator('#result')

  }

  async load() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  async assertPageHeader() {
    await expect(this.header).toHaveText(this.headerText);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }

  async assertExpandAll() {
    await expect(this.homeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
    await expect(this.desktopToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
    await expect(this.documentsToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
    await expect(this.downloadsToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
    await expect(this.workspaceToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
    await expect(this.officeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
  }

  async assertExpandHome() {
    await expect(this.homeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
  }

  async assertExpandDesktop() {
    await expect(this.desktopToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
  }

  async assertExpandDocuments() {
    await expect(this.documentsToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
  }

  async assertExpandDownloads() {
    await expect(this.downloadsToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
  }

  async assertExpandWorkspace() {
    await expect(this.workspaceToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
  }

  async assertExpandOffice() {
    await expect(this.officeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-expanded/)
  }

  async assertCollapseAll() {
    await expect(this.homeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-collapsed/)
  }

  async assertCollapseHome() {
    await expect(this.homeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-collapsed/)
  }

  async assertCollapseDesktop() {
    await expect(this.desktopToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-collapsed/)
  }
  async assertCollapseDocuments() {
    await expect(this.documentsToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-collapsed/)
  }

  async assertCollapseDownloads() {
    await expect(this.downloadsToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-collapsed/)
  }

  async assertCollapseWorkSpace() {
    await expect(this.workspaceToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-collapsed/)
  }

  async assertCollapseOffice() {
    await expect(this.officeToggle.locator('xpath=..').locator('xpath=..')).toHaveClass(/rct-node-collapsed/)
  }
}


export default CheckboxExample
