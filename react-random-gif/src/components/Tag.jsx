import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hook/useGif';

const Tag = () => {  
    const [tag, setTag] = useState('car');
    const {gif, isLoading, fetchData} = useGif(tag);

    function clickHandler(){
        fetchData();
    }

    function changeHandler(event){
        setTag(event.target.value)
    }
  return (
    <div className=' w-1/2 bg-blue-300 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} GIF</h1>
      {isLoading ? <Spinner/> : <img src={gif} alt="Random gif" width="450" />}

      <input type="text" className='w-10/12 bg-white outline-none px-4 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={changeHandler} value={tag}/>
      <button onClick={clickHandler} className='w-10/12 bg-white opacity-80 text-lg py-2 rounded-lg cursor-pointer mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag
