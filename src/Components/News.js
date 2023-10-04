import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


   constructor(){
      super();
     console.log("Hello I am from News.js");
     this.state={
      articles:[],
      loading: false
     }
  }

    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01aad7c3543a49c2b4b9ee1a4a14339f"
      let data= await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({articles:parsedData.articles})
    } 


  render() {
    return (
      
      <div className='container my-3' style={{backgroundColor:'#816F6F '}}>
      
      <h1 className='mb-5' style={{color:'white'}}>News Bites Top Headlines</h1>
      <div className="row">
      {this.state.articles.map((element)=>{
        return(
         <div className="col-md-4  mb-5" key={element.url}>
        <NewsItem title={ element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>)
  })}
        
        </div>
        </div>
     
    )
  }
}

export default News
