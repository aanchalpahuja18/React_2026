import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
const Tag = () => {  
    console.log(API_KEY);

    const [gif, setGif] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    async function fetchData(){
        setIsLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        console.log(imageSource);
        setGif(imageSource)
        setIsLoading(false);
        
    }

    useEffect(() => {
        fetchData();
    }, [])

    function clickHandler(){
        fetchData();
    }

    function changeHandler(){
        
    }
  return (
    <div className=' w-1/2 bg-blue-300 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random GIF</h1>
      {isLoading ? <Spinner/> : <img src={gif} alt="Random gif" width="450" />}

      <input type="text" className='w-10/12 bg-white outline-none px-4 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={changeHandler} />
      <button onClick={clickHandler} className='w-10/12 bg-white opacity-80 text-lg py-2 rounded-lg cursor-pointer mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag
