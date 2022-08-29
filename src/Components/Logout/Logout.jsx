import React from 'react'
import url from '../../apiUrl';
import Axios from "axios"

function Logout() {
    const logout = (e) => {
        e.preventDefault()
        Axios.delete(`${url}/api/logout`).then(()=>{
            window.location.reload();
        })
    }
  return (
    <button onClick={logout} type="button" className='logout'>
        Logout
    </button>
  )
}

export default Logout