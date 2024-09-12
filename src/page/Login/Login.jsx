import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signInUser,googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location  = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSignIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true})
            form.reset();
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result=>{
            const loginUser = result.user;
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div className=' mt-20'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 mx-auto">

                <form onSubmit={handleSignIn} className="card-body">
                    <h1 className="text-xl font-bold">Login</h1>
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Username or Email" className="input border-b border-b-slate-300 rounded-none p-0 text-black text-sm" required />
                    </div>

                    <div className="form-control">
                        <input type="password" name='password' placeholder="password" className="input border-b border-b-slate-300 rounded-none p-0 text-black text-sm mt-3" required />


                    </div>

                    <div className="flex items-center justify-between">
                        <label className="cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox-primary" />
                            <span className="label-text ml-2">Remember me</span>
                        </label>
                        <label className="label">
                            <a href="#" className="badge border-0 p-0 m-0 text-warning">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-warning rounded-none">Login</button>
                    </div>
                    <label className="label">
                        <p className='badge border-0 p-0 m-0'> Don't have an account?
                            <Link to='/register' className="badge border-0 p-0 m-0 text-warning"> Create an account</Link>
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

export default Login;