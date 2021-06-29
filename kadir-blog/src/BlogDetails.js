import { useHistory, useParams } from 'react-router-dom';
import Update   from './Update';
import useFetch from './useFetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();

    const handleClick = ()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method:'DELETE'
        }).then(() => {
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
                <button onClick={handleClick}>delete </button>
            </article>
            

            
            )}
            <Route>
            <Update >
           
            </Update>
            <button onClick ={}>update</button>
            </Route> 


        </div>
    );
}

export default BlogDetails;