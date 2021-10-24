namespace LinkedList {
  // Node节点
  class NumberListNode {
    value: number;
    next: NumberListNode | undefined;

    constructor(value, next) {
      this.value = value;
      this.next = undefined;
    }
  }
  export class NumberListedList {
    // 尾节点
    private tail: NumberListNode = {
      value: Number.MIN_SAFE_INTEGER,
      next: undefined,
    };
    // 头节点
    private head: NumberListNode = this.tail;
    // 获取给定索引位置的节点，必须从头节点开始沿着next引用前进
    at(index: number): number {
      let result: NumberListNode | undefined = this.head.next;
      while (index > 0 && result !== undefined) {
        result = result.next;
        index--;
      }
      if (result == undefined) throw new RangeError();
      return result.value;
    }
    // 追加元素
    append(value: number) {
      this.tail.next = {
        value: value,
        next: undefined,
      };
      this.tail = this.tail.next;
    }
  }
}
