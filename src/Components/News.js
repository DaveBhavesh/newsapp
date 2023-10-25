import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from "react-top-loading-bar";

const News=(props)=>{

  console.log("Hello I am from News.js");
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

   const updateNews=async()=>{
    props.setProgress(10);
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log("Here is the Parsed Data :");
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
   props.setProgress(100);
  }

    useEffect(() => {
      document.title=`${props.category}-NewsBites`
        updateNews();
        //eslint-disable-next-line
    }, []);

  //  const handlePreviousClick = async () => {
  //   console.log("Previous");
  //   setPage(page-1)
  //   updateNews()
  // };
  // const handleNextClick = async () => { 
  //   console.log("Next");
  //    setPage(page+1)
  //   updateNews()
  // };

   const fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <div
       className="container my-3" 
        style={{ backgroundColor: "#181717"}}
      >
        <h1
          className="my-4 text-center"
          style={{ color: "white",paddingTop:"60px"}}
        >
          News Bites - Top {props.category} Headlines 
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll  
       
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length!==totalResults}
        loader= {articles?.length<=totalResults ?  <Spinner />:" "}>
          <div className="container">
        <div className="row">
          {articles?.map((element) => {
           
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
          <button  disabled={page <= 1} type="button" className="btn btn-light"onClick={handlePreviousClick}>
            &larr; Previous
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
            type="button"
            className="btn btn-light"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
 
}

export default News;
