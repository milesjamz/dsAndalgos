import { pop, push } from "core-js/core/array"

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
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

    pop() {
        let popped = this.tail
        let newTail = popped.prev
        popped.prev = null
        this.tail = newTail
        newTail.next = null
        this.length --
        return popped
    }

}