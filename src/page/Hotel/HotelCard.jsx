import React from 'react';
import { FaStar } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
    const {name, rating, img_url, rooms, } = hotel;
    return (
        <div className='flex items-center ml-9 gap-4 mb-5'>
            <div className=''>
                <img className='max-w-72' src={img_url} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-stone-400 '>
                    <small>{rooms[0].capacity} guests,    </small>
                    <small>{rooms[0].bed},     </small>   
                    <small>{rooms[0].bath} bath</small>
                </p>
                <p className='text-stone-400 '>
                    <small>{rooms[0].amenities[0]}</small> <br />
                    <small>{rooms[0].amenities[1]}</small><br />
                    <small>{rooms[0].amenities[2]}</small>
                </p>
                <div className='flex items-center gap-6'>
                    <p className='flex gap-1'><FaStar className='text-yellow-500'/><small>{rating}</small></p>
                    <p>$<small>{rooms[0].price_per_night}</small>/night</p>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;