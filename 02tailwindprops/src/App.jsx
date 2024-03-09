import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "hitesh",
    age : 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>tailwind test</h1>
      <Card username = "chai aur code" btnText = "visit me!"/>
      <Card username= "priyanshi"  btnText = "visit me!"/>
    </>
  )
}
 export default App