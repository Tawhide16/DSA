// ================================
// 🟢 Node ক্লাস — linked list এর প্রতিটি অংশ
// ================================
class Node {
  constructor(value) {
    // এই node এর মধ্যে data থাকবে
    this.value = value;

    // next এর মধ্যে পরবর্তী node এর ঠিকানা থাকবে, শুরুতে null
    this.next = null;
  }
}

// ================================
// 🟢 LinkedList ক্লাস — পুরো linked list এর ম্যানেজার
// ================================
class LinkedList {
  constructor() {
    // linked list শুরুতে খালি, তাই head null
    this.head = null;

    // linked list শুরুতে খালি, তাই tail null
    this.tail = null;

    // linked list এ node সংখ্যা
    this.length = 0;
  }

  // ================================
  // ➕ append(value) — linked list এর শেষে node যোগ করা
  // ================================
  append(value) {
    // নতুন node তৈরি
    const newNode = new Node(value);

    // যদি linked list খালি হয়
    if (this.head === null) {
      this.head = newNode; // head হবে নতুন node
      this.tail = newNode; // tail হবে নতুন node
    } else {
      // যদি linked list খালি না হয়
      this.tail.next = newNode; // পুরোনো tail এর next হবে নতুন node
      this.tail = newNode; // tail কে আপডেট করি নতুন node দিয়ে
    }

    // linked list এর length ১ বৃদ্ধি
    this.length++;

    // পুরো linked list return করি (chainable হয়)
    return this;
  }

  // ================================
  // ⬅️ prepend(value) — linked list এর শুরুতে node যোগ করা
  // ================================
  prepend(value) {
    // নতুন node তৈরি
    const newNode = new Node(value);

    // যদি linked list খালি হয়
    if (this.head === null) {
      this.head = newNode; // head হবে নতুন node
      this.tail = newNode; // tail হবে নতুন node
    } else {
      // যদি linked list খালি না হয়
      newNode.next = this.head; // নতুন node এর next হবে পুরোনো head
      this.head = newNode; // head কে আপডেট করি নতুন node দিয়ে
    }

    // linked list এর length ১ বৃদ্ধি
    this.length++;

    // পুরো linked list return করি
    return this;
  }

  // ================================
  // 🏗 insert(index, value) — linked list এর মাঝখানে node যোগ করা
  // ================================
  insert(index, value) {
    // যদি ভুল index হয়
    if (index < 0 || index > this.length) {
      console.error("Index out of bound: ভুল index দিয়েছেন!");
      return undefined;
    }

    // যদি linked list এর শুরুতে ঢোকাতে চাও
    if (index === 0) {
      return this.prepend(value);
    }

    // যদি linked list এর শেষে ঢোকাতে চাও
    if (index === this.length) {
      return this.append(value);
    }

    
    // প্রথমে previous node খুঁজে বের করব
    let count = 0;
    let leadingNode = this.head;

    while (count !== index - 1) {
      leadingNode = leadingNode.next;
      count++;
    }

    // নতুন node তৈরি
    const newNode = new Node(value);

    // নতুন node কে linked list এর সাথে যুক্ত করা
    newNode.next = leadingNode.next; // নতুন node এর next হবে previous node এর পরের node
    leadingNode.next = newNode; // previous node এর next হবে নতুন node

    
    this.length++;

    // পুরো linked list return করি
    return this;
  }

  // ================================
  // ❌ remove(index) — linked list থেকে node remove করা
  // ================================
  remove(index) {
    // যদি ভুল index হয়
    if (index < 0 || index >= this.length) {
      console.error("Index out of bound: ভুল index দিয়েছেন!");
      return undefined;
    }

    // যদি প্রথম node remove করতে চাও
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.next; // head update
      this.length--;
      return removedNode;
    }

    // previous node খুঁজে বের করা
    let count = 0;
    let leadingNode = this.head;

    while (count !== index - 1) {
      l// linked list এর length ১ বৃদ্ধিeadingNode = leadingNode.next;
      count++;
    }

    // remove করা node বের করা
    const removedNode = leadingNode.next;

    // linked list এর link ঠিক করা
    leadingNode.next = removedNode.next;

    // যদি last node remove হয় tail update করা
    if (index === this.length - 1) {
      this.tail = leadingNode;
    }

    this.length--;

    return removedNode;
  }

  // ================================
  // 🖨 print() — linked list কে console এ print করা
  // ================================
  print() {
    const arr = []; // values রাখার জন্য array
    let currentNode = this.head; // linked list head থেকে শুরু

    while (currentNode !== null) {
      arr.push(currentNode.value); // node এর value array তে push
      currentNode = currentNode.next; // পরের node এ যাওয়া
    }

    // linked list কে দেখতে সুন্দরভাবে print করা
    console.log(arr.join(" -> "), "-> null");
  }
}

// ================================
// ✅ Example ব্যবহার
// ================================
const list = new LinkedList();

list.append(10);   // linked list: 10 -> null
list.append(20);   // linked list: 10 -> 20 -> null
list.append(30);   // linked list: 10 -> 20 -> 30 -> null
list.prepend(5);   // linked list: 5 -> 10 -> 20 -> 30 -> null
list.insert(2, 15); // linked list: 5 -> 10 -> 15 -> 20 -> 30 -> null
list.remove(3);     // 20 remove, linked list: 5 -> 10 -> 15 -> 30 -> null

list.print();       // Output: 5 -> 10 -> 15 -> 30 -> null
