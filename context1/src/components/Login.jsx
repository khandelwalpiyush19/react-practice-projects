import React , { useState,useContext} from "react";
import UserContext from '../Context/UserContext'

function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser}= useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})


    }
return (
    <div>
        <h2>login</h2>
        <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
)
}

export default Login;