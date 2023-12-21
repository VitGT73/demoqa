import { test, expect } from "../../fixtures/elements.fixture";
// import { TextboxRandomData } from '../../testdata/elements/textbox.data';

// let data = new TextboxRandomData();

test.describe.configure({ mode: 'serial' });
test.describe.only("Web tables tests", () => {
    // test.beforeAll( async ()=>{
    //     let data = new TextboxRandomData;
    // })
    test("Has header ", async ({ webTablesPage }) => {
        await webTablesPage.header.selectText;
        await webTablesPage.assertPageHeader();
    });

    test(" has header ", async ({ webTablesPage }) => {
        await webTablesPage.header.selectText;
        await webTablesPage.assertPageHeader();
    });

});
