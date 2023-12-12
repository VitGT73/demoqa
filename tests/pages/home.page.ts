import { type Page, type Locator, expect } from "@playwright/test";
import { AlertsPage } from "./alerts.page";
import { BooksPage } from "./books.page";
import { ElementsPage } from "./elements.page";
import { FormsPage } from "./forms.page";
import { InteractionsPage } from "./interaction.page";
import { WidgetsPage } from "./widgets.page";

// import {} from "../sections/alerts.section";
// import {} from "../sections/books.section";
// import {} from "../sections/elements.section";
// import {} from "../sections/forms.section";
// import {} from "../sections/interaction.section";
// import {} from "../sections/widgets.section";

export class HomePage {
  readonly page: Page;
  readonly url: string;
  readonly pageTitle: string;
  readonly elementsPage: ElementsPage;
  readonly alertsPage: AlertsPage;
  readonly widgetsPage: WidgetsPage;
  readonly booksPage: BooksPage;
  readonly interactionsPage: InteractionsPage;
  readonly formsPage: FormsPage;
  readonly elementsCard: Locator;
  readonly formsCard: Locator;
  readonly alertsCard: Locator;
  readonly widgetsCard: Locator;
  readonly interactionsCard: Locator;
  readonly booksCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "/";
    //   this.url = process.env.BASE_URL + "/";
    this.pageTitle = "DEMOQA";
    this.alertsPage = new AlertsPage(page);
    this.booksPage = new BooksPage(page);
    this.elementsPage = new ElementsPage(page);
    this.formsPage = new FormsPage(page);
    this.interactionsPage = new InteractionsPage(page);
    this.widgetsPage = new WidgetsPage(page);
    this.elementsCard = page.getByRole("heading", { name: "Elements" });
    this.formsCard = page.getByRole("heading", { name: "Forms" });
    this.alertsCard = page.getByRole("heading", {
      name: "Alerts, Frame & Windows",
    });
    this.widgetsCard = page.getByRole("heading", { name: "Widgets" });
    this.interactionsCard = page.getByRole("heading", { name: "Interactions" });
    this.booksCard = page.getByRole("heading", {
      name: "Book Store Application",
    });
  }

  async load() {
    await this.page.goto(this.url, { waitUntil: "domcontentloaded" });
  }

  async assertPageTitle() {
    await expect(this.page).toHaveTitle(this.pageTitle);
  }

  async assertPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }
}

export default HomePage;
