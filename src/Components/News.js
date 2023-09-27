import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      
      <div className=' container my-3'>
      
      <h2>News Bites Top Headlines</h2>
        
        <div className='row my-5'>
      
            <div className="col-md-4  mb-5">
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

            <div className="col-md-4 mb-5">
                <NewsItem title="News" description="Will Update soon"/>
            </div>

        </div>
      </div>
    )
  }
}

export default News
