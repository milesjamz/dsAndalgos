import { push } from "core-js/core/array"

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList() {
    constructor() {
        this.head = null
        this.tail = null
        this.length = null
    }

    push(val) {
        let newNode = new Node(val)
        if (this.length = 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            let oldTail = this.tail
            oldTail.next = newNode
            this.tail = oldTail.next
            newNode.prev = oldTail
        }
        this.length++
        console.log(this)
    }
}