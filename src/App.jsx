import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container md-5 justify-content-center text-align-center">
      <div className="container " style={{height:"450px",width:"400px", backgroundColor:"grey"}}></div>
    </div>
    </>
  )
}

export default App
