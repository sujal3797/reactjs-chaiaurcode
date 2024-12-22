import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] =  useState(5)
  
  // let counter = 5

  const addValue = () => {
    console.log("clicked", counter);
    if(counter <=19 ) {
      counter = counter + 1;
    } else {
      alert("Don't go beyond this")
    }
    setCounter(counter);
  }

  const removeValue = () => {
    if(counter >0 ) {
      counter = counter -1;
    }
    setCounter(counter);
  }
  
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button> <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
