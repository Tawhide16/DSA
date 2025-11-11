
class counter {
    // Constructor: object তৈরি হওয়ার সময় initial count value সেট করে
    constructor(count) {
        this.count = count; // this.count = object এর count property
    }

    // add method: current count এর সাথে নতুন amount যোগ করে
    add(amount) {
        this.count = this.count + amount; // আগের count + নতুন amount
    }

    // print method: current count console এ দেখায়
    print(){
        console.log(this.count); // বর্তমান count দেখাবে
    }
}

// Class থেকে নতুন object তৈরি
const myCounter = new counter(5); // count এর initial value = 5

// Object এর add method ব্যবহার করে 3 যোগ করা
myCounter.add(3); // count = 5 + 3 = 8

// Object এর print method ব্যবহার করে count দেখানো
myCounter.print(); // Output: 8
