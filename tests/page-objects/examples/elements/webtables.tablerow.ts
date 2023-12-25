import { Locator } from 'playwright';


export class TableRow {
    // private readonly page: Page;
    // private readonly rowIndex: number;
    readonly editButton: Locator;
    readonly deleteButton: Locator;
    // readonly allRow:Locator
    readonly row: Locator;

    constructor(row: Locator) {
        this.row = row;
        // this.rowIndex = rowIndex;
        // this.allRow = page.getByRole('rowgroup')
        this.editButton = row.getByTitle('Edit')
        this.deleteButton = row.getByTitle('Delete')
    }

}

export default TableRow
