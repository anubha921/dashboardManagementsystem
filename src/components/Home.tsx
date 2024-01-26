import React from 'react'
import SignIn from './SignIn'
import {Link} from 'react-router-dom'
import { useState } from 'react';

function getUser(){
    let user = localStorage.getItem('user');
    if(user){
        user = JSON.parse(user)
    }
    else{
        user = null;
    }
    return user
}

function Home() {
    const [user, setUser] = useState(getUser());
    const handleLogout = ()=>{
        localStorage.removeItem('user');
        setUser(null)
    }
    console.log(user)
  return (
    <div className="flex justify-center items-center h-screen">
        {user&&(
            <div>
            <h1 className="text-2xl font-semibold mb-4">I am Dashboard</h1>
            <Link to="/signin" className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600" onClick={handleLogout}>Signout</Link>
            </div>
        )}
    </div>
  )
}

export default Home
