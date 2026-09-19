import { BinarySearchTree } from "../../Utils/BinarySearchTree"

const AppBinarySearchTree = () => {

    let bst:BinarySearchTree = new BinarySearchTree();
    bst.add(30);
    bst.add(10);
    bst.add(50);
    bst.add(5);
    bst.add(16);
    bst.add(48);
    bst.add(52);
    bst.add(49);
    bst.add(51);
    bst.add(80);
    bst.add(53);

    let containsNode: string = bst.containsNode(10).toString();

    bst.deleteNode(10);
    
    containsNode = bst.containsNode(10).toString();

    bst.bfsFromRoot();

    return (
    <div>
      contains node: {containsNode}
    </div>
  )
}

export default AppBinarySearchTree

