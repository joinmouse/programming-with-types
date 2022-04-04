function* generateRandomNumbers(): IterableIterator<number> {
    while(true) {
        yield Math.random()
    }
}

let iter: IterableIterator<number> = generateRandomNumbers()
console.log(iter.next().value)
console.log(iter.next().value)
console.log("-----------")

function* square(iter: Iterable<number>): IterableIterator<number> {
    for(const value of iter) {
        yield value ** 2
    }
}

function* take<T>(iter: Iterable<T>, n: number): IterableIterator<T> {
    for(const value of iter) {
        if(n-- <=0) return
        yield value;
    }
}

// 管道是延迟计算的
const values: IterableIterator<number> = take(square(generateRandomNumbers()), 5)

for(const value of values) {
    console.log(value)
}