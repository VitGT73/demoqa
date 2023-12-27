import { Locator } from 'playwright';

class TableRow {
    readonly $row: Locator;
    readonly $gridCell: Locator;

    constructor(row: Locator) {
        this.$row = row;
        this.$gridCell = row.getByRole('gridcell');
    }
}

export class AnyRow extends TableRow {
    constructor(row: Locator) {
        super(row);
    }
}

export class DataRow extends TableRow {
    readonly $editButton: Locator;
    readonly $deleteButton: Locator;

    constructor(row: Locator) {
        super(row);
        this.$editButton = row.getByTitle('Edit');
        this.$deleteButton = row.getByTitle('Delete');
    }
}
