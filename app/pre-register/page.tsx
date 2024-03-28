// pages/pre-register.tsx
"use client"

import { useState, FormEvent } from 'react';
import Head from 'next/head';

const PreRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic here
    console.log({ username, email, password, repeatPassword });
    // Add API call or form processing logic here
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-bg px-4 pt-16 md:pt-0">
        <div className="flex flex-col md:flex-row bg-bg rounded overflow-hidden max-w-4xl w-full">
          {/* Text Content */}
          <div className="p-8 space-y-4 md:w-1/2">
            <h2 className="text-2xl font-bold pt-24 text-textPrimary">Why Pre-Register?</h2>
            <p className='text-md'>Pre-registering for the ITL Conference gives you early access to tickets, exclusive updates, and more. Don&#39;t miss out on this opportunity to connect with industry leaders and peers.</p>
          </div>

          {/* Form */}
          <div className="p-8 md:border-l md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input id="username" name="username" type="text" required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input id="email" name="email" type="email" required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input id="password" name="password" type="password" required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-700">Repeat Password</label>
                <input id="repeatPassword" name="repeatPassword" type="password" required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-ctaBg text-white hover:bg-ctaHover rounded focus:outline-none">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreRegister;
