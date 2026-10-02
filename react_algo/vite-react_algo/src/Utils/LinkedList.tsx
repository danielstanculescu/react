class Node<T>{

    data: T;
    next: Node<T> | null;

    constructor(data: T){
        this.data = data;
        this.next = null;
    }
}

export class LinkedList<T> {

    private head: Node<T> | null;
    private size: number;


    constructor (){
        this.head = null;
        this.size = 0;
    }

    public add = (data: T): void => {
        
        let newNode: Node<T> = new Node<T>(data);
        if(this.size === 0){
            this.head = newNode;
        }
        else{
            let current: Node<T>|null = this.head;
            while(current !== null && current.next !== null){
                current = current.next;
            }

            if(current !== null){
                current.next = newNode;
            }
        }
        
        this.size++;
    }

    public remove(data: T): boolean {
        if (this.size === 0){
            return false;
        }
        
        if(this.head?.data === data){
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current: Node<T>|null = this.head;
        let savePrevious: Node<T>|null = null;
        while(current !== null && current.data !== data){
            savePrevious = current;
            current = current.next;
        }

        if(current===null){
            return false;
        }

        // will not occur, just for typing error
        if(savePrevious === null){
            return false;
        }

        savePrevious.next = current.next;
        this.size--;
        return true;
    }

    public get(index: number): T|null {
        if (this.size === 0){
            return null;
        }
        
        let current: Node<T>|null = this.head;
        let i: number = 0;
        
        if(current === null)
            return null;
        while(current !== null){
            if(index === i){
                return current.data;
            }
            current = current.next;
            i++;
        }
        return null;
    }


    public display(){
        let current: Node<T>|null = this.head;
        while(current !== null){
            console.log(current.data + " -> ");
            current = current.next;
        }
    }

    public getSize(): number {
        return this.size;
    }

    public toString(): string {
        let ret: string = "";
        let current: Node<T>|null = this.head;
        while(current !== null){
            ret += current.data + " -> ";
            current = current.next;
        }

        return ret;
    }

}