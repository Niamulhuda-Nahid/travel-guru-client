import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { GiGymBag } from "react-icons/gi";
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className='container mx-auto mt-7'>
            <div className='flex items-center'>
                <div className="mr-20">
                    <Link to='/'>
                        <div className='flex items-start gap-2 justify-center'>
                            <GiGymBag className='text-4xl font-bold mt-1' />
                            <h2 className='text-base font-bold'>Travel <br /> Guru</h2>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-between items-center grow'>
                    <div className=" relative">
                        <CiSearch className='absolute translate-y-[-50%] top-2/4 text-base font-medium left-3 ' />
                        <input type="text" placeholder="Search your Destination..." className=" w-24 md:w-auto lg:w-72 text-base font-medium pl-8 py-2 border-[1px] rounded bg-neutral-600 bg-opacity-25 " />
                    </div>
                    <div className='flex gap-12'>
                        <ul className='flex gap-12 items-center'>
                            <Link to='#'>News</Link>
                            <Link to='#'>Destination</Link>
                            <Link to='#'>Blog</Link>
                            <Link to='#'>Contact</Link>
                        </ul>
                        {user ?
                            <button onClick={handleLogOut} className="btn btn-warning rounded px-7 py-3 ">Logout</button> :
                            <Link to='/login'>
                                <button className="btn btn-warning rounded px-7 py-3 ">Login</button>
                            </Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;