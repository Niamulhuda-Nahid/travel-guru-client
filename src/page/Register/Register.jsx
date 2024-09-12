import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser, googleSignIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCreateUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.comfirm_password.value;

        if(password !== confirmPassword){
            setError('Password are not match');
            return;
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            setError('');
            form.reset();
            navigate('/');
        })
        .catch(error=> {
            setError(error.message)
        })

    }
    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result=>{
            const loginUser = result.user;
            navigate('/');
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div className=' mt-20'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 mx-auto">

                <form onSubmit={handleCreateUser} className="card-body">
                    <h1 className="text-xl font-bold">Create an account</h1>

                    <div className="form-control">
                        <input type="TEXT" placeholder="First Name" name='first_name' className="input border-b border-b-slate-300 rounded-none p-0 text-black text-sm" required />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Last Name" name='last_name' className="input border-b border-b-slate-300 rounded-none p-0 text-black text-sm mt-2" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Username or Email" className="input border-b border-b-slate-300 rounded-none p-0 text-black text-sm mt-2" required />
                    </div>

                    <div className="form-control">
                        <input type="password" name='password' placeholder="password" className="input border-b border-b-slate-300 rounded-none p-0 text-black text-sm mt-2" required />
                    </div>
                    <div className="form-control">
                        <input type="password" name='comfirm_password' placeholder="Confirm Password" className="input border-b border-b-slate-300 rounded-none p-0 text-black text-sm mt-2" required />
                        <p><small className='text-red-600'>{error}</small></p>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-warning rounded-none">Create an Account</button>
                    </div>
                    <label className="label">
                        <p className='badge border-0 p-0 m-0'> Already have an account?
                            <Link to='/login' className="badge border-0 p-0 m-0 text-warning"> Login</Link>
                        </p>
                    </label>
                </form>
            </div>
            <div className='flex items-center flex-row justify-center my-4'>
                <div className='w-36 bg-stone-400 h-[1px]'></div>
                <p className='mx-2 font-semibold'>Or</p>
                <div className='w-36 bg-stone-400 h-[1px]'></div>
            </div>
            <div className='w-1/4 mx-auto mb-7'>
                <div className='flex justify-center flex-col gap-4' >
                    
                    <button className="btn btn-outline rounded-3xl border-stone-300"><FaFacebook className='text-2xl text-blue-800'/>Continue with Facebook</button>
                    <button onClick={handleGoogleLogin} className="btn btn-outline rounded-3xl border-stone-300"><FcGoogle className='text-2xl text-blue-800'/> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;