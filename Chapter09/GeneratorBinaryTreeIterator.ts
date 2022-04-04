import { BinaryTreeNode } from './interface'

// 使用生成器的二叉树迭代器
function* inOrderIterator<T>(root: BinaryTreeNode<T>): IterableIterator<T> {
    if(root.left) {
        for(const value of inOrderIterator(root.left)) {
            yield value
        }
    }

    yield root.value

    if(root.right) {
        for(const value of inOrderIterator(root.right)) {
            yield value
        }
    }
}