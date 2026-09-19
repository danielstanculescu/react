import { unstable_batchedUpdates } from "react-dom";
import { Objects } from "./Objects";

class Node<K, V> {
    
    hash: number;
    key: K;
    value: V;
    next: Node<K,V>|undefined;

    constructor(hash: number, key: K, value: V){
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = undefined;
    }
}

export class SimpleHashMapSeparateChaining<K, V> {
    
    public size: number;
    public threshold: number;
    public INITIAL_CAPACITY: number = 10;
    public LOAD_FACTOR: number = 0.7;

    public table: Node<K,V>[];

    constructor() {
        this.threshold = this.INITIAL_CAPACITY;
        this.size = 0;
        this.table = [];
    }

    public hash(key: K): number{
        // use of hashCode of an object (string, number, etc)
        return  Objects.hashCode(key) % this.threshold;
    }

    public put(key: K, value: V): V|undefined {
        return this.putVal(this.hash(key), key, value);
    }
    public putVal(hash: number, key: K, value: V): V|undefined {
        
        let tab: Node<K,V>[];
        let n: number;

        tab = this.table;
        n = tab.length;


        // prima data -> init table with initial capacity
        if(tab === undefined || n === 0){
            tab = this.resize();
            n = tab.length;
        }

        // a n a oara, fac codul, apoi calculez pt o eventuala resize
        
        const index: number = hash % n;

        const p: Node<K,V> = tab[index] ;

        if(p === undefined){
            tab[index] = new Node(hash, key, value);  // the node next is undefined
        }
        else{
            // the same key -> replace the key, value, return previous value associated with the key
            if(p.key === key && p.hash === hash && p.key == key){        // equals key types
                let e: Node<K,V>;
                let oldValue: V; 
                e = p;
                oldValue = e.value;
                e.value = value;
                return oldValue;
            }
            // not the same key -> add a new node with key value in the list, don't resize
            else{
                let e: Node<K,V>;
                e = new Node(hash, key, value);
                p.next = e;
            }
        }

        if(++this.size / this.threshold > this.LOAD_FACTOR)
        {
            this.threshold = this.threshold * 2;
            tab = this.resize();
        }

        return undefined;
    }

    private resize(): Node<K,V>[] {
        
        let newTab: Node<K,V>[];
        let n: number;

        n = this.table.length;
        
        newTab = Array(this.threshold);

        for (let index = 0; index < this.table.length ; index++) {
            newTab[index] = this.table[index];
        }

        this.table = newTab;

        return newTab;
    }

    // return the value of key
    public get(key: K): V|undefined {

        let tab: Node<K,V>[];
        let N: number;
        const hash: number = this.hash(key);

        if(this.size === 0){
            return undefined;
        }

        tab = this.table;
        N = tab.length;

        let p: Node<K,V>;

        let index: number = hash % N;
        p = tab[index];
        
        if(p === undefined){
            return undefined;
        }
        else{
            // value found
            if(p.key === key && p.hash === hash && p.key == key){
                return p.value;
            }
            else{
                if(p.next !== undefined){
                    let current: Node<K,V>|undefined = p.next;
                    while(current !== undefined){
                        if(current.key === key && current.hash === hash && current.key == key){
                            return current.value;
                        }
                        current = p.next;
                    }
                }
            }
        }

        return undefined;
    }

    public remove(key: K): V|undefined {

        let tab: (Node<K,V>|undefined)[];
        let N: number;

        tab = this.table;
        N = tab.length;

        const hash: number = this.hash(key);

        if(this.size === 0){
            return undefined;
        }

        let p: Node<K,V>|undefined;

        let index: number = hash % N;
        p = tab[index];

        if(p === undefined){
            return undefined;
        }
        else{
            if(p.key === key && p.hash === hash && p.key == key){
                

                // check if there are other nodes linked to it ? -> shift
                if(p.next !== undefined){
                    let f: Node<K,V>|undefined = p.next;
                    let oldValue: V = p.value;
                    tab[index] = f;
                    
                    return oldValue;
                }
                else{
                    let oldValue: V = p.value;
                    tab[index] = undefined;

                    if(--this.size / this.threshold < (this.LOAD_FACTOR / 2))
                    {
                        this.threshold = this.threshold / 2;
                        tab = this.resize();
                    }
                    return oldValue;
                }
            }
            // index OK search in the list the key
            else{
                if(p.next !== undefined){
                    let current: Node<K,V>|undefined = p.next;
                    while(current !== undefined){
                        if(current.key === key && current.hash === hash && current.key == key){
                            return current.value;
                        }
                        current = p.next;
                    }
                }
            }
        }

        return undefined;
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }
}