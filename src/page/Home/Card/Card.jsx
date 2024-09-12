import React from 'react';
import CardNew from '../CardNew/CardNew';

const Card = ({ place }) => {
    const { name, img_url } = place;
    return (
        <div className=''>
            <div className='relative'>
                <img className='object-cover h-72 rounded-xl  shadow-2xl' src={img_url} alt="" />
                <h3 className='absolute bottom-4 left-3 text-2xl'>{name}</h3>
            </div>
        </div>
    );
};

export default Card;