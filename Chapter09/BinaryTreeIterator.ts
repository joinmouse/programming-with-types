import { Iterator, IteratorRes, BinaryTreeNode } from './interface'

// 二叉树迭代
class BinaryTreeIterator<T> implements Iterator<T> {
    private values: T[] = []
    private root: BinaryTreeNode<T>

    constructor(root: BinaryTreeNode<T>) {
        this.root = root
        this.inOrder(root)
    }

    next(): IteratorRes<T> {
        const result: T | undefined = this.values.shift()  //对next的每次调用通过shift从队列中取值

        // 结果为undefined，已经遍历完了，done返回true, 并返回某个默认值
        if(!result) {
            return {
                done: true,
                value: this.root.value
            }
        }

        return {
            done: false,
            value: result
        }
    }
    // 中序遍历二叉树
    private inOrder(node: BinaryTreeNode<T>): void {
        if(node.left !== undefined) {
            this.inOrder(node.left)
        }

        this.values.push(node.value)
        
        if(node.right !== undefined) {
            this.inOrder(node.right)
        }
    }
}