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
            let newTail = currNode
            while(currNode.next) {
                newTail = currNode
                currNode = currNode.next
            }
            this.tail = newTail
            this.tail.next = null
            this.length --
            if (this.length === 0){
                this.head = null
                this.tail = null
            }

            return currNode
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
        console.log(curr)
        return curr
    }

    set(index,val) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        } else {
            return false
        }
    }

    insert(index,val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        let nodeBefore = this.get(index-1)
        let newNode = new Node(val)
        let nextNext = newBefore.next
        nodeBefore.next = newNode
        newNode.next = nextNext
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.pop();
        if (index === 0) return !!this.shift()
        let nodeBefore = this.get(index-1)
        let removed = nodeBefore.next
        nodeBefore.next = removed.next
        this.length --
        return removed
    }

    reverse() {
        if (this.length <= 1) return this
        let currNode = this.head
        this.head = this.tail
        this.tail = currNode
        let next
        let prev = null
        while(currNode) {
            next = currNode.next
            currNode.next = prev
            prev = currNode
            currNode = next
        }
        return this
    }

    print() {
        let arr = []
        let curr = this.head
        while(curr) {
            arr.push(curr.val)
            curr = curr.next
        }
        console.log(arr)
    }
}