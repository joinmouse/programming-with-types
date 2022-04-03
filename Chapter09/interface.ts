export type IteratorRes<T> = {
    done: boolean
    value: T
}
export interface Iterator<T> {
    next(): IteratorRes<T>
}