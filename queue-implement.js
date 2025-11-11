class Queue {
    constructor(){
        this.items = []; // stack এর item গুলো রাখার জন্য array
    }
    //0(1)
    enqueue(value){
        this.items.push(value); // নতুন item stack এর উপরে যোগ করা
    }
    //0(n)
    dequeue(){
        if(this.isEmpty()){
             return undefined; // যদি stack খালি থাকে তাহলে undefined রিটার্ন করবে{
        }
            return this.items.shift(); // stack এর উপরের item টা রিমুভ করে রিটার্ন করবে
    }
    //0(1)
    peek(){
        if(this.isEmpty()){
            return undefined; // যদি stack খালি থাকে তাহলে undefined রিটার্ন করবে
        }
        return this.items[0]; // stack এর উপরের item টা রিটার্ন করবে
    }
    //0(1)
    isEmpty(){
        return this.items.length ===0 ; // stack খালি কিনা চেক করবে
    }
    //0(n)
    print(){
        console.log(this.items.join(",")); // stack এর item গুলো উপরে থেকে নিচে পর্যন্ত দেখাবে
    }
}

// stack class থেকে নতুন object তৈরি
const myStack = new Queue();
myStack.enqueue(10); 
myStack.enqueue(20); // stack এ 20 যোগ করা
myStack.enqueue(30); // stack এ 30 যোগ করা
myStack.print(); // Output: 30/20/10