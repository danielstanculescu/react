// write code to remove duplicates from an unsorted linked list
// Follow up: what if a temporary buffer not available?

import { LinkedList } from "../../Utils/LinkedList";

// first version add a new list with no duplicate elements
export function removeDuplicatesFromAnUnsortedLinkedList(list: LinkedList<number>): LinkedList<number>{

    let newList: LinkedList<number> = new LinkedList<number>();

    for(let i=0; i<list.getSize(); i++){
        const element: number|null = list.get(i);

        let found: boolean = false;
        for(let j=0; j<newList.getSize(); j++){
            if(newList.get(j) === element){
                found = true;
                break;
            }
        }
        if(!found){
            if (element !== null){
                newList.add(element);
            }
        }
    }
    return newList;
}


// second version : in a linked list, perform changes -> optimal implementation
class LinkedListNode {
    data: number;
    next: LinkedListNode | null;

    constructor(data: number){
        this.data = data;
        this.next = null;
    }
}

// with buffer
function deleteDups(n: LinkedListNode|null): void {
    let list: LinkedList<number> = new LinkedList<number>();

    let previous: LinkedListNode|null = null;

    while (n !== null) {
        if (list.contains(n.data)) {
            if(previous !== null){
                previous.next = n.next;
            }
        } else {
            list.add(n.data);
            previous = n;
        }
        n = n.next;
    }
}

// without buffer
function deleteDups2(node: LinkedListNode|null): void {
    
    while(node !== null){
        let current: LinkedListNode|null;
        let prev: LinkedListNode|null;

        current = node.next;
        prev = node;
        
        while (current !== null){
            if(current.data === node.data){
                prev.next = current.next;
            }
            else{
                prev = current;
            }
            current = current.next;
        }
        node = node.next;
    }

}

function createLinkedList(arr: number[]): LinkedListNode|null {

    if(arr === null || arr.length === 0) return null;

    let head: LinkedListNode = new LinkedListNode(arr[0]);
    
    let current: LinkedListNode = head;
    
    for (let i=1; i<arr.length; i++){
        current.next = new LinkedListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

function toArray (head: LinkedListNode|null): number[] {
    
    let arr: number[] = [];
    
    let current: LinkedListNode|null = head;

    while (current !== null){
        arr.push(current.data);
        current = current.next;
    }

    return arr;
}

export function testDeleteDups_withMultipleDuplicates(): boolean {
    let arr: number[] = [1,2,1,3,2,4];
    let arr_expected: number[] = [1,2,3,4];

    let head:LinkedListNode|null = createLinkedList(arr);
    deleteDups(head);
    const result: number[] = toArray(head);

    for(let i=0; i< arr.length; i++){
        if (result[i] !== arr_expected[i]){
            return false;
        }
    }
    return true;
}

export function testDeleteDups2_withMultipleDuplicates(): boolean {
    let arr: number[] = [1,2,1,3,2,4];
    let arr_expected: number[] = [1,2,3,4];

    let head:LinkedListNode|null = createLinkedList(arr);
    deleteDups2(head);
    const result: number[] = toArray(head);

    for(let i=0; i< arr.length; i++){
        if (result[i] !== arr_expected[i]){
            return false;
        }
    }
    return true;
}

export function deleteDup_withMultipleDuplicates(): string {
    
    let arr: number[] = [1,2,1,3,2,4,1,2,5,6,1];

    let head:LinkedListNode|null = createLinkedList(arr);
    deleteDups(head);
    const res: number[] = toArray(head);
    return toStringArray(res);
}

export function deleteDup2_withMultipleDuplicates(): string {
    
    let arr: number[] = [1,2,1,3,2,4,1,2,5,6,1];

    let head:LinkedListNode|null = createLinkedList(arr);
    deleteDups2(head);
    const res: number[] = toArray(head);
    return toStringArray(res);
}

function toStringArray(arr: number[]): string {

    let s: string = "";

    for(let i=0; i< arr.length; i++){
        s+= arr[i] + " ";
    }

    return s;
}