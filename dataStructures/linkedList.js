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
            return newNode
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
        let nextNode = currNode.next
        currNode.next = null
        this.head = nextNode
        this.length --
        return currNode
    }
}