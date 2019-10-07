class Node{
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        var node = new Node(value);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }
       else {
           this.tail.next = node;
           this.tail = node;
           this.tail.next = null;
       }
       this.length++;
       return this;
    }
/* 
# start from the head;
# if there is no node return undefined
# loop through the list until you reach the tail
# set the next of the 2nd to the last node to be null
# set the tail to be the 2nd to the last node;
# decrement the lenght property by 1
# return the value prooperty of the last node
*/
    pop(){
        if(!this.head){
            return undefined;
        }
        var currentNode = this.head;
        var nextNode = this.head.next;
        if(!nextNode){
            this.head = null;
            this.tail = null;
            this.length= 0;
            return currentNode;
        }
        while(nextNode.next){
            currentNode = nextNode;
            nextNode = nextNode.next;
        }

        this.tail = currentNode;
        this.tail.next = null;
        this.length--;
        return nextNode;

        
    }


    // Shift

    /* 
        1. if there isn no node reutn undefinded
        2. store the value of the head on a tempoorty variable 
        3. set the 2nd node from the head to be the head
        3. decreament the length by one
        4. return the temporary variable
    */
    shift(){
        if(!this.head) return undefined;
        var currentNode = this.head;
        this.head = this.head.next;
        this.length--;
        return currentNode;
    }

    // unshift
    /* 
        1. create a node with the given value;
        
        2. set the next propery of the new node to be the head;
        3. set the head to be the new node;
    
    */

    unshift(value){
        var node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
         
        }
        else{
            node.next = this.head;
            this.head = node;
        }
    
        this.length++;
        return this;
    }

    // Get
    /* 
       - Create a function that accepts the postion of the node
       - if the positon is < 0 or > length porperty of the array return undefined
       - loop through the linked list untill you reach the postion and return the 
          value of the node; 
    */

    get(position){
        if(position < 0 || position > this.length) return null;
        if (position === 0) return this.head;
        var current = this.head;
        for(let i = 0 ; i< position; i++){
            current = current.next;
        }
        return current;
    }

    // Set
    /* 
    - write a funciton that accepts two input(positon and value)
    - if the positon is less than zero or greater than lenght property return null
    - loop through the linked list until you reach the postion
    - change the value of the node to the new value;
    
    */

    set(value, positon){
        if(positon< 0 || positon > this.length) return null;
        var current = this.head;
        var counter = 0;
            while(counter < positon){
            current = current.next;
            counter ++;
            }
        current.value = value;
        return true;
    }

    // insert
    /* 
        - create a function that accepts the positon and the value;
        - create a new node
        - if the positon is greater length of the linkedlist or less than zero retun undefined
        - if the head is empyt, set the head to be the new node
        - loop through the linked list until you reach the node at the given postion
           - set he next of the node at the given positon to the new node
             and set the next porpery of the new node to the next node of the node at the gi
             given locaion
        - return true
    */

    insert(value, positon){
      var node = new Node(value);
      if(positon<0||positon>this.length) return false
      if(positon===this.length) this.push(value);
      else if(positon === 0)this.unshift(value);
       else{
      var currentNode = this.get(positon);
      node.next = currentNode.next;
      currentNode.next= node;
      this.length++;
    }
     
       return true;
    }
// positon
/* 
    - create a fucntion that accepts the positon of the node
    - if positon is greater than length or positon is less than zero retunr false
    - if positon is 0, unshift the node
    - if postion equal to length of the linked list use pop 
    - otherwise use get method, to access the node at index-1
      set the 
*/
    remove(positon){
      if(positon<0||positon>this.length) return false
      if(positon===this.length-1) this.pop();
      else if(positon === 0)this.shift();
       else{
        var currentNode = this.get(positon-1);
        var removed = currentNode.next;
        currentNode.next = removed.next; 
        this.length--;
    }
    return removed;
 }
//  reverse 
/* 
    - Swap the head and the tail
    - create a variable called next
    - create a variabe called prev
    - create a varaiable called current
    - set current to be the next node from the head
    - set prev to be the head
    - set next to be what ever the the next node from current
    - loop through the list until you reach null
        set current next to be previous
        set previous to current
        set current to be next  
    - return the list
*/

        reverse(){
            var currentNode = this.head;
            this.head = this.tail;
            this.tail = currentNode;
            var prev = null;
            var nextNode;
        for(let i = 0; i< this.length; i++){
                nextNode = currentNode.next;
                currentNode.next = prev;
                prev = currentNode;
                currentNode = nextNode;
            }
            return this;
        }
    
}
var list = new LinkedList();
list.push('Dawit')
list.push('Ayele')
list.push('Girma')
list.push('WoldeGebreal')
