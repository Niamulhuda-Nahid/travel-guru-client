import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import { FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




const CardPlace = () => {
    const places = useLoaderData();
    return (
        <div className='container mx-auto'>

            <div className=' text-white grid grid-cols-12 gap-7'>
                <div className='col-start-2 col-end-6'>
                    <h2 className='text-5xl font-bold mb-6 uppercase tracking-normal'>{places[0].name}</h2>
                    <p className='text-base text-stone-300 mb-5'>{places[0].description.slice(0, 150)}...</p>
                    <Link to='booking' className='flex items-center btn btn-warning object-cover w-2/6'>
                        <button className=" ">Booking</button>
                        <FaArrowRightLong />
                    </Link>

                </div>

                <div className='col-start-6 col-end-12'>
                    <div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper "
                        >
                            <div>
                                {
                                    places.map(place =>
                                        <SwiperSlide key={place.id}>
                                            <Card  place={place}></Card>
                                        </SwiperSlide>
                                    )
                                }
                            </div>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardPlace;



