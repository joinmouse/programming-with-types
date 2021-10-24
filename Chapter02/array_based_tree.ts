namespace ArrayBasedTree {
  export class Tree {
    // 讲节点存储为一个数值数组，使用undefined表示缺失的节点
    nodes: (number | undefined)[] = [];

    left_child_index(index: number): number {
      return index * 2;
    }

    right_child_index(index: number): number {
      return index * 2 + 1;
    }
    // 为新级别增加容量的时，将数组的大小加倍，并改变原来数组的位置
    add_level() {
      let newNodes: (number | undefined)[] = new Array(
        this.nodes.length * 2 + 1
      );
      for (let i = 0; i < this.nodes.length; i++) {
        newNodes[i] = this.nodes[i];
      }
      this.nodes = newNodes;
    }
  }
}
