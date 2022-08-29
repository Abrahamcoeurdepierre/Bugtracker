import React, {useState, useEffect} from 'react'
import url from '../../apiUrl';
import Axios from "axios"


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const login = (e) => {
    e.preventDefault();
    Axios.post(`${url}/api/login`, {
    username: username,
    password: password, 
    }).then((result)=> {
    setUser(result.data)
    console.log(result.data)
    })
    setPassword('');
    setUsername('')
  }


   useEffect(() => {
    Axios.get(`${url}/api/getall`).then((result)=>{
      console.log(result.data.data);
    }).catch((err)=>{
      console.log(err)
    })
  }, []);

   Axios.defaults.withCredentials = true; 

  return (
    <div className="login flexCol">
        <h3>BUGTRACKER</h3>
        <form className="loginCard flexCol" onSubmit={login}>
            <h4>Login</h4>
            <p>Username:</p>
            <input type="text" placeholder='Please input your username here' required onChange={(e)=> setUsername(e.target.value)} value={username}/>
            <p>Password:</p>
            <input type="password" placeholder='Please input your password here' required onChange={(e)=> setPassword(e.target.value)} value={password}/>

            <button type='submit'>Login</button>
        </form>
    </div>  
  )
}

export default Login