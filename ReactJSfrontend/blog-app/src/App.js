import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import ArticleList from './component/ArticleList';
import Form from './component/Form';
function App() {

  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)
  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/articles/',{
      'method':'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Token dfa35e05284b4c114b5ce9f34e971990df712554'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error=> console.log(console.error))
  },[])

  const editBtn = (article) => {
    setEditArticle(article)
  }
  const updatedInformation = (article) =>{
    const new_article=articles.map(myarticle => {
      if(myarticle.id === article.id){
        return article;
      }
      else{
        return myarticle;
      }
    })

    setArticles(new_article)

  }

  const articleForm = ()=>{
    setEditArticle({title:'', description:''})

  }

  const insertedInformation = (article) => {
    const new_articles=[...articles,article]
    setArticles(new_articles)
  }

  const deleteBtn =(article) => {
    const new_articles = articles.filter(myarticle =>{
      if(myarticle.id === article.id) {
        return false
      }
      return true;
    })
    setArticles(new_articles)
  }

  return (
    <div className="App">

      <div className= "row"> 
      <div className = "col">
        <h2> Django And ReactJS Blog App </h2>
        <br/>
        </div> 
        <div className="col">
        <button onClick ={articleForm} className ="btn btn-primary">Insert Article </button>
        </div>
      </div>
        

        <ArticleList articles={articles} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
        {editArticle ? <Form article = {editArticle} updatedInformation = {updatedInformation} insertedInformation = {insertedInformation}/>:null}
    </div>
  );
}

export default App;
