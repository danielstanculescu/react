import { LinkedList } from '../../Utils/LinkedList'
import { removeDuplicatesFromAnUnsortedLinkedList } from './Exercice1';

const AppExercice1 = () => {

    let list: LinkedList<number> = new LinkedList<number>();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(1);
    list.add(2);
    list.add(5);
    list.add(6);
    list.add(4);
    list.add(1);

    const newList: LinkedList<number> = removeDuplicatesFromAnUnsortedLinkedList(list);
    
    const printOutput = (): string => {
        return "Removing duplicates for the list: " + list.toString() + ". Output is: " + newList.toString();
    }

    const output = printOutput();

  return (
    <div>
      {output}
    </div>
  )
}

export default AppExercice1
