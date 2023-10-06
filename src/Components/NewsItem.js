import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,date,source} = this.props;
    return (
      <div>
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:'1'}}>{source}</span>
          <img src={imageUrl?imageUrl:"https://www.dsij.in/Portals/0/EasyDNNnews/33605/image_280.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn  btn-sm btn-dark" >
              Read More 📚
            </a>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
