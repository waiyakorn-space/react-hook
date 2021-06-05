import React ,{ useState } from 'react'


const App = () =>{
  const [count,setCount] = useState(0);

  const handleIncrement = () => setCount(count+1)
  const handleDecrement = () => setCount(count-1)

  return (
    <div>
      Count: {count}
      <br />

      <button type="button" onClick={handleIncrement}>Increment</button>
      <button type="button" onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

export default App
