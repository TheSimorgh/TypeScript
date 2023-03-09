
import React, { ReactNode } from 'react'
type CounterProps={
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children:ReactNode
}
const Counter = ({setCount,children}:CounterProps) => {
  return (
    <div>
        <h1>{children}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>Add</button>
        <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>

    </div>
  )
}

export default Counter