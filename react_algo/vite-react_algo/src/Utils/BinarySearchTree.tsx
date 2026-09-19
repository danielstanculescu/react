// A binary tree is a recursive data structure where each node can have 2 children at most.
// A common type of binary tree is a binary search tree, in which every node has a value that is greater than or equal
// to the node values in the left sub-tree, and less than or equal to the node values in the right sub-tree.

import { Queue } from "./Queue";

class Node{
    value: number;
    left: Node|undefined;
    right: Node|undefined;

    constructor(value: number, left: Node|undefined, right: Node|undefined){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export class BinarySearchTree{

    private root: Node | undefined;

    public add (value: number): void {
        this.root = this.addRecursive(value, this.root);
    }

    public addRecursive (value: number, current: Node|undefined): Node {
        if(current === undefined){
            return new Node(value, undefined, undefined);
        }
   
        if(value < current.value){
            current.left = this.addRecursive(value, current.left);
            
        }
        else if(value > current.value){
            current.right = this.addRecursive(value, current.right);
        }
        else {
            return current;
        }

        return current;
    }

    public containsNode(value: number): boolean {
        return this.containsRecursive(value, this.root);

    }

    public containsRecursive(value: number, current: Node|undefined): boolean {

        if(current === undefined){
            return false;
        }

        if(value < current.value){
            return this.containsRecursive(value, current.left);
        }
        else if(value > current.value){
            return this.containsRecursive(value, current.right);
        }
        else {
            return true;
        }

        return false;
    }

    public deleteNode(value: number): void{
        this.root = this.deleteRecursive(value, this.root);
    }

    public deleteRecursive(value: number, current: Node|undefined): Node|undefined {
        if(current === undefined){
            return undefined;
        }

        if(current.value === value){
            // delete node (3 options)

            // no children
            if(current.left === undefined && current.right === undefined){
                return undefined;
            }
            // 1 child
            else if (current.left !== undefined || current.right !== undefined ){
                if(current.left !== undefined){
                    return current.left;
                }
                else if(current.right !== undefined){
                    return current.right;
                }
            }
            // 2 children
            else {
                // 1- (do recursive to) find smallest children in right block
                // 2- update the cuirrent value with the smallest
                // 3- (do recursive to) remove the smallest node
                if(current.right !== undefined){
                    let smallestValue: number = this.findSmallestValue(current.right);
                    current.value = smallestValue;
                    current.right = this.deleteRecursive(smallestValue, current.right);
                    return current;
                }
            }
        }
        else if(value < current.value){
            current.left = this.deleteRecursive(value, current.left);
            return current; // always the root
        }
        else{
            current.right = this.deleteRecursive(value, current.right);
            return current; // always the root
        }

        return undefined;
    }

    private findSmallestValue(root: Node): number {

        if(root.left === undefined){
            return root.value;
        }
        
        return this.findSmallestValue(root.left);
    }

    public dfsLRootRFromRoot(): void {
        this.dfsLRootR(this.root);
    }
    // DFS left root right
    public dfsLRootR (current: Node|undefined): void{

        if(current === undefined){
            return;
        }
        this.dfsLRootR(current.left);
        console.log("root is: " + current.value);
        this.dfsLRootR(current.right);
    }

    public dfsRootLRFromRoot(): void {
        this.dfsRootLR(this.root);
    }
    // DFS root left right
    public dfsRootLR(current: Node|undefined): void{
        
        if(current === undefined)
            return;

        console.log("root is: " + current.value);
        this.dfsRootLR(current.left);
        this.dfsRootLR(current.right);
    }

    public dfsLRRootFromRoot(): void {
        this.dfsLRRoot(this.root);
    }
    // DFS left right root
    public dfsLRRoot(current: Node|undefined): void{
        
        if(current === undefined)
            return;

        this.dfsLRRoot(current.left);
        this.dfsLRRoot(current.right);
        console.log("root is: " + current.value);
    }

    public bfsFromRoot(): void{
        this.bfs(this.root);
    }
    public bfs(current: Node|undefined): void{

        if(current === undefined){
            return undefined;
        }

        let q: Queue<Node|undefined> = new Queue<Node|undefined>(10);

        q.enqueue(current);

        while(!q.isEmtpy()){
            
            const n: Node|null|undefined = q.dequeue();

            if(n !== null && n !== undefined){
                console.log(n.value);

                if(n.left !== undefined)
                    q.enqueue(n.left);

                if(n.right !== undefined)
                    q.enqueue(n.right);
            }
        }
    }
}