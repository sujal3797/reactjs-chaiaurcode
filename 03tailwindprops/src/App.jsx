import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './components/Card.jsx'

function App() {

  let obj = {
    name: "sujal"
  }

  let newArr = [1,2,3]

  return (
    // <>
    //   <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    // </>
    <>
    <Card username="chai aur code" btnText="click me"/>
    <Card username= "hello"/>
    </>
  )
}

export default App
