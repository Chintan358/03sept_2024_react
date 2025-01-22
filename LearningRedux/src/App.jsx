
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, decrementByAmount } from './features/counter/counterSlice';
import { useRef } from 'react';

function App() {


  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const amount = useRef()
  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(Number(amount.current.value)))
    amount.current.value = ""
  }

  const decrementByAmountHandler = () => {
    dispatch(decrementByAmount(Number(amount.current.value)))
    amount.current.value = ""
  }


  return <div>
    <button onClick={incrementHandler}>+</button>
    <p>Count : {count} </p>
    <button onClick={decrementHandler}>-</button>
    <br />
    <input type="text" ref={amount} />
    <br /><br />
    <button onClick={incrementByAmountHandler}>+</button>
    <button onClick={decrementByAmountHandler}>-</button>
  </div>

}

export default App
