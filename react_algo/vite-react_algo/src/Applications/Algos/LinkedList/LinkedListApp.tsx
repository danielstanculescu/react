import { LinkedList } from "../../../Utils/LinkedList"

const LinkedListApp = () => {

    const list: LinkedList<string> = new LinkedList<string>();

    list.add("10");
    list.add("20");
    list.add("30");
    list.add("40");

    list.remove("30");
    const val: string|null = list.get(1);
    list.display();

    const size: number = list.getSize();

  return (
    <div>
        {size}, {val}
    </div>
  )
}

export default LinkedListApp
