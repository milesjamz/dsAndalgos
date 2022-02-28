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

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if(index < 0 || index > this.length) return null
        let currNode, counter;
        if (index < this.length / 2) {
            counter = 0
            courrNode = this.head
            while (counter < index) {
                currNode = currNode.next
                counter ++
            }
        } else {
            counter = this.length-1
            currNode = this.tail
            while (counter > index) {
                currNode = currNode.prev
                counter--
            }
        }
        return currNode.val
    }

    set(index,val) {
        let setNode = this.get(index)
        if (setNode != null) {
        this.val = val
        return true
        }
        return false
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }


}