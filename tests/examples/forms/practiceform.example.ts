// import { type Page, type Locator , expect } from '@playwright/test';

// export class PracticeFormExample{
//     readonly page: Page;
//     readonly url: string;
//     readonly fullnameInput:Locator;
//     readonly emailInput :Locator;
//     readonly currentAddressInput :Locator;
//     readonly permanentAddressInput :Locator;
//     readonly submintButton: Locator;

//     constructor(page: Page) {
//       this.page = page;
//       this.url = "/automation-practice-form";
//       await page.goto('https://demoqa.com/');
//       await page.getByRole('heading', { name: 'Forms' }).click();
//       await page.locator('#close-fixedban').click();
//       await page.getByText('Practice Form').click();
//       await page.getByText('Practice Form').first().click();
//       await page.getByRole('heading', { name: 'Student Registration Form' }).click();
//       await page.getByPlaceholder('First Name').click();
//       await page.getByPlaceholder('Last Name').click();
//       await page.getByPlaceholder('name@example.com').click();
//       await page.getByText('Male', { exact: true }).click();
//       await page.getByText('Female').click();
//       await page.getByText('Other').click();
//       await page.getByPlaceholder('Mobile Number').click();
//       await page.locator('#dateOfBirthInput').click();
//       await page.locator('.subjects-auto-complete__value-container').click();
//       await page.getByText('Sports').click();
//       await page.getByText('Reading').click();
//       await page.getByText('Music').click();
//       await page.getByText('Select picture').click();
//       await page.getByLabel('Select picture').setInputFiles('python-original.svg');
//       await page.getByLabel('Select picture').click();
//       await page.getByText('Select picture').click();
//       await page.getByLabel('Select picture').click();
//       await page.getByLabel('Select picture').setInputFiles('README.md');
//       await page.getByLabel('Select picture').click();
//       await page.getByLabel('Select picture').setInputFiles('README.MD');
//       await page.getByPlaceholder('Current Address').click();
//       await page.locator('#state svg').click();
//       await page.getByText('Haryana', { exact: true }).click();
//       await page.getByText('Select City').click();
//       await page.locator('.css-1gtu0rj-indicatorContainer').click();
//       await page.getByPlaceholder('Current Address').click();
//       await page.getByPlaceholder('Current Address').fill('fdsfsd');
//       await page.getByPlaceholder('First Name').click();
//       await page.getByPlaceholder('First Name').fill('sdfs');
//       await page.getByPlaceholder('Last Name').click();
//       await page.getByPlaceholder('Last Name').fill('dsf');
//       await page.getByPlaceholder('name@example.com').click();
//       await page.getByPlaceholder('name@example.com').fill('dsfsd@bfdbdf.rtr');
//       await page.getByPlaceholder('Mobile Number').click();
//       await page.getByPlaceholder('Mobile Number').fill('3213123');
//       await page.locator('.subjects-auto-complete__value-container').click();
//       await page.locator('#subjectsInput').fill('21321');
//       await page.getByPlaceholder('Current Address').click();
//       await page.getByPlaceholder('Current Address').fill('fdsfsd\n\n');
//       await page.getByText('Music').click();
//       await page.getByLabel('Music').press('Enter');
//       await page.getByPlaceholder('Mobile Number').click();
//       await page.getByPlaceholder('Mobile Number').fill('3213123111');
//       await page.getByPlaceholder('Mobile Number').press('Enter');
//       await page.getByRole('cell', { name: 'Values' }).click();
//       await page.getByRole('cell', { name: 'sdfs dsf' }).click();
//       await page.getByRole('cell', { name: 'dsfsd@bfdbdf.rtr' }).click();
//       await page.getByRole('cell', { name: 'Other' }).click();
//       await page.getByRole('cell', { name: '3213123111' }).click();
//       await page.getByRole('cell', { name: 'December,2023' }).click();
//       await page.getByRole('row', { name: 'Subjects' }).getByRole('cell').nth(1).click();
//       await page.getByRole('cell', { name: 'Sports, Reading' }).click();
//       await page.getByRole('cell', { name: 'README.MD' }).click();
//       await page.getByRole('cell', { name: 'fdsfsd' }).click();
//       await page.getByRole('cell', { name: 'Haryana Karnal' }).click();
//       await page.getByRole('button', { name: 'Close' }).click();
//     });

//     }

//     async load(){
//       await this.page.goto(this.url,{waitUntil: 'domcontentloaded'});
//     }

//    }

//   export default PracticeFormModule
