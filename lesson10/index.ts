enum Size {
    SHORT,
    TALL,
    GRANDE,
}

const coffee = {
    hot: true,
    size: Size.GRANDE
}

coffee.size = Size.TALL;

console.log(coffee);