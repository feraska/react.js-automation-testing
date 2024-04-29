import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/api';

const FetchData = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=> {
        const data = async()=> {
            const res = await getPosts()
            setPosts(res)
        }
       //setTimeout(async()=>await data(), 3000);
        data()
    },[])
    return (
        <div>
            <p>Fake Posts Lists</p>
            <hr/>
            {posts&&
            posts.map((post)=>(
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <hr/>
                </div>
            ))
            }
        </div>
    )
}


export default FetchData;