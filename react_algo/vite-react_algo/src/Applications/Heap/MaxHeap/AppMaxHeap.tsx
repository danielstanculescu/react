import type { ReactElement } from "react";
import { MaxHeap } from "../../../Utils/MaxHeap"

const AppMaxHeap = () => {

    let heap: MaxHeap = new MaxHeap();

    let arr: number[] = [9,4,3,8,10,2,5];
    
    const returnAllNumbers = (res: number[]): ReactElement => {
        
        let s: string = "";
        
        for (let index = 0; index < res.length; index++) {
            if(index < res.length - 1)
                s+= res[index].toString() + ",";
            else
                s+= res[index].toString();
        }


        return (
            <div>
                {s}
            </div>
        );
    }

    const transformedHeap:number[] = heap.transformMaxHeap(arr);

    const ret = returnAllNumbers(transformedHeap);

    
    const heapSort: number[] = heap.heapSort(arr);
    const retHeapSort = returnAllNumbers(heapSort);

    return (
    <div>
      Test transform heapify {ret}, Test heap sort {retHeapSort}
    </div>
  )
}

export default AppMaxHeap
