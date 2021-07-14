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
  return (
    <div className="App">
        <h3> Django And ReactJS Blog App </h3>
        <br/>
        

        <ArticleList articles={articles} editBtn = {editBtn}/>
        {editArticle ? <Form article = {editArticle} updatedInformation/>:null}
    </div>
  );
}

export default App;
