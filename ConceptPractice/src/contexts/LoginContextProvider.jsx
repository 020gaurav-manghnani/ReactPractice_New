import React from 'react'
import LoginContext from './LoginContext'
import { useState } from 'react'

const LoginContextProvider =({children})=> {

    const [user , setUser] = useState(null)
    const [pass , setPass] = useState(null)
    
  return (
    <LoginContext.Provider value={{user , setUser , pass , setPass}}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
