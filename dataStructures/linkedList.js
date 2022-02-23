class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = null
    }

    push(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
            this.length ++
            return this
    }

    pop() {
        if(!this.head) return undefined
            let currNode = this.head
            let nextNode = currNode.next
            while(nextNode.next) {
                currNode = nextNode
            }
            let poppedNode = nextNode
            this.tail = currNode
            this.tail.next = null
            this.length --
            return poppedNode
    }

    shift() {
        if(!this.head) return undefined
        let currNode = this.head
        this.head = currNode.next
        this.length --
        if (this.length === 0){
            this.tail = null
        }
        return currNode
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
        newNode.next = this.head
        this.head = newNode
        }
        this.length ++
        return this
    }
    get(index) {
        if (index < 0 || index > this.length) return null
        let counter = 0
        let curr = this.head
        while (counter < index) {
            curr = curr.next
            counter ++
        }
        return curr
    }

    set(index,val) {
        let foundNode = get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        } else {
            return false
        }
    }

    
}