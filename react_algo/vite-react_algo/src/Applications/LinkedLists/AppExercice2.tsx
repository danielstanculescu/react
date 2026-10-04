import { arrayToList, findKth_1Solution, LinkedListNode } from "./Exercice2"

const AppExercice2 = () => {

    const kTh: number = 3;
    const test: number[] = [1,2,3,4,5,6,7,8,9,10];

    const head:LinkedListNode|null = arrayToList(test);

    const element: number|null = findKth_1Solution(kTh, head);

    const functionToString = (element: number|null): string => {
        return "The " + kTh + " element is " + element;
    }

    const out:string = functionToString(element);

    return (
    <div>
      {out}
    </div>
  )
}

export default AppExercice2
