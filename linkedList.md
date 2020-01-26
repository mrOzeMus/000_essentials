# Linked List Data Structure


On va essayer de refaire nous meme une data structure Linked List en javascript:

```

class Node{
  constructor(data, next=null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head=null;
    this.size=0;
  }
  
  //Insert first Node
  insertFirst(data){
    this.head=new Node(data,this.head);
    this.size++;
    
  }
  
  //Insert Last Node
  insertLast(data){
    let node =new Node(data);
    let current;
    
    // If empty, make head 
    if(!this.head){
      this.head = node;
    }else{
      current=this.head;
      while(current.next){
        current=current.next;
      }
      current.next=node;
    }
    this.size++;
  }
  
  //Insert at index
  insertAt(data,index){
    if(index > 0 && index > this.size){
      return;
    }else{
      
      // if first index
      if(index===0){
        insertFirst(data);
        return;
    }
    
    const node = new Node(data);
    let current, previous;
    
    //set current to first
    current = this.head;
    let count = 0;
    
    while(count < index){
      previous = current;
      count++;
      current = current.next;
    }
    
    node.next= current;
    previous.next=node;
    
    this.size++;
  }
  
  }
  
  //get at index 
  getAt(index){
    let current=this.head;
    let count=0;
    
    while(current){
      if(count === index){
        console.log(current.data);
      }
      count++;
      current=current.next;
    }
    
    return null;
  }
  
  //Remove at inded 
  removeAt(index){
    if(index > 0 && index > this.size){
      return;
    }
    
    let current = this.head;
    let previous;
    let count=0;
    
    //remove first
    if(index ===0){
      this.head = current.next;
    }else{
      while(count < index){
        count++;
        previous=current;
        current=current.next;
      }
      previous.next = current.next;
      
    }
    this.size--;
    
  }
  
  //clear list
  clearList(){
    this.head=null;
    this.size=0;
  }
  
  //print list data
  printListData(){
    let current = this.head;
    while(current){
      console.log(current.data);
      current=current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertLast(400);
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

ll.insertAt(350,3);

ll.printListData();

console.log("getting");
ll.getAt(0);

ll.removeAt(0);
ll.clearList();
console.log("removing");
ll.printListData();
```