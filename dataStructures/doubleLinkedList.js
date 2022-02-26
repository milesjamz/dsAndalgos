// import { pop, push } from "core-js/core/array"

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
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            let oldTail = this.tail
            this.tail = newNode
            newNode.prev = oldTail
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let popped = this.tail
        let newTail = popped.prev
        popped.prev = null
        this.tail = newTail
        newTail.next = null
        this.length --
        return popped
    }

    shift(){
        if(this.length === 0) return undefined
        let shifted = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
        this.head = shifted.next
        shifted.next = null
        newHead.prev = null
        }
        this.length--
        return shifted
    }

}