import { algoDijkstra, toStringDijkstra } from "./Dijkstra"

const AppDijkstra = () => {
  
  //const ret: number[] = algoDijkstra(0, [[[1, 4], [2, 8]], [[0, 4], [4, 6], [2,3]], [[0, 8], [3, 2], [1,3]], [[2, 2], [4, 10]], [[1, 6], [3, 10]]]);
  const ret2: number[] = algoDijkstra(0, [[[1, 4], [2, 8]], [[0, 4], [4, 6]], [[0, 8], [3, 2]], [[2, 2], [4, 10]], [[1, 6], [3, 10]]]);
  const retToString: string = toStringDijkstra(ret2);
  
    return (
    <div>
      Dijkstra shortest path is: {retToString}
    </div>
  )
}

export default AppDijkstra
