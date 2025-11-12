class stack {
    constructor(){
        this.items = []; // stack এর item গুলো রাখার জন্য array
    }
    //0(1)
    push(value){
        this.items.push(value); 
    }
    //0(1)
    pop(){
        if(this.isEmpty()){
             return undefined; // যদি stack খালি থাকে তাহলে undefined রিটার্ন করবে{
        }
            return this.items.pop(); 
    }
    //0(1)
    peek(){
        if(this.isEmpty()){
            return undefined; // যদি stack খালি থাকে তাহলে undefined রিটার্ন করবে
        }
        return this.items[this.items.length - 1]; // stack এর উপরের item টা রিটার্ন করবে
    }
    //0(1)
    isEmpty(){
        return this.items.length ===0 ; // stack খালি কিনা চেক করবে
    }
    //0(n)
    print(){
        console.log(this.items.slice().reverse().join("/")); // stack এর item গুলো উপরে থেকে নিচে পর্যন্ত দেখাবে
    }
}


const myStack = new stack();
myStack.push(10); // stack এ 10 যোগ করা
myStack.push(20); // stack এ 20 যোগ করা
myStack.push(30); // stack এ 30 যোগ করা
myStack.print(); // Output: 30/20/10