import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,mul } from './redux/counter/counterslice'

export default function App() {

  //read krne ke liye 
  const count = useSelector((state) => state.counter.value)
  //dispatch krne ke liye action ko dispatch krne ke liye hota hai use ohk
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
         aria-label="mul"
         onClick={()=>dispatch(mul())}
        >
         *
        </button>
      </div>
    </div>
  )
}