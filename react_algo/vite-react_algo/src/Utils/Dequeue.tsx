class Node<Item> {
    item: Item;
    next: Node<Item> | null = null;
    prev: Node<Item> | null = null;
    
    constructor(item: Item){
        this.item = item;
    }
}

export class Dequeue<Item> {

    private first: Node<Item> | null = null;
    private last: Node<Item> | null = null;
    private N: number = 0;

    constructor() {
        
    }

    public addFirst = (item: Item): void => {

        let newFirst: Node<Item> = new Node(item);
        newFirst.next = this.first;
        newFirst.prev = null;
        this.first = newFirst;
        if(this.N === 0){
            this.last = this.first;
        }
        else{
            if(newFirst.next){
                newFirst.next.prev = newFirst;
            }
        }
        this.N++;
    }

    public addLast = (item: Item): void => {

        let newLast: Node<Item> = new Node(item);
        newLast.next = null;
        newLast.prev = this.last;
        this.last = newLast;
        if (this.N === 0){
            this.first = this.last;
        }
        else{
            if(newLast.prev){
                newLast.prev.next = newLast;
            }
        }
        this.N++;
    }

    public removeFirst = (): Item | undefined => {

        if(this.N === 0){
            return;
        }
        
        this.N--;
        
        const ret: Item | undefined = this.first?.item;
        
        if(this.first){
            let newFirst: Node<Item> | null = this.first.next;
            this.first = newFirst;

            if(this.N === 0){
                this.last = null;
            }
            else{
                if(this.first){
                    this.first.prev = null;
                }
            }
        }
        return ret;
    }

    public removeLast = (): Item | undefined => {

        if(this.N === 0){
            return;
        }
        
        this.N--;
        
        const ret: Item | undefined = this.last?.item;

        if(this.last){
            let lastPrev: Node<Item> | null = this.last?.prev;
            if(this.N === 0){
                this.first = null;
            }
            else{
                if(lastPrev){
                    lastPrev.next = null;
                }
            }

            this.last = lastPrev;
        }
        
        return ret;
    }

    public getFirst = (): Item | undefined => {
        return this.first?.item;
    }

    public getLast = (): Item | undefined => {
        return this.last?.item;
    }

    public iterator(): Iterator<Item> {
        let current: Node<Item> | null = this.first;

        return {
            next():  IteratorResult<Item> {
                if(current === null){
                    return { done: true, value: undefined};
                }

                const item: Item = current.item;
                current = current.next;

                return {done: false, value: item}
            }
        };
    }

}
