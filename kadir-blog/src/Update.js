import { useState } from "react"
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Update = () => {
    const[title,setTitle] = useState('change them');
    const[body,setBody] = useState('change them');
    const[author,setAuthor] = useState('change that');
    const[isPending,setIsPending]=useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {  title, body, author};
        
        setIsPending(true);

        fetch('http://localhost:8000/blogs/',{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)

        }).then(()=>{
            console.log('blog has changed.');
            setIsPending(false);

            history.push('/')
        })
    }

    return (
        <div className="Update">

        
            <form onSubmit={handleSubmit}>
            
            <label> Blog title:</label>

            <input type= "text" 
            required
            defaultValue ={title} 
            defaultValue={(e) => setTitle(e.target.value)}>
            </input>
            <label> Blog body: </label>

            <textarea
            required
            defaultValue={ body }
            defaultValue={(e)=> setBody(e.target.value)}></textarea>
            <label>Blog Author : </label>

            <textarea
                required
                defaultValue={author}
                defaultValue ={(e)=> setAuthor(e.target.value)}></textarea>
            
            
            
            </form>

            
        </div>
       
    
    );
   
    
}
export default Update;