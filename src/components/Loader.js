import React from 'react';

//Gif
import spinner from '../gif/Spinner.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='Loading'  className='mt-8'/>
            <h1 className='text-3xl font-bold text-gray-800'> Loading ...</h1>
        </div>
    );
};

export default Loader;