import React from 'react'
import { useContext } from 'react'
import LoginContext from '../contexts/LoginContext'

function Profile() {

    const {user,pass} = useContext(LoginContext)

    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username} with a password {pass.password}</div>
}

export default Profile
