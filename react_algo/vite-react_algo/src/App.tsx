import './App.css'
import PercolationTest from './Applications/UnionFind/PercolationTest'
import StackWithArrayFunctionsPushPopApp from './Applications/Stack/StackWithArrayFunctionsPushPopApp'
import UnionFindApp from './Applications/UnionFind/UnionFindApp'
import DequeueApp from './Applications/Dequeue/DequeueApp'
import QueueApp from './Applications/Queue/QueueApp'
import StackApp from './Applications/Stack/StackApp'

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
    </>
  )
}

export default App
