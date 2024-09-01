import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </>
  )
}

export default App
