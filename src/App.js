import React from 'react'
import { useState } from 'react'
import './App.css'


const App = () => {
  const[input,setInput] = useState('Hello')
  const clear = ()=>{
    setInput('');
  }
  const del = ()=>{
    setInput(input.slice(0,-1))
  }
  const handleclick = (e)=>{
    setInput(input.concat(e.target.name))
  }
  const calculate = () =>{
    try {
     setInput(eval(input).toString())
     
    } catch (error) {
     setInput("ERROR")
    }
   }
  return (
    <div className='container'>
      <div className='calc'>
      <h1 id='input'>{input}</h1>
      <div>
        <button onClick={clear}>c</button>
        <button onClick={del}>&lt;</button>
        <button name='%' onClick={handleclick}>%</button>
        <button name='/' onClick={handleclick}>/</button>
      </div>
      <div>
        <button name='7'onClick={handleclick}>7</button>
        <button name='8'onClick={handleclick}>8</button>
        <button name='9'onClick={handleclick}>9</button>
        <button name='*'onClick={handleclick}>*</button>
      </div>
      <div>
        <button name='4'onClick={handleclick}>4</button>
        <button name='5'onClick={handleclick}>5</button>
        <button name='6'onClick={handleclick}>6</button>
        <button name='-'onClick={handleclick}>-</button>
      </div>
      <div>
        <button name='3'onClick={handleclick}>3</button>
        <button name='2'onClick={handleclick}>2</button>
        <button name='1'onClick={handleclick}>1</button>
        <button name='+'onClick={handleclick}>+</button>
      </div>
      <div>
        <button name='0'onClick={handleclick}>0</button>
        <button name='00'onClick={handleclick}>00</button>
        <button name='.'onClick={handleclick}>.</button>
        <button onClick={calculate}>=</button>
      </div>
      </div>
    </div>
  )
}

export default App