import React from 'react';
import Header from '../page/shared/Header/Header';
import { Outlet } from 'react-router-dom';

const HotelLayout = () => {
    return (
        <div>
            <div className='text-black'>
                <Header></Header>
                <hr className='w-11/12 mx-auto mt-4'/>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default HotelLayout;