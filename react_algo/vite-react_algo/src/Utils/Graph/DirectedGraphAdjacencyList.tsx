export class DirectedGraphAdjacencyList {

    public createGraph(V: number, edges: number[][]): number[][] {

        let graph: number[][] = Array.from( {length: V}, () => []);

        for (let index = 0; index < edges.length; index++) {
            const u: number = edges[index][0];
            const v: number = edges[index][1];

            graph[u].push(v);
        }

        /*
        OR

        for(const e of edges){
            const u: number = e[0];
            const v: number = e[1];

            graph[u].push(v);
        }
        */

        return graph;
    }

    public printGraph(V: number, graph: number[][]): string {
        let ret: string = "";

        for (let index = 0; index < V; index++) {
            ret += index + ": ";

            for(const e of graph[index]){
                ret += e + " ";
            }

            ret += " ; "
        }

        return ret;
    }
}