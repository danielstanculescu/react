/*
A Graph is a non-linear data structure consisting of vertices and edges.
The vertices are sometimes also referred to as nodes and the edges are lines
or arcs that connect any two nodes in the graph.
More formally a Graph is composed of a set of vertices(V) and a set of edges(E).
The graph is denoted by G(V, E).
*/

/* 
An adjacency matrix is a way of representing a graph as a boolean matrix of (0's and 1's).
*/

export class DirectedGraphAdjacencyMatrix{

    public createGraph(V: number, edges: number[][]): number[][] {

        let graph: number[][] = Array.from( {length: V}, () => Array(V).fill(0));

        for(const e of edges){
            const u = e[0];
            const v = e[1];

            graph[u][v] = 1;
        }

        return graph;
    }

    public printGraph(V: number, edges: number[][]): string {

        let ret :string = "";
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                ret += edges[i][j] + " ";
            }
            ret += "; ";
        }

        return ret;
    }
}