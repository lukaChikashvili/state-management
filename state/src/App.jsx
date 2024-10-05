import { useStore } from "./store/store"

function App() {
  
  const { count, increaseCount, decreaseCount } = useStore();

    
  return (
    <>
     <p>{count}</p>
     <button onClick={increaseCount}>increase</button>
     <button onClick={decreaseCount}>decrease</button>
    </>
  )
}

export default App
