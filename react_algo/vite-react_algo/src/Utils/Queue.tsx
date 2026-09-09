export class Queue<T> {

    private items: T[];
    private capacity: number;
    private size: number;

    constructor(capacity: number) {
        this.capacity = capacity;

        this.items = Array(capacity);

        this.size = 0;
    }

    // enqueue      c, b, a
    // dequeue      a, b, c

    public enqueue(item: T): void {
        if(this.size === this.capacity) {
            console.log("Queue Overflow")
            return;
        }

        this.items[this.size++] = item;
    }

    public dequeue(): void{
        if(this.size === 0){
            console.log("Queue Undeflow");
            return;
        }

        for (let index = 1; index < this.size; index++) {
            this.items[index - 1] = this.items[index];
        }
        this.size--;
    }

    public getFront = (): T | null => {
        if(this.size === 0){
            console.log("Queue empty");
            return null;
        }

        return this.items[0];
    }

    public getRear (): T | null {
        if(this.size === 0){
            console.log("Queue empty");
            return null;
        }
        return this.items[this.size - 1];
    }

    public isEmtpy = (): boolean => {
        return (this.size === 0);
    }

    public isFull = (): boolean => {
        return (this.size === this.capacity);
    }

}