---
title: "Singly & Doubly Linked Lists - Stacks and Queues"
date: 2025-01-15
tags:
  - '#data-structures'
  - '#linked-lists'
  - '#stacks'
  - '#queues'
description: "Singly & Doubly Linked Lists - Stacks and Queues"
layout: post.njk
---

# Singly & Doubly Linked Lists - Stacks and Queues
[![](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568036563781_Screenshot+from+2019-09-09+10-42-33.png)](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568036563781_Screenshot+from+2019-09-09+10-42-33.png)
[![](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568036585548_Screenshot+from+2019-09-09+10-42-57.png)](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568036585548_Screenshot+from+2019-09-09+10-42-57.png)
Who it looks like:
[https://visualgo.net/en/list](https://visualgo.net/en/list)

> [!info] Sorting Algorithms Animations  
> These pages show 8 different sorting algorithms on 4 different initial conditions.  
> [https://www.toptal.com/developers/sorting-algorithms](https://www.toptal.com/developers/sorting-algorithms)  
[![](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568126722064_Screenshot+from+2019-09-10+11-45-01.png)](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568126722064_Screenshot+from+2019-09-10+11-45-01.png)
[![](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568231738420_Screenshot+from+2019-09-11+16-55-01.png)](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568231738420_Screenshot+from+2019-09-11+16-55-01.png)
  
## In the end, you can understand the following image
[![](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568291640128_Screenshot+from+2019-09-12+09-33-11.png)](https://paper-attachments.dropbox.com/s_4C0984600F19688D6DD5774660B9F15549A1D47641EB2A249DBB39C711B3012A_1568291640128_Screenshot+from+2019-09-12+09-33-11.png)
```javascript
// Singly linked list:
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        // { head: null, tail: null, length: 0 }
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
            /*
            {
                head: Node { val: 'hello', next: null },
                tail: Node { val: 'hello', next: null },
                length: 1
            }
            */
        } else {
            this.tail.next = newNode
            this.tail = newNode
            /*
            {
                head: Node {
                    val: 'hello',
                    next: Node {
                        val: 'goodby',
                        next: null
                    }
                },
                tail: Node { val: 'goodby', next: null },
                length: 2
            }
            */
        }
        // (hello) -> (goodmay)
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){
        if(!this.head) return undefined
        let current = this.head
        this.head = current.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return current
    }
    unshift(val){
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index) {
            current = current.next
            counter++
        }
        return current
    }
    set(index, value) {
        const foundNode = this.get(index)
        if(foundNode) {
            foundNode.val = value
            return true
        }
    }
    insertInto(index, value) {
        if(index < 0 || index > this.length) return false
        if(index === this.length) {
            this.push(value)
            return true
        }
        if(index === 0) {
            this.unshift(val)
            return true
        }
        const newNode = new Node(value)
        const foundNodeHead = this.get(index - 1)
        const temp = foundNodeHead.next
        foundNodeHead.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index) {
        if(index < 0 || index >= this.length) return false
        if(index === this.length - 1) {
            this.pop()
            return true
        }
        if(index === 0) {
            this.unshift(val)
            return true
        }
        const previousNode = this.get(index - 1)
        const removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return true
    }
    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}
const list = new SinglyLinkedList()
list.push('hello')
list.push('jo')
list.push('goodby')
list.reverse()
console.log(list)
```
  
Doubly-linked-list
```javascript
// I recommend to use Snippets from chrome
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
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        // { head: null, tail: null, length: 0 }
        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        const poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }

    shift() {
        if (!this.head) return undefined
        let current = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = current.next
            this.head.prev = null
            current.next = null
        }
        this.length--
        return current
    }
    unshift(val) {
        const newNode = new Node(val)
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
        if (index < 0 || index >= this.length) return null
        let count, current
        if (index <= this.length / 2) {
            count = 0
            current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while (count !== index) {
                current = current.prev
                count--
            }
        }
        return current
    }
    set(index, val) {
        let current = this.get(index)
        if (current !== null) {
            current.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.unshift(val)
        let newNode = new Node(val)
        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.shift(val)
        if (index + 1 === this.length) return this.pop()
        let removeNode = this.get(index)
        removeNode.prev.next = removeNode.next
        removeNode.next.prev = removeNode.prev
        removeNode.next = null
        removeNode.prev = null
        this.length--
        return removeNode
    }
}
const list = new DoublyLinkedList()
list.push('hello')
list.push('world')
list.insert(1, 'joao')
list.remove(2)
console.log(list)
```