import { Iterable } from './interface'

// print函数
function print<T>(iterator: Iterable<T>): void {
    for(const item of iterator) {
        console.log(item)
    }
}

// contains函数
function contains<T>(iterator: Iterable<T>, value: T): boolean {
    for(const item of iterator) {
        if(item === value) return true
    }
    
    return false
}