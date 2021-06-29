import { useState } from "react"
import { useHistory } from "react-router-dom";



const Update = () => {
    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');
    const[author,setAuthor] = useState('');
    const[isPending,setIsPending]=useState(false);
    const history = useHistory();


    const handleChange = (e) => {
        e.preventDefault();
        const blog = {  title, body, author};
        
        setIsPending(true);

        fetch('http://localhost:8000/blogs/1',{
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

        
            <form onChange={handleChange}>
            
            <label> Blog title:</label>

            <input type= "text" 
            required
            value ={title} 
            onChange={(e) => setTitle(e.target.title)}>
            </input>
            <label> Blog body: </label>

            <textarea
            required
            value={ body }
            onChange={(e)=> setBody(e.target.body)}></textarea>
            <label>Blog Author : </label>

            <textarea
                required
                value={author}
                onChange ={(e)=> setAuthor(e.target.author)}></textarea>

            </form>

            
        </div>
    )
}
export default Update;