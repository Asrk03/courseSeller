import React from "react";
import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async(event)=>{
        event.preventDefault();
        try{ 
            const response = await axios.post("http://localhost:5000/api/login", {email: mail, password: password});
            console.log('Login success:', event.data);
            localStorage.setItem('token', response.data.token);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="rounded-md shadow dark:border px-10 py-6 dark:bg-white-800 dark:border-black">
                <div className="flex flex-col items-center justify-center mx-auto my-auto">
                    <h1 className="text-xl font-bold text-gray-900 md:text-2xl text-dark">Login to your account</h1>
                    <form onSubmit = {submit}>
                        <div className="my-4">
                            <label htmlFor="email" className="block mb-2">Your email</label>
                            <input 
                                type="email" 
                                placeholder="name@company.com" 
                                className="border rounded w-80 py-2 px-3"
                                onChange={(e)=>setMail(e.target.value)}
                            />
                        </div>
                        <div className="my-4">
                            <label htmlFor="password" className="block mb-2">Password</label>
                            <input 
                                type="password" 
                                placeholder="*********" 
                                className="border rounded w-80 py-2 px-3"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="mt-4 w-full text-white bg-black focus:outline-none rounded-md text-md px-5 py-2.5 text-center">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
