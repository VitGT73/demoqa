export const headerNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department', 'Action'];
export const fieldNames = ['First Name', 'Age', 'Email', 'Last Name', 'Salary', 'Department'];
export const countRowAllowedValues = [5, 10, 20, 25, 50, 100];

export interface WebTableInterface {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    salary: number;
    department: string;
}

export interface noValidWebTableInterface {
    firstName: string;
    lastName: string;
    age: number | string;
    email: string;
    salary: number | string;
    department: string;
}

type SortDirection = 'asc' | 'desc';
type SortField = keyof WebTableInterface;

export function webTablesSortByField(data: WebTableInterface[], field: SortField, direction: SortDirection = 'asc'): WebTableInterface[] {
    const sortOrder = direction === 'asc' ? 1 : -1;

    return data.slice().sort((a, b) => {
        if (a[field] < b[field]) {
            return -1 * sortOrder;
        }
        if (a[field] > b[field]) {
            return 1 * sortOrder;
        }
        return 0;
    });
}

export function webTablesReverseOrder(data: WebTableInterface[]): WebTableInterface[] {
    return data.slice().reverse();
}

export function webTablesIsEqual(arr1: WebTableInterface[], arr2: WebTableInterface[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        const obj1 = arr1[i];
        const obj2 = arr2[i];

        for (const key in obj1) {
            if (obj1.hasOwnProperty(key)) {
                if (obj1[key] !== obj2[key]) {
                    return false;
                }
            }
        }
    }

    return true;
}

export function webTablesFilter(data: WebTableInterface[], filterString: string): WebTableInterface[] {
    return data.filter(item => {
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                const value = String(item[key]); // Преобразование числовых полей в строки
                if (value.includes(filterString)) {
                    return true;
                }
            }
        }
        return false;
    });
}

export function webTableContainsThisElement(array: WebTableInterface[], element: WebTableInterface): boolean {
    return array.some(item =>
        item.firstName === element.firstName &&
        item.lastName === element.lastName &&
        item.age === element.age &&
        item.email === element.email &&
        item.salary === element.salary &&
        item.department === element.department
    );
}

export function webTableContainsThisArray(mainArray: WebTableInterface[], subArray: WebTableInterface[]): boolean {
    if (mainArray.length === 0) {
        // Если mainArray пуст, subArray не может быть подмножеством, возвращаем false
        return false;
    }
    const isSubset: boolean = subArray.every(item1 =>
        mainArray.some(item2 =>
            item1.firstName === item2.firstName &&
            item1.lastName === item2.lastName &&
            item1.age === item2.age &&
            item1.email === item2.email &&
            item1.salary === item2.salary &&
            item1.department === item2.department
        )
    );
    return isSubset
}

export function getFirstNElements<T>(arr: T[], n: number): T[] {
    return arr.slice(0, n);
  }

// // Пример использования:
// const data: WebTableInterface[] = [
//     { firstName: "John", lastName: "Doe", age: 30, email: "john@example.com", salary: 50000, department: "IT" },
//     { firstName: "Alice", lastName: "Smith", age: 25, email: "alice@example.com", salary: 45000, department: "HR" },
//     // ... другие элементы массива
// ];

// const ascendingData = webTablesSortByField(data, 'firstName', 'asc');
// console.log(ascendingData);

// const descendingData = webTablesSortByField(data, 'firstName', 'desc');
// console.log(descendingData);
// console.log(areArraysEqual(data1, data2)); // Вернет true


export function addRowToArray(array:WebTableInterface[], row: WebTableInterface):WebTableInterface[]{
    return [...array, row];
}

export function removeRowFromArrayByIndex(array: WebTableInterface[], indexToRemove: number):WebTableInterface[]{
    // используем два среза: до indexToRemove(не включая) и после indexToRemove
    return array.slice(0, indexToRemove).concat(array.slice(indexToRemove + 1));
}

export function parseSingleWebTableRow(row: string): WebTableInterface | null {
    // Пропускаем строки, которые состоят из пустых ячеек
    if (row.trim() === '') {
        return null;
    }

    // Разбиваем строку на ячейки
    const cells = row.trim().split('\n').map(cell => cell.trim());

    // Пропускаем строки, которые не содержат нужное количество ячеек
    if (cells.length !== 6) {
        return null;
    }

    // Парсим данные из ячеек и возвращаем объект
    const [firstName, lastName, ageStr, email, salaryStr, department] = cells;
    const age = parseInt(ageStr, 10);
    const salary = parseInt(salaryStr, 10);

    // Проверяем, что удалось корректно преобразовать возраст и зарплату
    if (!isNaN(age) && !isNaN(salary)) {
        return {
            firstName,
            lastName,
            age,
            email,
            salary,
            department,
        };
    } else {
        return null;
    }
}

export function parseWebTableRows(rows: string[]): WebTableInterface[] {
    const parsedRows: WebTableInterface[] = [];

    for (const row of rows) {
        const parsedRow = parseSingleWebTableRow(row);
        if (parsedRow !== null) {
            parsedRows.push(parsedRow);
        }
    }
    // console.log('parsedRows: ',parsedRows)

    return parsedRows;
}
