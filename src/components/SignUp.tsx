import React,{useState} from 'react'
import { useAppDispatch, useAppSelector } from '../Store';
import { loginUser } from '../Store/UserSlice';
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // redux state
    const loading = useAppSelector((state)=>state.user.loading)
    const error = useAppSelector((state)=>state.user.error)

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleSignUpEvent = (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        let userCredentials = {
            name,email,password
        }
        dispatch(loginUser(userCredentials)).then((result)=>{
            if(result.payload){
                setName('')
                setEmail('');
                setPassword('');
                navigate('/')
            }
        })
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 shadow-md rounded-md w-96" onSubmit={handleSignUpEvent}>
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input type="text" id="name" name="name" className="w-full border p-2 rounded-md" placeholder="Enter your full name" value={name} onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border p-2 rounded-md"
            placeholder="Enter your email"
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border p-2 rounded-md"
            placeholder="Enter your password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-full hover:bg-green-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
