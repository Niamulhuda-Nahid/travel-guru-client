import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div className='container mx-auto'>

            <div className=' text-white grid grid-cols-12 gap-7'>
                <div className='col-start-2 col-end-6'>
                    <h2 className='text-5xl font-bold mb-6 uppercase tracking-normal'>Cox's Bazar</h2>
                    <p className='text-base text-stone-300 mb-5'>Cox's Bazar is a coastal town in southeastern Bangladesh, renowned for having the longest unbroken natural sea beach in the world, spanning approximately 120 kilometers. The town offers a unique blend of natural beauty and local culture. Tourists can stroll along its golden sands, enjoy the peaceful waves, and witness breathtaking sunsets.</p>
                </div>

                <div className='col-start-8 col-end-12'>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base text-slate-400">Origin</span>
                                </label>
                                <input type="text" name='origin' placeholder="Enter your origin" className="input text-black bg-slate-300 text-base font-semibold" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base text-slate-400">Destination</span>
                                </label>
                                <input type="text" name='destination' placeholder="Enter your destination" className="input bg-slate-300 text-black text-base font-semibold" required />
                            </div>

                            <div className="form-control mt-6">
                                    <button className="btn btn-warning">Start Booking</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;