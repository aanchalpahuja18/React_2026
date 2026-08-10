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
        loading ? <Spinner /> : ( posts.length > 0 ? <div>
            {posts.map((post) => {
                return <Product key={post.id} post = {post}/>
            })}
        </div> : <div><p>No data found!</p></div>)
      }
    </div>
  )
}

export default Home
