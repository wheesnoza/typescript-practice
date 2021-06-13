let unionType: number | string = 10;
console.log(unionType.toString()); // number methods
unionType = 'string';
console.log(unionType.toUpperCase()); // string methods.
let unionTypes: (number | string)[] = [
    10,
    'string'
];
unionTypes.push('other string');
unionTypes.push(20);
console.log(unionTypes.length);
