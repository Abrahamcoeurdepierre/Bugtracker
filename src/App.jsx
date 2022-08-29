import React, {useState, useEffect} from 'react'
import url from './apiUrl';
import Axios from "axios";
import Login from './Components/Login/Login';
import "./Style/Style.css"
import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
      Axios.get(`${url}/api/login`).then((result)=>{
        if(result.data.user){
          setUser(result.data.user)
        }

    }).catch((err)=>{
      console.log(err.message)
    })
  }, []);

  console.log(user)

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

  if(user){
    return(
      <div className='background'>
        <NavBar/>
        <div className="container">
          <Dashboard/>
        </div>
      </div>
    )
  }
  else{
    return (
      <Login/>
      );
  }
  
}

export default App;
