import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container md-5 justify-content-center text-align-center">
      <div className="container " style={{height:"450px",width:"400px", backgroundColor:"gray"}}>
        <input type="text"  className='text-center text-align-center p-2 mt-3 ' style={{width:"100%"}} placeholder='Enter your weight and height'/>
        <div className="row mt-3">
          <div className="col-2 m-2 btn btn-outline-dark text-light shadow">9</div>
          <div className="col-2 m-2 btn btn-outline-dark text-light shadow">8</div>
          <div className="col-2 m-2 btn btn-outline-dark text-light shadow">7</div>
        </div>
         <div className="row">
          <div className="col-2 m-2 btn btn-outline-dark text-light shadow">6</div>
          <div className="col-2 m-2 btn btn-outline-dark text-light shadow">5</div>
          <div className="col-2 m-2 btn btn-outline-dark text-light shadow">4</div>
        </div>
         <div className="row">
          <div className="col-2 m-2 btn btn-outline-dark text-light shadow">3</div>
          <div className="col-2 m-2 btn btn-outline-dark text-light shadow">2</div>
          <div className="col-2 m-2 btn btn-outline-dark text-light shadow">1</div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
