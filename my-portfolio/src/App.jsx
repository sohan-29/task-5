import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-center'>
        <p className="text-lg font-bolder">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
