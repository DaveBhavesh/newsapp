import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    console.log("Hello I am from News.js");
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults:0
    };
    document.title= `${this.props.category}-NewsBites` 
  }

  async  updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });

  }

  async componentDidMount() {
    this.updateNews();
  }

  // handlePreviousClick = async () => {
  //   console.log("Previous");
  //   this.setState({page: this.state.page - 1})
  //   this.updateNews()
  // };
  // handleNextClick = async () => {
  //   console.log("Next");
  //   this.setState({page: this.state.page + 1})
  //   this.updateNews()
  // };

  fetchMoreData = async() => {
      this.setState({page:this.state.page+1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles) ,
      totalResults: parsedData.totalResults
    });
      
  };

  render() {
    return (
      <div
       className="container my-3" 
        style={{ backgroundColor: "#181717", padding: "4px"}}
      >
        <h1
          className="my-4 text-center"
          style={{ color: "white", margin: "30px 0px" }}
        >
          News Bites - Top {this.props.category} Headlines 
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll  
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length!==this.state.totalResults}
        loader={ <Spinner/>}>
          <div className="container">
        <div className="row">
          { this.state?.articles?.map((element) => {
              return (
                <div className="col-md-4  mb-5" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={element.description ? element.description.slice(0, 90): "" }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button  disabled={this.state.page <= 1} type="button" className="btn btn-light"onClick={this.handlePreviousClick}>
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-light"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
