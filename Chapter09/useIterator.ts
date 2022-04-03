import { Iterator, IteratorRes } from './interface'

// print函数
function print<T>(iterator: Iterator<T>): void {
    let result: IteratorRes<T> = iterator.next()

    while(!result.done) {
        console.log(result.value)
        result = iterator.next()
    }
}

// contains函数
function contains<T>(iterator: Iterator<T>, value: T): boolean {
    let result: IteratorRes<T> = iterator.next()

    while(!result.done) {
        if(result.value === value) return true
        result = iterator.next()
    }
    
    return false
}