import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="card">
      <h2>Rick Sanchez</h2>
      <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
     </div>
     
    </>
  )
}

export default App
