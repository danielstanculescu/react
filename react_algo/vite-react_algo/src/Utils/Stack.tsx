export class Stack<Item> {
    private items: (Item |null)[];
    private size: number;
    private capacity: number;

    constructor(capacity: number){
        this.capacity = capacity;
        this.size = 0;
        this.items = Array<Item>(capacity);
    }

    public push = (item: Item): void => {
        if(this.size === this.capacity){
            console.log("Stack Overflow");
            return;
        }
        this.items[this.size++] = item;
    }

    public pop(): Item | null {

        if(this.size === 0){
            console.log("stack is empty");
            return null;
        }
        
        const item: Item|null = this.items[--this.size];
        
        this.items[this.size] = null;

        return item;
    }

    public peek(): Item|null {
        if(this.size === 0){
            console.log("stack is empty");
            return null;
        }

        return this.items[this.size - 1];
    }

    public isEmpty = (): boolean => {
        return (this.size === 0);
    }

    public getSize(): number {
        return this.size;
    }

    // the same code as peek
    public getFirst(): Item|null {
        if(this.size === 0){
            console.log("stack is empty");
            return null;
        }

        return this.items[this.size - 1];
    }

    public getLast(): Item|null {
        
        if(this.size === 0){
            console.log("stack is empty");
            return null;
        }
        return this.items[0];
    }
}