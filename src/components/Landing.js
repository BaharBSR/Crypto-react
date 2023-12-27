import React, { useState, useEffect } from 'react';

//API
import { getCoin } from '../sevices/api';

// components
import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data);
            setCoins(data);
        }
        fetchAPI();
    }, [])

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='flex flex-col items-center'>
            <input type='text' placeholder='Search' value={search} onChange={searchHandler} className=' w-72 h-8 mt-12 mx-auto outline-none border border-gray-400 rounded p-1 bg-gray-200 transition-all duration-200 ease focus:outline-none focus:border-white focus:bg-white shadow-2xl' />

            {
                coins.length ?
                    <div className='my-12 mx-auto border border-gray-400 rounded-lg bg-gray-200 w-fit '>
                        {
                            searchCoins.map(coin => <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h}
                            />)
                        }
                    </div>
                    :
                    <Loader />
            }
        </div>
    );
};

export default Landing;