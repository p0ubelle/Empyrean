import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='side-nav'>
        <a href="https://github.com/p0ubelle/empyrean">
          <img src="src\assets\img\empyrean_logo.png" className="logo empyrean" alt="Empyrean Logo" />
        </a>
        
        <button className="side-nav-button" href="buttonbutton">tier list</button>
        <button className="side-nav-button" href="buttonbutton">test2</button>
        <button className="side-nav-button" href="buttonbutton">test3</button>
        <button className="side-nav-button" href="buttonbutton">test4</button>
      </div>
      

      <h1>Empyrean</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        by poubelle26, first deployement [15/10/23 11:09]
      </p>
    </>
  )
}

export default App
