import React, { useContext, useState } from 'react'
import {UserContext} from '../context/UserContext'

const Login = () => {

    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  const handleLogin = () => {
    setUser(username, password)
  }

  return (
    <div className='flex flex-col gap-4 p-4 max-w-2xl mx-auto'>
        <input type="text" className='border rounded bg-amber-100' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" className='border rounded bg-amber-100' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className='bg-purple-600 shadow-purple-100 text-white w-fit mx-auto px-5 rounded'>Login</button>
    </div>
  )
}

export default Login