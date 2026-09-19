import { Objects } from "./Objects";

class Node<K, V> {

    hash: number;
    key: K;
    value: V;

    constructor(hash: number, key: K, value: V){
        this.hash = hash;
        this.key = key;
        this.value = value;
    }
}

export class HashMap<K, V> {

    private DEFAULT_INITIAL_CAPACITY: number = 1<<4; //aka 16

    private threshold: number = 0;

    private MAXIMUM_CAPACITY = 100;  // 1 << 30

    private table: Node<K,V>[] = [];

    private size: number = 0;

    constructor();
    constructor(initialCapacity: number);

    constructor(initialCapacity?: number){
        if(initialCapacity !== undefined){
            if(initialCapacity < 0){
                console.log("Illegal initial capacity");
            }

            this.threshold = this.tableSizeFor(initialCapacity);
        }
    }

    private tableSizeFor(cap: number): number {
        const n: number = -1 >>> this.numberOfLeadingZeros(cap - 1);
        
        return (n < 0) ? 1 : n + 1;
    }

    private numberOfLeadingZeros(i: number){
        if(i <= 0){
            return i === 0 ? 32 : 0;
        }
        let n: number = 31;
        if (i >= 1 << 16) { n -= 16; i >>>= 16; }
        if (i >= 1 <<  8) { n -=  8; i >>>=  8; }
        if (i >= 1 <<  4) { n -=  4; i >>>=  4; }
        if (i >= 1 <<  2) { n -=  2; i >>>=  2; }
        
        return n - (i >>> 1);
    }
    

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.getSize() === 0;
    }

    private hash(key: K): number {
        return Objects.hashCode(key);
    }

    public get = (key: K): V|undefined => {
        let e: Node<K,V>|undefined;
        return (e = this.getNode(key)) === undefined ? undefined : e.value;
    }

    public getNode = (key: K): Node<K,V>|undefined => {
        
        let tab: Node<K,V>[];
        let first: Node<K,V>;
        let n: number;
        let hash: number;
        let k: K;

        if ( (tab = this.table) !== undefined && 
             (n = tab.length) > 0 && 
             (first = tab[(n - 1) & (hash = this.hash(key))]) !== undefined ){

            if (first.hash === hash && ((k = first.key) === key || (key !== undefined && key == k))) {   // == is used as equals
                return first;
            }
        }

        return undefined;
    }

    public put = (key: K, value: V) : V|undefined => {
        return this.putVal(this.hash(key), key, value);
    }

    private putVal = (hash: number, key: K, value: V): V|undefined => {
        let tab: Node<K,V>[];
        let n: number;
        let i: number;
        let p: Node<K,V>;

        tab = this.table;
        n = tab.length;
        //console.log("[PUT] table length " + n);

        if(tab === undefined || n === 0){
            tab = this.resize();
            n = tab.length;
        }
        
        i = (n - 1) & hash;
        //console.log("[PUT] i " + i);
        p = tab[i];
        if (p === undefined){
            tab[i] = this.newNode(hash, key, value);
        }
        else{
            let e:Node<K,V>|undefined;
            let k: K;
            if(p.hash === hash && ((k=p.key) === key || (key !== undefined && key == k))){   // == is used as equals
                e = p;
            }
            
            if(e !== undefined){
                const oldValue: V = e.value;
                e.value = value;
                return oldValue;
            }
        }

        if(++this.size > this.threshold){
            this.resize();
        }
        return undefined;
    }

    private resize = (): Node<K,V>[] => {
        let oldTab: (Node<K,V>|undefined)[] = this.table;
        const oldCap: number = (oldTab === undefined) ? 0 : oldTab.length;
        const oldThr: number = this.threshold;

        let newCap: number = 0;
        let newThr: number = 0;

        if(oldCap > 0){
            if((newCap = oldCap << 1) < this.MAXIMUM_CAPACITY && oldCap >= this.DEFAULT_INITIAL_CAPACITY){
                newThr = oldThr << 1;   // double threshold
            }
        }
        else if(oldThr > 0){  // initial capacity was placed in threshold
            newCap = oldThr;
        }
        else{
            newCap = this.DEFAULT_INITIAL_CAPACITY;
            newThr = 0.75 * this.DEFAULT_INITIAL_CAPACITY;
        }
        //console.log("newThr: " + newThr);
        
        this.threshold = newThr;

        let newTab: Node<K,V>[] = Array<Node<K,V>>(newCap);
        this.table = newTab;
        
        if(oldTab !== undefined){
            for (let j = 0; j < oldCap; ++j) {
                let e: Node<K, V>|undefined;
                if((e = oldTab[j]) !== undefined){
                    oldTab[j] = undefined;
                    newTab[e.hash & (newCap - 1)] = e;
                }
            }
        }

        return newTab;
    }

    public remove(key: K): V|undefined {
        let e: Node<K,V>|undefined;
        return (e = this.removeNode(this.hash(key), key)) === undefined ? undefined : e.value;
    }

    private removeNode(hash: number, key: K): Node<K,V>|undefined {

        let tab: (Node<K,V>|undefined)[];
        let p: Node<K,V>|undefined;
        let n: number;
        let index: number;
        
        if ( (tab = this.table) !== undefined && 
                (n = tab.length) > 0 && 
                (p = tab[index = (n - 1) & hash]) !== undefined ){
            
            let node: Node<K,V>|undefined = undefined;
            let k: K;

            if (p.hash === hash &&
                    ((k = p.key) === key || (key !== undefined && key == k))){      // == is unsed as equals

                node = p;
            }

            if(node !== undefined){
                if(node === p){
                    tab[index] = undefined;
                }
                --this.size;
            }
        }

        return undefined;
    }

    private newNode(hash: number, key: K, value: V): Node<K,V> {
        return new Node<K,V>(hash, key, value);
    }


    /*
    private getBucketIndex = (key: K): number => {
        const hashCode: number = this.hashCode(key);
        let index = hashCode % this.numBuckets;
        // key.hashCode() could be negative.
        if(index < 0){
            index = index * (-1);
        }
        return index;
    }

    private get = (key: K): V|null => {

        let value: V|null = null;
        return value;
    }

    public put = (key: K, value: V): void => {

        console.log("start");
        // Find head of chain for given key
        const bucketIndex: number = this.getBucketIndex(key);
        console.log("bucketIndex "  + bucketIndex);
        const hashCode: number = this.hashCode(key);
        console.log("hashCode " + hashCode);

        let head:  Node<K, V>|null = this.bucketList.get(bucketIndex);

        // Check if key is already present
        while ( head !== null ){
            if(head.key == key && head.hashCode === hashCode){
                head.value = value;
                return;
            }
            head = head.next;
        }

        // insert key in chain
        this.size++;

        head = this.bucketList.get(bucketIndex);
        let newNode: Node<K,V> = new Node<K,V>(key, value, hashCode);
        newNode.next = head;
        this.bucketList.add(newNode);

        if((1.0 * this.size) / this.numBuckets >= 0.7) {
            console.log("resizing");
            let temp: LinkedList<Node<K,V>|null> = this.bucketList;
            this.bucketList = new LinkedList<Node<K,V>|null>();
            this.numBuckets = 2 * this.numBuckets;
            this.size = 0;
            for (let index = 0; index < this.numBuckets; index++) {
                this.bucketList.add(null);
            }

            for (let index = 0; index < temp.getSize(); index++) {
                let headNode: Node<K,V>|null = temp.get(index);
                while(headNode !== null){
                    this.put(headNode.key, headNode.value);
                    headNode = headNode.next;
                }
            }
        }
            
    }

    public showAll(): void{
        console.log("size: " + this.bucketList.getSize());
        for (let index = 0; index < this.bucketList.getSize(); index++) {
            let headNode: Node<K,V>|null = this.bucketList.get(index);
            
            console.log(headNode);
            if(headNode !== null){
                console.log("key:" + headNode.key + " value: " + headNode.value);
            }
                
            
            
        }
    }
        */
}