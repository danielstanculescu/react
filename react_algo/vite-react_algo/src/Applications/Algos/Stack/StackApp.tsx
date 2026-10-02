import { Stack } from "../../../Utils/Stack"

const StackApp = () => {


    let s: Stack<string> = new Stack<string>(5);

    s.push("10");
    s.push("20");
    s.push("30");

    const res: string|null = s.pop();

    return (
    <div>
      {res}
    </div>
  )
}

export default StackApp
