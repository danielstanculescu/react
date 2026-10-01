import { DirectedGraphAdjacencyList } from "../../Utils/Graph/DirectedGraphAdjacencyList";
import { DirectedGraphAdjacencyMatrix } from "../../Utils/Graph/DirectedGraphAdjacencyMatrix";
import { UndirectedGraphAdjacencyList } from "../../Utils/Graph/UndirectedGraphAdjacencyList";
import { UndirectedGraphAdjacencyMatrix } from "../../Utils/Graph/UndirectedGraphAdjacencyMatrix"

const AppGraphs = () => {

    let graph: UndirectedGraphAdjacencyMatrix = new UndirectedGraphAdjacencyMatrix();
    let graphDirected: DirectedGraphAdjacencyMatrix = new DirectedGraphAdjacencyMatrix();

    let graphList: UndirectedGraphAdjacencyList = new UndirectedGraphAdjacencyList();
    let graphDirectedList: DirectedGraphAdjacencyList = new DirectedGraphAdjacencyList();

    const edges: number[][] = [[0,1], [0,2], [1,2]];

    const retGraph = graph.createGraph(3, edges);
    const retGraphDirected = graphDirected.createGraph(3, edges);
    const retGraphList = graphList.createGraph(3, edges);
    const retGraphDirectedList = graphDirectedList.createGraph(3, edges);

    const printGraph = graph.printGraph(3, retGraph);
    const printGraphDirected = graphDirected.printGraph(3, retGraphDirected);
    const printGraphList = graphList.printGraph(3, retGraphList);
    const printGraphDirectedList = graphDirectedList.printGraph(3, retGraphDirectedList);

    const exampleGraph: number[][] = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];
    const exampleGraph2: number[][] = [[1,2], [0,2,3], [0,1,4], [1,4], [2,3]];
    const exampleGraph3: number[][] = [[2,3], [2], [0,1], [0], [5], [4]];
    const exampleGraph4: number[][] = [[1,2], [0,2], [0,1,3,4], [2], [2]];
    
    const BFSgraphList = graphList.BFSconnected(exampleGraph2);
    const BFSgraphListDisconnected = graphList.BFSdisconnected(exampleGraph3);
    const DFSgraphList = graphList.DFS(exampleGraph4);
    const DFSgraphListDisconnected = graphList.DFSdisconnected(exampleGraph3);

    const BFStoString = graphList.GraphtoString(BFSgraphList);
    const BFSDisconnectedtoString = graphList.GraphtoString(BFSgraphListDisconnected);
    const DFStoString = graphList.GraphtoString(DFSgraphList);
    const DFSDisconnectedToString = graphList.GraphtoString(DFSgraphListDisconnected);

    return (
    <>
        <div>
            Print Graph: {printGraph}
        </div>
        <div>
            Print Graph Directed: {printGraphDirected}
        </div>
        <div>
            Print Graph List: {printGraphList}
        </div>
        <div>
            Print Graph Directed List: {printGraphDirectedList}
        </div>
        <div>
            Traversal BFS (other input): {BFStoString},
            Traversal BFS disconnected (other input): {BFSDisconnectedtoString}
        </div>
        <div>
            Traversal DFS (other input): {DFStoString},
            Traversal DFS disconnected (other input): {DFSDisconnectedToString}
        </div>
        
    </>
  )
}

export default AppGraphs
