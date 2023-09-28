import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles=[
      {
        "source": { "id": "bbc-sport", "name": "BBC Sport" },
        "author": null,
        "title": "'Cricket can become the most inclusive sport'",
        "description": "Following the publication of the ECB's response to the ICEC report, former England international and broadcaster Ebony Rainford-Brent says cricket can become the most inclusive sport in the country.",
        "url": "http://www.bbc.co.uk/sport/cricket/66902424",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5B44/production/_131246332_ebonyrainford-brent.jpg",
        "publishedAt": "2023-09-25T21:22:22.3596901Z",
        "content": "The ACE Programme was launched by Surrey County Cricket Club in 2020\r\nEbony Rainford-Brent was the first black woman to play cricket for England and is now a presenter and pundit for BBC Sport. She f… [+6203 chars]"
      },
      {
        "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
    ]  

   constructor(){
      super();
     console.log("Hell I am from News.js");
     this.state={
      articles:this.articles,
      loading: false
     }
     }

  render() {
    return (
      
      <div className=' container my-3'>
      
      <h2>News Bites Top Headlines</h2>
        
        <div className='row my-5'>
      
            <div className="col-md-4  mb-5">
                <NewsItem title="News" description="Will Update soon" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
            </div>

            <div className="col-md-4 mb-5">
                <NewsItem title="News" description="Will Update soon"/>
            </div>

            <div className="col-md-4 mb-5">
                <NewsItem title="News" description="Will Update soon"/>
            </div>

            <div className="col-md-4 mb-5">
                <NewsItem title="News" description="Will Update soon"/>
            </div>

            <div className="col-md-4 mb-5">
                <NewsItem title="News" description="Will Update soon"/>
            </div>

            <div className="col-md-4 mb-5">
                <NewsItem title="News" description="Will Update soon"/>
            </div>

        </div>
      </div>
    )
  }
}

export default News
