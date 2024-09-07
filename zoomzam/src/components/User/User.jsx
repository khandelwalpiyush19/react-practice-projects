 import React from 'react'
 import { useParams } from 'react-router-dom'
 function User() {
const {userid} = useParams()
   return (
     <div className='bg-blue-300 text-black h-10'>
       User : {userid}
     </div>
   )
 }
 
 export default User
 
