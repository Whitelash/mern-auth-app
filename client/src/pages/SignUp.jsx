import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <img src="https://i.pinimg.com/originals/fe/93/b0/fe93b053043276b38386e625295af6cc.gif" alt="Sign Up" style={{ width: '50%', height: 'auto'}} />
      <form className='flex flex-col gap-4'> 
        <input type="text" placeholder='Username' id="username" className='bg-slate-100 p-3 rounded-lg'/>
        <input type="text" placeholder='Email' id="email" className='bg-slate-100 p-3 rounded-lg'/>
        <input type="text" placeholder='Password' id="password" className='bg-slate-100 p-3 rounded-lg'/>
        <button type='submit' className='bg-purple-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex justify-center gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500 hover:underline'>Log In</span>
        </Link>
        
      </div>
    </div>
  )
}
