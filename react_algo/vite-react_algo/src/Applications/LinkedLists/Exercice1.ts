// write code to remove duplicates from an unsorted linked list
// Follow up: what if a temporary buffer not available?

import { LinkedList } from "../../Utils/LinkedList";

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