import React from "react";
import axios from "axios";
import { useState } from "react";

const SignupPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        const userData = { username: username, email: mail, password: password };
        
        try {
            const response = await axios.post('http://localhost:5000/api/signup', userData);
            console.log('Signup success:', response.data);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Error signing up:', error.response.data);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="rounded-md shadow dark:border px-10 py-6 dark:bg-white-800 dark:border-black">
                <div className="flex flex-col items-center justify-center mx-auto my-auto">
                    <h1 className="text-xl font-bold text-gray-900 md:text-2xl text-dark">Create your account</h1>
                    <form onSubmit={handleSignup}>
                        <div className="my-4">
                            <label htmlFor="email" className="block mb-2">Your email</label>
                            <input 
                                type="email" 
                                placeholder="name@company.com" 
                                onChange={(e) => setMail(e.target.value)}
                                className="border rounded w-80 py-2 px-3"
                            />
                        </div>
                        <div className="my-4">
                            <label htmlFor="username" className="block mb-2">Username</label>
                            <input 
                                type="username" 
                                placeholder="alphanumeric name"
                                onChange={(e) => setUsername(e.target.value)}
                                className="border rounded w-80 py-2 px-3"
                            />
                        </div>
                        <div className="my-4">
                            <label htmlFor="password" className="block mb-2">Password</label>
                            <input 
                                type="password" 
                                placeholder="*********" 
                                onChange={(e) => setPassword(e.target.value)}
                                className="border rounded w-80 py-2 px-3"
                            />
                        </div>
                        <button type="submit" className="mt-4 w-full text-white bg-black focus:outline-none rounded-md text-md px-5 py-2.5 text-center">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
