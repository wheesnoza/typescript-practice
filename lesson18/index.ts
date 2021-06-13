function error(message: string): never {
    throw new Error(message);
}

console.log(error('New error'));