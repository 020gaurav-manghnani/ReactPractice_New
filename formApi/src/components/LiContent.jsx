import React from 'react'
// import Form from './Form'

function LiContent({name , type , description}) {
  return (
    <div>
      <ul>
        <li><b>Name:</b> {name}</li>
        <li><b>Type:</b>{type}</li>
        <li><b>Description:</b>{description}</li>
      </ul>
    </div>
  )
}

export default LiContent
