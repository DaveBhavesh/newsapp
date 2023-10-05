import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {


   constructor(){
      super();
     console.log("Hello I am from News.js");
     this.state={
      articles:[],
      page:1,
      loading: false
     }
  }

    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01aad7c3543a49c2b4b9ee1a4a14339f&page=1&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data= await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({articles:parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading:false})
        
    } 

    handlePreviousClick=async()=>{
        console.log("Previous")
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01aad7c3543a49c2b4b9ee1a4a14339f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data= await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        console.log(this.state.page)
        this.setState({
          page: this.state.page-1,
          articles:parsedData.articles,
          loading: false
        })
      }
      handleNextClick=async()=>{
        console.log("Next")    
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01aad7c3543a49c2b4b9ee1a4a14339f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data= await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({
          page: this.state.page+1,
          articles:parsedData.articles,
          loading: false
        }) 
      }
    }

  render() {
    return (
      
      <div className='container my-3' style={{backgroundColor:'#181717 '}}>
      
      <h1 className='mb-5 text-center' style={{color:'white'}}>News Bites Top Headlines</h1>
      {this.state.loading && <Spinner/>}
      <div className="row">
      {!this.state.loading && this.state.articles.map((element)=>{
        return(
         <div className="col-md-4  mb-5" key={element.url}>
        <NewsItem title={ element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>)
  })}
        
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-light" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-light"  onClick={this.handleNextClick}v>Next &rarr;</button>
        </div>
        </div>
     
    )
  }
}

export default News
