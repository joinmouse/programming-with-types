import { Iterable, Iterator, IteratorRes } from './interface'

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

class LinkedListIterator<T> implements Iterator<T> {
    private head: LinkedListNode<T>
    private current: LinkedListNode<T> | undefined

    constructor(head: LinkedListNode<T>) {
        this.head = head
        this.current = this.current
    }
    next(): IteratorRes<T> {
        if(!this.current) {
            return {
                done: true,
                value: this.head.value
            }
        }

        const result: T = this.current.value  // result存储当前节点
        this.current = this.current.next

        return {
            done: false,
            value: result
        }
    }
}