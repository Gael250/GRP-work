
//array
const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); 
console.log(isEven(7)); 


function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"



function Node(value) {
    this.value = value;
    this.next = null;
}


const node1 = new Node("First");
const node2 = new Node("Second");
const node3 = new Node("Third");


node1.next = node2;
node2.next = node3;


let current = node1;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}


//stack

const stack = [];

stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack.pop()); // C
console.log(stack.pop()); // B
console.log(stack.pop()); // A



//queue
const queue = [];

// Enqueue (entering bus)
queue.push("Person 1");
queue.push("Person 2");
queue.push("Person 3");

console.log(queue.shift()); 
console.log(queue.shift()); 
console.log(queue.shift()); 
