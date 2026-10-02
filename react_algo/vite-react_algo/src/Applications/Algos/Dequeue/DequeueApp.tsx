import type { ReactElement } from 'react';
import { Dequeue } from '../../../Utils/Dequeue';


const DequeueApp = ():ReactElement => {

    let d: Dequeue<string> = new Dequeue<string>();

    d.addFirst("test1");
    d.addFirst("test2");
    d.addFirst("test3");
    d.addFirst("test4");
    d.removeLast();


    let firstElement:string |undefined = d.getFirst();
    let lastElement:string |undefined = d.getLast();

  return (
    <div>
        <div>
        {firstElement}
        </div>
        <div>
        {lastElement}
        </div>
    </div>
  )
}

export default DequeueApp
