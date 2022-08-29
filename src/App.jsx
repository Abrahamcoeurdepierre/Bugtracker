import React, {useState, useEffect} from 'react'
import url from './apiUrl';
import Axios from "axios";
import Login from './Components/Login/Login';
import "./Style/Style.css"

function App() {

  // const [name, setName] = useState("");
  // const [names, setNames] = useState([]);
  

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const [user, setUser] = useState([]);


  // const [usernameReg, setUsernameReg] = useState('');
  // const [emailReg, setEmailReg] = useState('');
  // const [passwordReg, setPasswordReg] = useState('');


  // Axios.defaults.withCredentials = true; 

  // const add = (e) => {
  //   e.preventDefault();
  //   Axios.post(`${url}/api/insert`, {name}).then(()=> {
  //     Axios.get(`${url}/api/getall`).then((result)=>{
  //       setNames(result.data.data);
  //     })
  //   }).catch((err) =>{
  //     console.log(err)
  //   })
  //   setName('')
  // }


  // useEffect(() => {
  //   Axios.get(`${url}/api/getall`).then((result)=>{
  //     setNames(result.data.data);
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }, []);

  // useEffect(() => {
  //   Axios.get(`${url}/api/login`).then((result)=>{
  //     console.log(result)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }, []);


  // const login = (e) => {
  //   e.preventDefault();
  //   Axios.post(`${url}/api/login`, {
  //     username: username,
  //     password: password, 
  //     email: email
  //   }).then((result)=> {
  //     setUser(result.data)
  //     console.log(result.data)
  //   })
  //   setEmail("");
  //   setPassword('');
  //   setUsername('')
  // }


  // const register = (e) => {
  //   e.preventDefault();
  //   Axios.post(`${url}/api/register`, {
  //     username: usernameReg,
  //     password: passwordReg, 
  //     email: emailReg
  //   }).then((result)=> {
  //     console.log("Registered")
  //   }).catch((err) => {
  //     console.log(err)
  //   })

  //   setEmailReg("");
  //   setPasswordReg('');
  //   setUsernameReg('')
  // }


  // const logout = (e) => {
  //   e.preventDefault()
  //   Axios.delete(`${url}/api/logout`).then(()=>{
  //     console.log("Logged out")
  //     Axios.get(`${url}/api/login`).then((result)=>{
  //       console.log(result)
  //     }).catch((err)=>{
  //       console.log(err)
  //     })
  //   })
  // }


  return (
  //  <div>
  //     <form onSubmit={add}>
  //       Test Name:  <input type="text" value={name} onChange = {(e)=> {setName(e.target.value)}} />
  //       <button type='submit'> ADD </button>
  //     </form>
  //     <h1>Login</h1>
  //     <div>
  //       Username: <input type="text" onChange={(e)=> setUsername(e.target.value)} value={username}/>
  //       Email: <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
  //       Password: <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
  //       <button type='button' onClick={login}> Login </button>

  //     </div>

  //     <h1>Register</h1>
  //     <div>
  //       Username: <input type="text" onChange={(e)=> setUsernameReg(e.target.value)} value={usernameReg}/>
  //       Email: <input type="email" onChange={(e)=> setEmailReg(e.target.value)} value={emailReg}/>
  //       Password: <input type="password" onChange={(e)=> setPasswordReg(e.target.value)} value={passwordReg}/>
  //       <button type='button' onClick={register}> Register </button>

  //     </div>

  //     {user.map(user => {
  //       return (
  //       <h1 key = {user.user_id} >{user.user_email}</h1>
  //       )
  //     })}

  //     <h1>Add database</h1>
  //     {names.map(name => {
  //       return (
  //         <div key={name.id}>{name.name}</div>
  //       )
  //     })}

  //     <button onClick={logout} type="button">Logout</button>
  //  </div>


  <Login/>




  );
}

export default App;
