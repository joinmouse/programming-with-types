export type IteratorRes<T> = {
    done: boolean
    value: T
}

export interface Iterator<T> {
    next(): IteratorRes<T>
}

export interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>
}

export class BinaryTreeNode<T> {
    value: T
    left: BinaryTreeNode<T> | undefined
    right: BinaryTreeNode<T> | undefined

    constructor(value: T) {
        this.value = value
    }
}

class LinkedListNode<T> implements Iterable<T> {
    value: T
    next: LinkedListNode<T> | undefined

    constructor(value: T) {
        this.value = value
    }

    [Symbol.iterator](): Iterator<T>{
        return new LinkedListIterator<T>(this)
    }
}