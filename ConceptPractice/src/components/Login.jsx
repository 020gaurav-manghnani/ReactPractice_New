import React, {useState, useContext} from 'react'
import LoginContext from '../contexts/LoginContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser, setPass} = useContext(LoginContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username})
        setPass({password})
        
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login