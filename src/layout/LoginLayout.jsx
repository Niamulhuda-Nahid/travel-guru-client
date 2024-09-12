import React from 'react';
import Header from '../page/shared/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <div className='text-black'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;