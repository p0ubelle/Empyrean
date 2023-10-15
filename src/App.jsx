import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>


      <div className='side-nav'>
        <a href=""></a>
        <button className="button-side-nav" href="buttonbutton">tier list</button>
        <button className="button-side-nav" href="buttonbutton">b</button>
        <button className="button-side-nav" href="buttonbutton">c</button>
        <button className="button-side-nav" href="buttonbutton">d</button>
      </div>
      

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          test <code>&lt;code&gt;</code> HTML
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
