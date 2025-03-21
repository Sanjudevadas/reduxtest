import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './utils/counterSlice';

const Counter = () => {

const counts = useSelector((state)=>state.counter.count);

const dispatch = useDispatch();

  return (
    <div>
<h1>Counter:{counts}</h1>
<button onClick={()=>dispatch(increment())}>Increment</button>
<button onClick={()=>dispatch(decrement())}>Decrement</button>
<button onClick={()=>dispatch(reset())}>Reset</button>


    </div>
  )
}

export default Counter