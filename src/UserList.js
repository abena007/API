import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import prfimg from './user.png'
import Form from 'react-bootstrap/Form';

const UserList = () => {
  const [list,setList]=useState([])
  useEffect( () => {
  axios.get('https://jsonplaceholder.typicode.com/users')
.then((elm)=>setList(elm.data))
  .catch (error => {console.log(error)}
)}
,[])
console.log(list);

return (
 <div className='userList'>
  

    {list.map((user)=>(
    <div className='user'>
   <img src={prfimg}></img>
     <h2> {user.name} </h2>
      <h5>{user.email}<br/>
     
      </h5>

     
   
   
   
    </div>
    ))} 
  </div>
  )



}
export default UserList