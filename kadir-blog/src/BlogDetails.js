import { useHistory, useParams } from 'react-router-dom';
import Update   from './Update';
import useFetch from './useFetch';
import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error} = useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();
    const[title,setTitle] = useState('can change them');
    const[body,setBody] = useState('can change them');
    const[author,setAuthor] = useState('can change that');
    const[isPending,setIsPending]=useState();

    const handleClick = ()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method:'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {  title, body, author};
        
        setIsPending(true);

        fetch('http://localhost:8000/blogs/1',{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)

        }).then(() => {
            console.log(' blog has changed.');
            setIsPending(false);

            history.push('/');  
        })
    }
    return (
        <div className="blog-details">
            { isPending && <div>Loading..</div>}
            { error && <div> { error } </div>}
            {blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div> { blog.body } </div>
                <button onClick={handleClick}> delete </button>
            </article>
            

            
            )}
            
            <form onSubmit={handleSubmit}>
            
            <label> Blog title:       
            </label>
            <input type= "text" 
            required
            value ={ title } 
            onChange={(e) => setTitle(e.target.value)}>
            </input>
        

             
            <label> Blog body: </label>

            <textarea
            required
            value={ body }
            onChange={(e)=> setBody(e.target.value)}></textarea>
            <label> Blog Author : </label>

            <textarea
                required
                value={ author }
                onChange ={(e)=> setAuthor(e.target.value)}></textarea>
            
            
            
            </form>
            <button onClick={ handleSubmit }> update </button>


        </div>
        
    );
}

export default BlogDetails;