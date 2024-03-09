import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  

  let [counter,setcounter] = useState(5)
  
  const addvalue = () =>{
    setcounter(counter + 1)
  }

  const removevalue = () =>{
    setcounter(counter - 1)
  }
  

  return (
    <>
      <h1>Hello Priyanshi</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>add value {counter}</button>
      <button onClick={removevalue}>remove value {counter}</button>
    </>
  )
}

export default App
