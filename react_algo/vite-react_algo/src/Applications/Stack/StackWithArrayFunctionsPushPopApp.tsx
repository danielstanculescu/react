import { StackWithArrayFunctionsPushPop } from "../../Utils/StackWithArrayFunctionsPushPop";

const StackApp = () => {

    let stack:StackWithArrayFunctionsPushPop<string> = new StackWithArrayFunctionsPushPop<string>();
    
    stack.push("one");
    stack.push("two");
    stack.push("three");

    const displayElement = stack.pop();

    return (
        <div>
            {displayElement}
        </div>
    )
}

export default StackApp



  




