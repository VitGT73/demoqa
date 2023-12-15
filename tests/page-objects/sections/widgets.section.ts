import { type Page, type Locator, expect } from "@playwright/test";
import {AccordionExamples} from '../examples/widgets/accordion.example'
import {AutoCompleteExamples} from '../examples/widgets/autocomplete.example'
import {DatePickerExamples} from '../examples/widgets/datepicker.example'
import {SliderExamples} from '../examples/widgets/slider.example'
import {ProgressBarExamples} from '../examples/widgets/progressbar.example'
import {TabsExamples} from '../examples/widgets/tabs.example'
import {ToolTipsExamples} from '../examples/widgets/tooltips.example'
import {MenuExamples} from '../examples/widgets/menu.example'
import {SelectMenuExamples} from '../examples/widgets/selectmenu.example'

export class WidgetSection {
  readonly page: Page;
  readonly rootItem: Locator;
  readonly accordionItem: Locator;
  readonly autoCompleteItem: Locator;
  readonly dataPickerItem: Locator;
  readonly sliderItem: Locator;
  readonly progressBarItem: Locator;
  readonly tabsItem: Locator;
  readonly toolTipsItem: Locator;
  readonly menuItem: Locator;
  readonly selectMenuItem: Locator;
  readonly accordionElement: AccordionExamples;
  readonly autoCompleteElement: AutoCompleteExamples;
  readonly dataPickerElement: DatePickerExamples;
  readonly sliderElement: SliderExamples;
  readonly progressBarElement: ProgressBarExamples;
  readonly tabsElement: TabsExamples;
  readonly toolTipsElement: ToolTipsExamples;
  readonly menuElement: MenuExamples;
  readonly selectMenuElement: SelectMenuExamples;

  constructor(page: Page) {
    this.page = page;
    this.rootItem = page.locator("span").filter({ hasText: "Widgets" }).locator("div").first();

    this.accordionItem = page.locator("li").filter({ hasText: "Accordian" });
    // this.accordionItem = page.getByRole("listitem").getByText("Accordian");
    this.autoCompleteItem = page.locator("li").filter({ hasText: "Auto Complete" });
    this.dataPickerItem = page.locator("li").filter({ hasText: "Date Picker" });
    this.sliderItem = page.locator("li").filter({ hasText: "Slider" });
    this.progressBarItem = page.locator("li").filter({ hasText: "Progress Bar" });
    this.tabsItem = page.locator("li").filter({ hasText: "Tabs" });
    this.toolTipsItem = page.locator("li").filter({ hasText: "Tool Tips" });
    this.menuItem = page.getByRole("listitem").getByText("Menu", { exact: true });
    // this.menuItem = page.locator("li").filter({ hasText: "Menu" });
    // Эта строка не работает, потому что слово Menu есть еще в "Select Menu"
    this.selectMenuItem = page.locator("li").filter({ hasText: "Select Menu" });

    this.accordionElement=new AccordionExamples(page);
    this.autoCompleteElement=new AutoCompleteExamples(page);
    this.dataPickerElement=new DatePickerExamples(page);
    this.sliderElement=new SliderExamples(page);
    this.progressBarElement=new ProgressBarExamples(page);
    this.tabsElement=new TabsExamples(page);
    this.toolTipsElement=new ToolTipsExamples(page);
    this.menuElement=new MenuExamples(page);
    this.selectMenuElement=new SelectMenuExamples(page);
  }

  async isOpen() {
    await expect(this.accordionItem).toBeVisible();
    await expect(this.autoCompleteItem).toBeVisible();
    await expect(this.dataPickerItem).toBeVisible();
    await expect(this.sliderItem).toBeVisible();
    await expect(this.progressBarItem).toBeVisible();
    await expect(this.tabsItem).toBeVisible();
    await expect(this.toolTipsItem).toBeVisible();
    await expect(this.menuItem).toBeVisible();
    await expect(this.selectMenuItem).toBeVisible();
  }

  async isClose() {
    await expect(this.accordionItem).toBeHidden();
    await expect(this.autoCompleteItem).toBeHidden();
    await expect(this.dataPickerItem).toBeHidden();
    await expect(this.sliderItem).toBeHidden();
    await expect(this.progressBarItem).toBeHidden();
    await expect(this.tabsItem).toBeHidden();
    await expect(this.toolTipsItem).toBeHidden();
    await expect(this.menuItem).toBeHidden();
    await expect(this.selectMenuItem).toBeHidden();
  }
}

export default WidgetSection;
