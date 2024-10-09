
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/habitSlice';

function App() {
  
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

    
  return (
    <>
    
       <p>counter: {counter}</p>
       <button onClick={() => dispatch(increment())}>+</button>
       <button onClick={() => dispatch(decrement())}>-</button>
        
    </>
  )
}

export default App
