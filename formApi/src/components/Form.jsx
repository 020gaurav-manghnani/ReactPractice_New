import React, { useState } from 'react'
import LiContent from './LiContent'

const Form = () => {

const [ content , setcontent] = useState("")
const [responseDetails , setResponseDetails] = useState({
  name : '',
  description : '',
  type : ''
})

// const url = "https://dogapi.dog/api/v2/breeds";

const clickme = async (e) =>{

  if(content.length<=0){
   alert("enter something")
  }

  else{
    try{
      e.preventDefault();
      const response = await fetch(content);
      const data = await response.json()
      console.log(data.data[0]);
      setResponseDetails({
        name : data.data[0].attributes.name,
        description : data.data[0].attributes.description,
        type: data.data[0].type
      })
    } 
    catch(err){
      console.log(err)
    }
  }

}
  return (
    <>
    <form>
    <h1>Fetch Api's Data</h1>
     <input type='text' 
     value={content}
     placeholder='enter value'
     onChange={(e)=>setcontent(e.target.value)}
     required
     ></input>
     <button type='submit' onClick={clickme}> Submit </button>
     <LiContent name = {responseDetails.name}
               type={responseDetails.type} 
               description={responseDetails.description} />
    </form>
    </>
  )
}

export default Form
