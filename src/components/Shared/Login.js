import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function Save() {
    console.log({userName, password});
    const data = {userName, password };
    fetch("http://192.168.1.7:8089/api/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log("result", result);
    })
  }
  return (
    <section className='bg-blue-100 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center'>
        <div className='md:w-1/2 px-16'>
          <h2 className='font-bold text-2xl text-[#002D74]'>Login</h2>
          <p className='text-sm mt-4 text-[#002D74]'>If you already a member, easily log in
          </p>

          <form action='' className='flex flex-col'>
            <input className='mt-4 p-2 rounded-xl border' value={userName} onChange={(e) => { setUserName(e.target.value) }} type='text' name='email' placeholder='Email..' required />
            <div className='relative mt-2'>
              <input className='p-2 rounded-xl border w-full' value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' name='password' placeholder='Password..' />
            </div>
            <button className='bg-[#002D74] rounded-xl text-white py-2 mt-2'>Login</button>
          </form>
          <div className='mt-4 grid grid-cols-3 
            items-center text-gray-400'>
            <hr className='border-gray-400' />
            <p className='text-center'>OR</p>
            <hr className='border-gray-400' />
          </div>
          <div className='bg-white flex py-2 items-center justify-center rounded-xl mt-4 hover:scale-105 duration-300'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s' alt="Google Icon" className="w-6 h-6 mr-2" />
            <div>
              Login with Google
            </div>
          </div>

          <div className='mt-5 text-xs border-b border-gray-400 py-4'>
            Forgot your password?<Link to="/login" className='text-blue-700'><button type='submit' className='px-5 py-2 bg-white border rounded-xl hover:scale-110 duration-300'>Reset</button></Link>
          </div>

          <div>
            <p className='mt-3 text-xs flex justify-between items-center'>Don't have an account..
              <button className='px-5 py-2 bg-white border rounded-xl hover:scale-110 duration-300'><nav>
                <ul>
                  <li className='text-blue-700'>
                    <Link to="/registration">Registration</Link>
                  </li>
                </ul>
              </nav></button>
            </p>
          </div>
        </div>


        <div className='md:block hidden w-1/2'>
          <img className='rounded-2xl' src='https://png.pngtree.com/thumb_back/fw800/background/20230718/pngtree-contemporary-authentic-3d-renderings-of-web-login-page-templates-image_3904126.jpg' alt='Login' />
        </div>
      </div>
    </section>
  )
}

export default Login
















