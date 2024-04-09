
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault();
    Signup();
  }

  function Signup() {
    console.log({ name, userName, password, confirmPassword, address, contact });
    const data = { name, userName, password, confirmPassword, address, contact };
    fetch("http://192.168.1.7:8089/api/signup", {
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
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
        <form onSubmit={handleSubmit} className='max-w-md p-8 rounded-lg'>
          <h1 className='font-bold text-center mb-4'>Registration Form</h1>
          <div className='ui divider'></div>
          <div className='ui-form'>
            <div className='field mt-4'>
              <label htmlFor='username' className='block'>Name:</label>
              <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} name='username' placeholder='Enter your Name...' className='w-full mt-1 p-2 border border-gray-200 rounded-lg' />
            </div>
            <div className='field mt-4'>
              <label htmlFor='userName' className='block'>Email:</label>
              <input type='email' value={userName} onChange={(e) => { setUserName(e.target.value) }} name='email' placeholder='Enter your email..' className='w-full mt-1 p-2 border border-gray-200 rounded-lg' />
            </div>
            <div className='field mt-4'>
              <label htmlFor='password' className='block'>Password:</label>
              <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} name='password' required className='w-full mt-1 p-2 border border-gray-200 rounded-lg' />
            </div>
            <div className='field mt-4'>
              <label htmlFor='confirmPassword' className='block'>Confirm Password:</label>
              <input type='password' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} name='confirmPassword' className='w-full mt-1 p-2 border border-gray-200 rounded-lg' />
            </div>
            <div className='field mt-4'>
              <label htmlFor='address' className='block'>Address:</label>
              <input type='text' value={address} onChange={(e) => { setAddress(e.target.value) }} name='address' required className='w-full mt-1 p-2 border border-gray-200 rounded-lg' />
            </div>
            <div className='field mt-4'>
              <label htmlFor='contact' className='block'>Contact:</label>
              <input type='text' value={contact} onChange={(e) => { setContact(e.target.value) }} name='contact' className='w-full mt-1 p-2 border border-gray-200 rounded-lg' />
            </div>
            <button type='submit' className='bg-blue-700 text-white w-full mt-6 py-2 rounded-lg'>Submit</button>
            <div className='mt-4 text-center'>
              Already have an account? <Link to="/login" className='text-blue-700'>Login</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;
