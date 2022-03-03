class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        if (newNode.val > this,root,val && this.root.right) {
            this.insert(this.root.right)
        }
        if (!this.root.left) this.root.left = newNode
    }
}