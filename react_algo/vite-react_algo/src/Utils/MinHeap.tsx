/*-----

A heap is a binary tree-based data structure that adheres to a heap property.
In a heap, every parent node has a specific relationship with its children: in a max-heap,
each parent is greater than or equal to its children, while in a min-heap, each parent is less than or equal to its children. 

------*/

export class MinHeap {
    private table:Array<number|undefined> = [];
    private size: number = 0;

    constructor(){

    }

    /*
    The insertion operation in a min-heap involves the following steps:

    Add the new element to the end of the heap, in the next available position in the last level of the tree.
    Compare the new element with its parent. If the parent is greater than the new element, swap them.
    Repeat step 2 until the parent is smaller than or equal to the new element, or until the new element reaches the root of the tree.
    */

    public add(value: number): void{

        let tab: (number|undefined)[] = this.table.slice();
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

    public pop(): number|undefined {

        let tab: (number|undefined)[] = this.table.slice();

        if(tab.length === 0){
            return undefined;
        }
        
        const ret: number|undefined = tab[0];

        this.swapLocalVersionWithUndefinedValues(tab, 0, this.size - 1);
        
        tab[this.size - 1] = undefined;

        --this.size;

        this.heapifyVersionWithUndefinedValues(tab, this.size, 0);

        if(this.size / tab.length <= 0.5)
            tab = this.resizeDown();

        this.table = tab.slice();
        
        return ret;
    }

    public peek() : number|undefined {
        return this.table[0];
    }

    public transformMinHeap(tab: number[]): number[] {
        let newTab: number[] = tab;
        let n: number = newTab.length;

        for (let index = Math.floor(n / 2) - 1; index >= 0; index--) {
            this.heapify(newTab, n, index);
            
        }
        return newTab;
    }

    // it's a Min Heap -> descending sort
    public heapSort(tab: number[]): number[] {

        let newTab: number[] = tab;
        let n :number = newTab.length;

        this.transformMinHeap(newTab);

        for (let index = n-1 ; index > 0; index--) {
            this.swapLocal(newTab, 0, index);

            this.heapify(newTab, index, 0);
        }

        return newTab;
    }

    private findParent(index: number): number{
        if(index % 2 === 1){
            return (index - 1) / 2
        }
        else
            return (index - 2) / 2;
    }

    private bubbleUp(tab: (number|undefined)[], index: number): void {

        if(index === 0)
            return;

        const indexParent: number = this.findParent(index);

        const valueIndex: number|undefined = tab[index];
        const valueIndexParent: number|undefined = tab[indexParent];

        if(valueIndex !== undefined && valueIndexParent !== undefined && valueIndex < valueIndexParent){
            this.swapLocalVersionWithUndefinedValues(tab, index, indexParent);
            this.bubbleUp(tab, indexParent);
        }
    }
    
    private resize(): (number|undefined)[] {

        let newTab: (number|undefined)[];
        let tab: (number|undefined)[] = this.table.slice();

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

    private resizeDown(): (number|undefined)[] {

        let newTab: (number|undefined)[];
        let tab: (number|undefined)[] = this.table.slice();

        newTab = Array(Math.floor(this.size / 2));
        for (let index = 0; index < tab.length; index++) {
            newTab[index] = tab[index];
        }

        this.table = newTab.slice();

        return newTab;
    }

    private heapify(tab: number[], n: number, i: number){

        let smallestIndex: number = i;
        let c1Index: number = 2 * i + 1;
        let c2Index: number = 2 * i + 2;

        if(c1Index < n && tab[c1Index] < tab[smallestIndex]){
            smallestIndex = c1Index;
        }

        if(c2Index < n && tab[c2Index] < tab[smallestIndex]){
            smallestIndex = c2Index;
        }

        if(smallestIndex !== i){
            this.swapLocal(tab, smallestIndex, i);

            this.heapify(tab, n, smallestIndex);
        }
    }

    private heapifyVersionWithUndefinedValues(tab: (number|undefined)[], n: number, i: number){

        let smallestIndex: number = i;
        let c1Index: number = 2 * i + 1;
        let c2Index: number = 2 * i + 2;

        let indexValue: number|undefined = tab[smallestIndex];
        let c1Value: number|undefined = tab[c1Index];
        let c2Value: number|undefined =  tab[c2Index];
        

        if(c1Index < n && c1Value !== undefined && indexValue !== undefined && c1Value < indexValue){
            smallestIndex = c1Index;
        }
        
        if(c2Index < n && c2Value !== undefined && indexValue !== undefined && c2Value < smallestIndex){
            smallestIndex = c2Index;
        }

        if(smallestIndex !== i){
            this.swapLocalVersionWithUndefinedValues(tab, smallestIndex, i);

            this.heapifyVersionWithUndefinedValues(tab, n, smallestIndex);
        }
    }

    // the undefined is for pop method, but it should never occur (the tab[i] === undefined)
    private swapLocal(tab: number[], i: number, j: number){
        let tmp: number = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }

    private swapLocalVersionWithUndefinedValues(tab: (number|undefined)[], i: number, j: number){
        let tmp: number|undefined = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
}