import axios from 'axios'
import React from 'react'

export const DeleteUser = ({userId}) => {

    const handleDelete =()=>{
       axios.delete(`http://localhost:4000/api/userList/${userId}`).then(res=>{console.log(res.data.message).catch((err)=>{console.log("e")})})
    }
  return (
    <button onClick={handleDelete}>delete</button>
  )
}
