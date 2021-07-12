import React, {useState} from 'react'

function CounterHook() {

    const [count, setCount] = useState(0)
    const [text,setText] = useState("This is a text")
    const [info, setInfo] = useState({name:'', email:''})
    const [articles,setArticles] = useState(['Article One','Article Two','Article Three'])
    
    const addArticle = () => {
        setArticles([...articles,'New Article'])//first one copy on the all articles

    }
    
    return (
        <div>

            <h2>{count}</h2>
            <button onClick = {() => setCount(count+1)} className = " btn btn-primary"> Click</button>
            <h2>{text}</h2>
            <button onClick = {() => setText("The text is changed")} className = "btn btn-success"> Change Text </button>
            <br/>
            <br/>
            <input type ="text" className ="form-control" value= {info.name } 
                onChange= {e => setInfo({...info,name:e.target.value})}></input>
            <input type ="text" className ="form-control" value= {info.email} 
                onChange ={e => setInfo({...info,email:e.target.value})}></input>


            <h2> Name Is: {info.name} </h2>
            <h2> Email Is: {info.email}</h2>

            <br/>
            <br/>
            {articles.map(article => {
                return <h2> {article}</h2>
            })}

            <button onClick = {addArticle} className = "btn btn-primary">Add</button>
            </div>
    )
}

export default CounterHook;