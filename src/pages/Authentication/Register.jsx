import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(authContext)

    const handlesubmit = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log(name, email, pass);
        createUser(email, pass)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="max-w-3xl border border-gray-400">
                <form onSubmit={handlesubmit} className="p-20">
                    <h1 className="text-4xl font-bold mb-8">Register</h1>
                    <div>
                        <p className="font-semibold">Name</p>
                        <input className="border px-4 py-2" name="name" type="text" placeholder="type here" />
                        <p className="font-semibold mt-5">Email</p>
                        <input className="border px-4 py-2" name="email" type="email" placeholder="type here" />
                        <p className="font-semibold mt-5">Password</p>
                        <input className="border px-4 py-2" name="pass" type="password" placeholder="type here" />
                    </div>
                    <button className="mt-10 w-full rounded-none bg-slate-500 py-2">Register</button>
                    <p className='underline text-orange-500 font-bold mt-2'><Link to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;