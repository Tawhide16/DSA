class counter {
    constructor(count) {
        this.count = count;
    }

    add(amount) {
    this.count = this.count + amount;
}

print(){
    console.log(this.count)
}

}

const myCounter = new counter(5);
myCounter.add(3);
myCounter.print()



