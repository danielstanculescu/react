// Implement an algorithm to find the k-th to last element in a singly linked list

export class LinkedListNode {
    
    data: number;
    next: LinkedListNode | null;

    constructor(data: number){
        this.data = data;
        this.next = null;
    }
}


export function findKth_1Solution(k: number, node: LinkedListNode|null): number|null {

    let current = node;

    for(let i=0; i<k; i++){
        if(node !== null){
            node = node.next;
        }
    }
    
    while(node !== null){
        node = node.next;
        if(current!== null)
            current = current.next;
    }
    
    if(current !== null)
        return current.data;

    return null;
}


export function arrayToList(arr: number[]): LinkedListNode|null {

    if(arr === null || arr.length === 0)
        return null;

    let head: LinkedListNode|null = new LinkedListNode(arr[0]);
    let current: LinkedListNode|null  = head;

    for(let i=1; i<arr.length; i++){
        current.next = new LinkedListNode(arr[i]);
        current = current?.next;
    }

    return head;
}

export function listToArray (node: LinkedListNode|null): number[]{
    
    let arr: number[] = [];

    let i=0;
    while(node !== null){
        arr[i] = node.data;
        node = node.next;
        i++;
    }

    return arr;
}

export function toString(arr: number[]){
    let s: string = "";

    for(let i=0; i<arr.length; i++){
        s+= arr[i] + " ";
    }

    return s;
}

