import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [post, setPost] =useState([])
   // const [body, setBody] = useState([])
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [ ])
  return (

    <div>
      <ul>
        {post.map(post => (
            <li key={post.id} > {post.id} <br /> {post.title} <br /> {post.body} </li>
        ))}
      </ul>
    </div>
  )
}

export default DataFetching
