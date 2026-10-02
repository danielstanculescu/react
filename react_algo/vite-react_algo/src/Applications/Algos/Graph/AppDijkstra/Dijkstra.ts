/* 
Given a weighted undirected graph and a source vertex src.
We need to find the shortest path distances from the source vertex to
all other vertices in the graph.

Input: src = 0, adj[][][] = [[[1, 4], [2, 8]], [[0, 4], [4, 6], [2,3]], [[0, 8], [3, 2], [1,3]], [[2, 2], [4, 10]], [[1, 6], [3, 10]]]
Dijkstra shortest path is: 0 4 8 10 20

Input: src = 0, adj[][][] = [[[1, 4], [2, 8]], [[0, 4], [4, 6]], [[0, 8], [3, 2]], [[2, 2], [4, 10]], [[1, 6], [3, 10]]]
Dijkstra shortest path is:

*/

import { MinHeapGeneric } from "../../../../Utils/MinHeapGeneric";


interface GraphNode {
  distance: number;
  id: number;
}

//export function algoDijkstra (src: number, adj: number[][][]): number[] {
export const algoDijkstra = (src: number, adj: number[][][]): number[] => {

    let dist: number[] = Array(adj.length).fill(Infinity);

    dist[src] = 0;

    // Min Heap Comparator: Lowest distance comes out first
    const nodeComparator = (a: GraphNode, b: GraphNode) => a.distance - b.distance;

    const priorityQueue = new MinHeapGeneric<GraphNode>(nodeComparator);

    const newNode: GraphNode = {
        distance: 0,
        id: 0,
    };

    priorityQueue.add(newNode);

    while (!priorityQueue.isEmpty()) {

        const node: GraphNode|undefined = priorityQueue.pop();
        if(node !== undefined){
            const nodeValue: number = node.id;
            const nodeDistance: number = node.distance
            
            if (nodeDistance > dist[nodeValue]) {
                continue;
            }

            for(let neighbourV of adj[nodeValue]){
                const nodeV: number = neighbourV[0];
                const distV: number = neighbourV[1];

                if (distV + dist[nodeValue] < dist[nodeV]){
                    dist[nodeV] = dist[nodeValue] + distV;
                    const newNode: GraphNode = {
                            distance: dist[nodeV],
                            id: nodeV,
                        };
                    priorityQueue.add(newNode)
                } 
            }
        }
    }

    return dist;
}

export function toStringDijkstra(arr: number[]): string{
    
    let ret: string = "";
    
    for (let a of arr){
        ret += a + " ";
    }

    return ret;
}





