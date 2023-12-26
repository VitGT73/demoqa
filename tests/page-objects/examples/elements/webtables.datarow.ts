import { Page, Locator } from '@playwright/test';
// import { TableRow } from './webtables.tablerow';

export class TableRow {
    readonly $row: Locator;
    readonly $gridCell: Locator;

    constructor(row: Locator) {
        this.$row = row;
        this.$gridCell = row.getByRole('gridcell');
    }
}

class AnyRow extends TableRow {
    constructor(row: Locator) {
        super(row);
    }
}

class DataRow extends TableRow {
    readonly $editButton: Locator;
    readonly $deleteButton: Locator;

    constructor(row: Locator) {
        super(row);
        this.$editButton = row.getByTitle('Edit');
        this.$deleteButton = row.getByTitle('Delete');
    }
}

interface TableElements<T> {
    getCountRowsOnPage(): Promise<number>;
    createTableElements(countRows: number): Record<number, T>;
    // createTableElements(countRows: number, factory: TableElementsFactory<T>): Record<number, T>;
    updateTableElements(): Promise<void>;
}

export class BaseTableManager<T> implements TableElements<T> {
    protected readonly page: Page;
    protected readonly element: Locator;
    protected readonly rowClass: new (row: Locator) => T;
    public tableRows: Record<number, T>;

    constructor(page: Page, element: Locator, rowClass: new (row: Locator) => T) {
        this.page = page;
        this.element = element;
        this.rowClass = rowClass;
        this.tableRows = {};
    }

    public async getCountRowsOnPage(): Promise<number> {
        const count = await this.element.count();
        return count;
    }

    public createTableElements(countRows: number): Record<number, T> {
        const elements: Record<number, T> = {};

        for (let rowNumber = 1; rowNumber <= countRows; rowNumber++) {
            const rowLocator = this.element.nth(rowNumber - 1);
            elements[rowNumber] = new this.rowClass(rowLocator);
        }

        return elements;
    }

    public async updateTableElements(): Promise<void> {
        const countRows = await this.getCountRowsOnPage();
        this.tableRows = this.createTableElements(countRows);
    }
}

export class DataRows extends BaseTableManager<DataRow> {
    constructor(page: Page, dataRowsLocator: Locator) {
        super(page, dataRowsLocator, DataRow);
    }
}

export class AnyRows extends BaseTableManager<AnyRow> {
    constructor(page: Page, allRowsLocator: Locator) {
        super(page, allRowsLocator, AnyRow);
    }
}

export default BaseTableManager
