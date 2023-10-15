import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='side-nav'>
        <a href="">
          <img src="src\assets\img\empyrean_logo.png" className="logo empyrean" alt="Empyrean Logo" />
        </a>
        
        <button className="button-side-nav" href="buttonbutton">test1</button>
        <button className="button-side-nav" href="buttonbutton">test2</button>
        <button className="button-side-nav" href="buttonbutton">test3</button>
        <button className="button-side-nav" href="buttonbutton">test4</button>
      </div>
      

      <h1>Vite + React + Tauri</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          test <code>&lt;code&gt;</code> HTML
        </p>
      </div>
      <p className="read-the-docs">
        by poubelle26, first deployement [15/10/23 11:09]
      </p>
    </>
  )
}

export default App
