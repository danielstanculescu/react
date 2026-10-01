export class MinHeapGeneric<T> {

    private table: (T|undefined)[] = [];
    private size: number = 0;

    
    private compareFn: (a: T, b: T) => number;
 
    // generic iterator
    constructor(compareFn: (a: T, b: T) => number) {
        this.compareFn = compareFn;
    }
    

    public add(value: T): void{

        let tab: (T|undefined)[] = this.table.slice();
        let N: number = tab.length;

        if(this.size === N){
            tab = this.resize();
        }

        tab[this.size] = value; 

        this.bubbleUp(tab, this.size);

        ++this.size;

        this.table = tab.slice();
    }

    /*
    Removing the smallest element (the root) from a Min-Heap involves the following steps:

    Replace the root (or the element to be deleted) with the last element in the heap.
    Remove the last element from the heap, since it has been moved to the root.
    Heapify-down: The element now at the root may violate the Min-Heap property, 
        so perform heapify starting from the root to restore the heap property.
    */

    public pop(): T|undefined {

        let tab: (T|undefined)[] = this.table.slice();

        if(tab.length === 0){
            return undefined;
        }
        
        const ret: T|undefined = tab[0];

        this.swapLocalVersionWithUndefinedValues(tab, 0, this.size - 1);
        
        tab[this.size - 1] = undefined;

        --this.size;

        this.heapifyVersionWithUndefinedValues(tab, this.size, 0);

        if(this.size === 0 && this.size / tab.length <= 0.5)
            tab = this.resizeDown();

        this.table = tab.slice();
        
        return ret;
    }

    public peek() : T|undefined {
        return this.table[0];
    }

    public isEmpty(): boolean{
        return this.size === 0;
    }

    private resize(): (T|undefined)[] {

        let newTab: (T|undefined)[];
        let tab: (T|undefined)[] = this.table.slice();

        if(this.size === 0)
            newTab =  Array(1);
        else {
            newTab = Array(this.size * 2);
            for (let index = 0; index < tab.length; index++) {
                newTab[index] = tab[index];
            }
        }

        this.table = newTab.slice();

        return newTab;
    }

    private findParent(index: number): number{
        if(index % 2 === 1){
            return (index - 1) / 2
        }
        else
            return (index - 2) / 2;
    }

    private bubbleUp(tab: (T|undefined)[], index: number): void {

        if(index === 0)
            return;

        const indexParent: number = this.findParent(index);

        const valueIndex: T|undefined = tab[index];
        const valueIndexParent: T|undefined = tab[indexParent];

        if(valueIndex !== undefined && valueIndexParent !== undefined && this.compareFn(valueIndex, valueIndexParent) < 0){
            this.swapLocalVersionWithUndefinedValues(tab, index, indexParent);
            this.bubbleUp(tab, indexParent);
        }
    }

    private resizeDown(): (T|undefined)[] {

        let newTab: (T|undefined)[];
        let tab: (T|undefined)[] = this.table.slice();

        newTab = Array(this.size);
        for (let index = 0; index < newTab.length; index++) {
            newTab[index] = tab[index];
        }

        this.table = newTab.slice();

        return newTab;
    }

    private heapifyVersionWithUndefinedValues(tab: (T|undefined)[], n: number, i: number){

        let smallestIndex: number = i;
        let c1Index: number = 2 * i + 1;
        let c2Index: number = 2 * i + 2;

        let indexValue: T|undefined = tab[smallestIndex];
        let c1Value: T|undefined = tab[c1Index];
        let c2Value: T|undefined =  tab[c2Index];
        

        if(c1Index < n && c1Value !== undefined && indexValue !== undefined && this.compareFn(c1Value, indexValue) < 0){
            smallestIndex = c1Index;
        }

        let newIndexValue: T|undefined = tab[smallestIndex];
        
        if(c2Index < n && c2Value !== undefined && newIndexValue !== undefined && this.compareFn(c2Value, newIndexValue) < 0){
            smallestIndex = c2Index;
        }

        if(smallestIndex !== i){
            this.swapLocalVersionWithUndefinedValues(tab, smallestIndex, i);

            this.heapifyVersionWithUndefinedValues(tab, n, smallestIndex);
        }
    }

    private swapLocalVersionWithUndefinedValues(tab: (T|undefined)[], i: number, j: number){
        let tmp: T|undefined = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }

}