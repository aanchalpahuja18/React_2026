import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hook/useGif';

const Random = () => {  
    const {gif, isLoading, fetchData} = useGif();

    function clickHandler(){
        fetchData();
    }
  return (
    <div className=' w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random GIF</h1>
      {isLoading ? <Spinner/> : <img src={gif} alt="Random gif" width="450" />}
      <button onClick={clickHandler} className='w-10/12 bg-white opacity-80 text-lg py-2 rounded-lg cursor-pointer mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random
