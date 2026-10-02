import type { ReactElement } from "react";
import { Queue } from "../../../Utils/Queue"

const QueueApp = () => {
  
    const test1 = (): ReactElement[] => {

        let ret: ReactElement[] = [];

        let q: Queue<number> = new Queue<number>(3)

        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);

        const getFront: number | null = q.getFront();

        ret.push(<div>{getFront}</div>)

        return ret;

    }

    const test2 = (): ReactElement[] => {
     
        let ret: ReactElement[] = [];

        let q: Queue<number> = new Queue<number>(3)

        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);

        q.dequeue();

        const getFront: number | null = q.getFront();
        const getRear: number | null = q.getRear();

        ret.push(
        <div>
            <div>
                {getFront}
            </div>
            <div>
                {getRear}
            </div>

        </div>
        );

        return ret;
    }
  
  return (
    <div>
        <div>{test1()}</div>
        <div>{test2()}</div>
    </div>
  )
}

export default QueueApp
