import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    if(counter < 20){
      setCounter(counter +1)
    }
    //counter = counter + 1
    
  }
  const removeValue = () =>{
    if(counter > 0) {
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
    <h1>new react</h1>
    <h2>Counter valu: {counter}</h2>
    <button 
    
    onClick={addValue}>Add value</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value{counter}</button>


{
      (() => {
        if (counter === 20) {
          return <div>It is full</div>;
        } else {
          return <div>It is not full</div>;
        }
      })()
    }

    </>
  )
}

export default App
