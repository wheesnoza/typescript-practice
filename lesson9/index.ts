enum Size {
    SHORT = "short",
    TALL = "tall",
    GRANDE = "grande",
}

const coffee = {
    hot: true,
    size: Size.GRANDE
}

coffee.size = Size.TALL;

console.log(coffee);