import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://www.dsij.in/Portals/0/EasyDNNnews/33605/image_280.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a  href={newsUrl} target="_blank" className="btn  btn-sm btn-primary" >
              Read More 📚
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
