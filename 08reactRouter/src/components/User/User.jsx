import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div>
      <h1 className='bg-gray-500 text-white text-3xl p-4 text-center '>User : {userid} </h1>
    </div>
  )
}

export default User


// accessing loader here.
//  export const githubInfoLoader = async(()=>{
//     const response = await fetch('https://api.github.com/users/020gaurav-manghnani')
//     return response.json
//  })