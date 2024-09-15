import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useLoaderData } from 'react-router-dom';
import HotelCard from './HotelCard';

const AnyReactComponent = ({ text }) => <div>{text}</div>; 

const Hotel = () => {
    const hotels = useLoaderData();
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return (
        <div className='grid grid-cols-12 gap-5'>
            <div className='col-start-1 col-end-8 mt-7'>
                {
                    hotels.map(hotel=> <HotelCard
                        key={hotel.hotel_id}
                        hotel={hotel}
                    ></HotelCard>)
                }
            </div>
            <div className='col-start-9 col-end-12' >
                {/* <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact> */}
            </div>
        </div>
    );
};

export default Hotel;