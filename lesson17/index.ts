function doubleAndHandle(num: number, call: (num: number) => number = null):number {
    if (call) {
        return call(num * 2);
    }

    return num * 2;
}

console.log(doubleAndHandle(10));
console.log(doubleAndHandle(1000, double => {
    let val = double * 0.1;
    return double - val;
}));
