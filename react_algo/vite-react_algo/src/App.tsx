import './App.css'
import PercolationTest from './Applications/UnionFind/PercolationTest'
import StackWithArrayFunctionsPushPopApp from './Applications/Stack/StackWithArrayFunctionsPushPopApp'
import UnionFindApp from './Applications/UnionFind/UnionFindApp'
import DequeueApp from './Applications/Dequeue/DequeueApp'
import QueueApp from './Applications/Queue/QueueApp'
import StackApp from './Applications/Stack/StackApp'
import LinkedListApp from './Applications/LinkedList/LinkedListApp'
import HashMapApp from './Applications/HashMap/HashMapApp'
import AppSimpleHashMapSeparateChaining from './Applications/HashMap/AppSimpleHashMapSeparateChaining'
import AppBinarySearchTree from './Applications/BinarySearchTree/AppBinarySearchTree'
import AppMinHeap from './Applications/Heap/MinHeap/AppMinHeap'
import AppMaxHeap from './Applications/Heap/MaxHeap/AppMaxHeap'
import AppGraphs from './Applications/Graph/AppGraphs'
import AppDijkstra from './Applications/Graph/AppDijkstra/AppDijkstra'

function App() {

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

export default App
