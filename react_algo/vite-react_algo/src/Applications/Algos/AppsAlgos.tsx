import PercolationTest from './UnionFind/PercolationTest'
import StackWithArrayFunctionsPushPopApp from './Stack/StackWithArrayFunctionsPushPopApp'
import UnionFindApp from './UnionFind/UnionFindApp'
import DequeueApp from './Dequeue/DequeueApp'
import QueueApp from './Queue/QueueApp'
import StackApp from './Stack/StackApp'
import LinkedListApp from './LinkedList/LinkedListApp'
import HashMapApp from './HashMap/HashMapApp'
import AppSimpleHashMapSeparateChaining from './HashMap/AppSimpleHashMapSeparateChaining'
import AppBinarySearchTree from './BinarySearchTree/AppBinarySearchTree'
import AppMinHeap from './Heap/MinHeap/AppMinHeap'
import AppMaxHeap from './Heap/MaxHeap/AppMaxHeap'
import AppGraphs from './Graph/AppGraphs'
import AppDijkstra from './Graph/AppDijkstra/AppDijkstra'


const AppsAlgos = () => {
  return (
    <>
      <div>Test StackWithArrayFunctionsPushPop</div>
      <div>Response from the compoennt StackWithArrayFunctionsPushPopApp:</div>
      <div>
        <StackWithArrayFunctionsPushPopApp />
      </div>

      <div>Test WeightedQuickUnionFind</div>
      <div>Response from the component UnionFindApp</div>
      <div>
        <UnionFindApp />
      </div>

      <div>Test WeightedQuickUnionFind</div>
      <div>Response from the component Percolation</div>
      <div>
        <PercolationTest />
      </div>

      
      <div>Test Dequeue</div>
      <div>Response from the component DequeueApp</div>
      <div>
        <DequeueApp />
      </div>

      <div>Test Queue</div>
      <div>Response from the component QueueApp</div>
      <div>
        <QueueApp />
      </div>

      <div>Test Stack</div>
      <div>Response from the component StackApp</div>
      <div>
        <StackApp />
      </div>

      <div>Test LinkedList</div>
      <div>Response from the component LinkedListApp</div>
      <div>
        <LinkedListApp />
      </div>
      
      <div>Test HashMap</div>
      <div>Response from the component HashMapApp</div>
      <div>
        <HashMapApp />
      </div>

      <div>Test SimpleHashMapSeparateChaining</div>
      <div>Response from the component AppSimpleHashMapSeparateChaining </div>
      <div>
        <AppSimpleHashMapSeparateChaining />
      </div>
      
      <div>Test BinarySearchTree</div>
      <div>Response from the component AppBinarySearchTree </div>
      <div>
        <AppBinarySearchTree />
      </div>

      <div>Test MinHeap</div>
      <div>Response from the component AppMinHeap </div>
      <div>
        <AppMinHeap />
      </div>

      <div>Test MaxHeap</div>
      <div>Response from the component AppMaxHeap </div>
      <div>
        <AppMaxHeap />
      </div>

      <div>Test Graph</div>
      <div>Response from the component AppGraph </div>
      <div>
        <AppGraphs />
      </div>

      <div>Test AppDijkstra</div>
      <div>Response from the component AppDijkstra </div>
      <div>
        <AppDijkstra />
      </div>
    </>
  )
}

export default AppsAlgos
