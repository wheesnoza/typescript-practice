const literalApple: 'apple' = 'apple';
const literalZero: 0 = 0;
const literalTrueValue: true = true;

let apple = 'apple';
apple = 'other';

let literalClotheSize: 'small' | 'medium' | 'large' = 'medium';
literalClotheSize = 'small';

const clothe = {
    color: 'white',
    size: literalClotheSize
}

console.log(clothe);
