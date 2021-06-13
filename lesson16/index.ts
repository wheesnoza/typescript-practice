function sum(num1: number, num2: number, toString: boolean = false): number | string {
    let val = num1 + num2;

    if (toString) {
        return val.toString();
    }

    return val;
}

console.log(sum(10, 10));
console.log(sum(10, 10, true));

const doubleNumber = (num: number): number => num * 2;
const tripleNumber: (num: number) => number = num => num * 3;

console.log(doubleNumber(10));
console.log(tripleNumber(10));
