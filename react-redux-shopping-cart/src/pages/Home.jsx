import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

    const API_URl = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProducts() {
        setLoading(true);
        try {
            const result = await fetch(API_URl);
            const data = await result.json();
            console.log("Printing data: ", data);
            setPosts(data);
        } catch (error) {
            console.log("Error in fetching data: ", error);
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProducts();
    }, [])
  return (
    <div>
      {
        loading ? <Spinner /> : ( posts.length > 0 ? 
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-y-10 gap-x-5 min-h-[80vh]'>
            {posts.map((post) => {
                return <Product key={post.id} post = {post}/>
            })}
        </div> : <div className='flex justify-center items-center'><p>No data found!</p></div>)
      }
    </div>
  )
}

export default Home
