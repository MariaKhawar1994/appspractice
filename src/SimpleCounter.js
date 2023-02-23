// simple counter example with using useState which add state to functional component
import React,{useState} from 'react'

import './SimpleCounter.css';

function SimpleCounter () {
    // using 2 arguments count and setCount
    const [count, setCount] = useState(0);
    
  return (
    <div>
        <h1>Hello Simple Counter App</h1>
        <p>Count:{count}</p>
        {/* using increment and decrement */}
        <button onClick={()=>setCount(count+1)}>INCREMENT</button>
        <br/>
        <br/>
            <button onClick={()=>setCount(count-1)}>DECREMENT</button>
    </div>
  )
}

export default SimpleCounter