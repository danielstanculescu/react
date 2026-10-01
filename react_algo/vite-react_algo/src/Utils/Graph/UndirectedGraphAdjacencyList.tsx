import { Queue } from "../Queue";
import { Stack } from "../Stack";

export class UndirectedGraphAdjacencyList {

    public createGraph(V: number, edges: number[][]): number[][] {

        let graph: number[][] = Array.from( {length: V}, () => []);

        for (const e of edges){
            const u = e[0];
            const v = e[1];
            graph[u].push(v);

            graph[v].push(u);
        }

        return graph;
    }

    public printGraph(V: number, graph: number[][]): string{

        let row: string = "";

        for (let index = 0; index < V; index++) {
            row += index + ": ";
            for(let j of graph[index]){
                row += j + " ";
            }
            row += " ; ";
        }
        return row;
    }

    // example : Input: adj[][] = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]
    // example2: Input: adj[][] = [[1,2], [0,2,3], [0,1,4], [1,4], [2,3]]
    public BFSconnected(graph: number[][]): number[]{

        let visited: boolean[];
        let res: number[];
        let q: Queue<number>;
        let V: number;

        V = graph.length;

        visited = Array(V).fill(false);
        res = Array(V);
        q = new Queue<number>(V);

        visited[0] = true;
        q.enqueue(0);

        let i = 0;
        while(!q.isEmtpy()){
            let node: number|null = q.dequeue();
            if(node !== null){
                res[i] = node;
                
                for (const e of graph[node]){
                    if(visited[e] === false){
                        visited[e] = true;
                        q.enqueue(e);
                    }
                }
                i++;
            }
        }

        return res;
    }

    public BFSdisconnected(edges: number[][]): number[] {
    
        let visited: boolean[];
        let ret: number[];
        let V: number;

        V = edges.length;

        visited = Array(V).fill(false);
        ret = Array(V);

        return this.BFSdisconnectedTraversal(0, 0, edges, visited, ret, V);
    }

    public BFSdisconnectedTraversal(source: number, step: number, edges: number[][], visited: boolean[], ret: number[], V: number): number[] {

        let q: Queue<number>;

        q = new Queue<number>(V);

        visited[source] = true;
        q.enqueue(source);

        while(!q.isEmtpy()){
            const n: number|null = q.dequeue();
            if(n !== null){
                
                ret[step] = n;

                for (const e of edges[n]){
                    if(visited[e] === false){
                        visited[e] = true;
                        q.enqueue(e);
                    }
                }
                step ++;
            }
        }

        if(step >= V ){
            return ret;
        }

        for(let i=0; i<V; i++){
            if(visited[i] === false){
                this.BFSdisconnectedTraversal(i, step, edges, visited, ret, V);
                break;
            }
        }

        return ret;
    }

    public DFS(edges: number[][]): number[] {

        let visited: boolean[];
        let res: number[];
        let s: Stack<number>;

        let V: number;

        V = edges.length;
        visited = Array(V).fill(false);
        res = Array(V);
        s = new Stack<number>(V);

        let source: number = 0;
        let step: number = 0;

        visited[source] = true;
        s.push(source);
        res[source] = source; 
        
        res = this.DFSTraversal(s, res, step, edges, visited);

        return res;
    }

    private DFSTraversal (s: Stack<number>, res: number[], step: number, edges: number[][], visited: boolean[]): number[]{

        while(s.isEmpty() === false){
            let n: number|null = s.peek();

            if (n !== null){
                let hasNeighbours: boolean = false;
                for(let i=0; i<edges[n].length; i++){
                    const neighbour: number = edges[n][i];
                    
                    if(visited[neighbour] === false){
                        visited[neighbour] = true;
                        s.push(neighbour);
                        hasNeighbours = true;
                        res[++step] = neighbour; 

                        break;
                    }
                }
                // backtrack
                if(hasNeighbours === false){
                    s.pop();
                }
            }
        }

        return res;
    }


    public DFSdisconnected(edges: number[][]): number[] {

        let visited: boolean[];
        let res: number[];
        let s: Stack<number>;

        let V: number;

        let step: number;

        V = edges.length;

        visited = Array(V).fill(false);
        res = Array(V);
        s = new Stack<number>(V);
        
        step = 0;
        
        visited[step] = true;
        s.push(step);
        res[step] = step;

        return this.DFSdisconnectedTraversal(s, edges, visited, res, step, V);
    }

    private DFSdisconnectedTraversal(s: Stack<number>, edges: number[][], visited: boolean[], res: number[], step: number, V: number): number[]{

        while(!s.isEmpty()){

            const n: number|null = s.peek();
            if (n !== null){

                let hasNeighbours: boolean = false;
                for(let i=0; i<edges[n].length; i++){
                    let neighbour: number = edges[n][i];
                    if(!visited[neighbour]){
                        visited[neighbour] = true;
                        hasNeighbours = true;
                        s.push(neighbour);
                        res[++step] = neighbour;
                        break;
                    }
                }

                if(!hasNeighbours){
                    s.pop();
                }
            }
        }

        for(let i=0; i<V; i++){
            if(!visited[i]){
                
                visited[i] = true;
                s.push(i);
                res[i] = i;

                this.DFSdisconnectedTraversal(s, edges, visited, res, i, V);
            }
        }

        return res;
    }


    public GraphtoString(order: number[]): string {
        let ret: string = "";

        for (const o of order){
            ret += o + " ";
        }

        return ret;
    }
}