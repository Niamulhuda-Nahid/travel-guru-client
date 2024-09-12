import React from 'react';
import Header from '../page/shared/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (

        <div
            className="hero min-h-screen relative"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/BfNN7Pn/Rectangle-1.png)",
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className='absolute top-0 container text-white'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;