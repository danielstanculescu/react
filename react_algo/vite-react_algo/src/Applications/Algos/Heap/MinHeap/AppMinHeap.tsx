import { MinHeap } from "../../../../Utils/MinHeap"

const AppMinHeap = () => {

    let heap: MinHeap = new MinHeap();
  

    heap.add(4);
    heap.add(5);
    heap.add(9);
    heap.add(6);
    heap.add(7);
    heap.add(8);

    heap.pop();

    heap.peek();

/*
    heap.add(19);
    heap.add(20);
    heap.add(21);
    heap.add(39);
    heap.add(25);
    heap.add(72);
    heap.add(62);
    heap.add(100);

    heap.pop();
*/

  
  const outputToString = (arr: number[]): string => {
    let s: string = "";
    for (let index = 0; index < arr.length; index++) {

      s += arr[index];

      if(index < arr.length - 1)
         s+= ",";
    }

    return s;
  }
  
  //const tab: number[] = [13,5,9,12,3,8,2,4,7,1];

  const tab: number[] = [14,8,9,7,3,6,2,12,5,1];
  
  const retHeapSort: number[] = heap.heapSort(tab);

    return (
    <div>
      {outputToString(retHeapSort)}
    </div>
  )
}

export default AppMinHeap
