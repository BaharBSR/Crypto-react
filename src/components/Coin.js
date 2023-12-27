import React from 'react';

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
    return (
        <div className='flex justify-center items-center py-4 px-10 text-xs text-gray-800 border-b border-b-gray-400   last:border-b-0'>
            <img src={image} alt={name} className='w-8' />
            <span className='w-36 text-sm ml-4 text-left font-bold text-gray-700'>{name}</span>
            <span className='text-left w-24 '>{symbol.toUpperCase()}</span>
            <span className='text-left w-24'>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? 'w-24 font-bold text-left text-green-500' : 'w-24 font-bold text-left text-red-500'}>{priceChange.toFixed(2)}</span>
            <span>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;