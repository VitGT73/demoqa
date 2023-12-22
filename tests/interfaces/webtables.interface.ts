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
