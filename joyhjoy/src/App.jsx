import { useState } from 'react'
 
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);


  const addvalue = () => {
 if (counter<20){setCounter(counter+1)}
}
  const subvalue = () => {
    if(counter>0){
 setCounter(counter-1)}
}
  return (
    <>
       <h1>counter hai rey bss</h1>
       <h2>start: {counter}</h2>
       <button
       onClick={addvalue}>add value</button>
       <button onClick={subvalue}>sub value</button>
    </>
  )
}

export default App
