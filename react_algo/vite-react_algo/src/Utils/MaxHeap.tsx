export class MaxHeap {
    private table:Array<number|undefined> = [];
    private size: number = 0;

    constructor(){

    }

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
    

    public transformMaxHeap(tab: number[]): number[] {
        
        let newTab: number[] = tab;
        let n: number = tab.length;

        for (let index = Math.floor(n / 2) - 1; index >= 0; index--) {
            this.heapify(newTab, n, index);
        }

        return newTab;
    }

    // it's a Max Heap -> ascending sort
    public heapSort(tab: number[]): number[] {

        let newTab: number[] = tab;
        let n: number = newTab.length;

        newTab = this.transformMaxHeap(newTab);
        
        // One by one extract an element from heap
        for (let i = n - 1; i > 0; i--) {

            // Move current root to end
            this.swapLocal(newTab, 0, i)
            
            // Call max heapify on the reduced heap
            this.heapify(newTab, i, 0);
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

        if(valueIndex !== undefined && valueIndexParent !== undefined && valueIndex > valueIndexParent){
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

    private heapify(tab: number[], n: number, index: number): void{
        
        let largestIndex: number = index;

        let c1Index: number = index * 2 + 1;
        let c2Index: number = index * 2 + 2;

        if(c1Index < n && tab[c1Index] > tab[largestIndex]){
            largestIndex = c1Index;
        }

        if(c2Index < n && tab[c2Index] > tab[largestIndex]){
            largestIndex = c2Index;
        }

        if(largestIndex !== index){
            this.swapLocal(tab, largestIndex, index);

            this.heapify(tab, n, largestIndex);
        }
    }

    private heapifyVersionWithUndefinedValues(tab: (number|undefined)[], n: number, i: number){

        let smallestIndex: number = i;
        let c1Index: number = 2 * i + 1;
        let c2Index: number = 2 * i + 2;

        let indexValue: number|undefined = tab[smallestIndex];
        let c1Value: number|undefined = tab[c1Index];
        let c2Value: number|undefined =  tab[c2Index];
        

        if(c1Index < n && c1Value !== undefined && indexValue !== undefined && c1Value > indexValue){
            smallestIndex = c1Index;
        }
        
        if(c2Index < n && c2Value !== undefined && indexValue !== undefined && c2Value > smallestIndex){
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






    // My attempts
    // heapify - max heap a random array
    public heapifyTD(tab: number[]): number[] {

        return this.traverseTD(tab, 0);
    }

    // heapify - max heap a random array
    public heapifyBU(tab: number[]): number[] {

        return this.traverseBU(tab, 0);
    }

    private traverseTD(tab: number[], i: number): number[]{
        
        let indexLeft: number = 2 * i + 1;
        let indexRight: number = 2 * i + 2;
        
        if(indexLeft > tab.length)
            return tab;

        if(indexRight > tab.length)
            return tab;

        if(tab[indexLeft] < tab[i]){
            this.traverseTD(tab, indexLeft);
        }
        else{
            this.heapifyTopDown(tab, tab.length, i);
        }
            
        if(tab[indexRight] < tab[i]){
            this.traverseTD(tab, indexRight);
        }
        else{
            this.heapifyTopDown(tab, tab.length, i);
        }

        return tab;
    }

    private heapifyTopDown(tab: number[], heapSize: number, i: number): number[]{
        let indexLargest: number = i;
        let indexLeft: number = 2 * i + 1;
        let indexRight: number = 2 * i + 2;

        if(indexLeft < heapSize && tab[indexLeft] > tab[indexLargest])
            indexLargest = indexLeft;

        if(indexRight < heapSize && tab[indexRight] > tab[indexLargest])
            indexLargest = indexRight;

        if(indexLargest !== i){
            this.swapLocal(tab, indexLargest, i);
            return this.heapifyTopDown(tab, heapSize, indexLargest);
        }

        return tab;
    }

    private traverseBU(tab: number[], i: number): number[]{
        
        let indexLeft: number = 2 * i + 1;
        let indexRight: number = 2 * i + 2;

        let a: number;
        let b: number;

        if(i >= tab.length){
            return tab;
        }
        if(i === 0 || (a = tab[i]) < (b = tab[this.findParent(i)])){
            this.traverseBU(tab, indexLeft);
            this.traverseBU(tab, indexRight);
        }
        else
            this.bottomUpHeapify(tab, i);

        if(indexLeft > tab.length)
            return tab;

        if(indexRight > tab.length)
            return tab;

        return tab;
    }

    private bottomUpHeapify(tab: number[], i: number): number[]{
        let t: number;
        while(i > 1 && tab[i] > (tab[t = this.findParent(i)])){
            this.swapLocal(tab, i, t);
            i = t;
        }

        return tab;

    }
}