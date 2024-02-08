import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card">
          <div className="d-flex position-absolute top-0  end-0 justify-content-start">
          <span
                className=" badge rounded-pill bg-danger"
                
              >
                {source}
              </span>
          </div>
          <div style={{height: '270px'}}>
          <img style={{height: '100%'}}
            src={
              imageUrl
                ? imageUrl
                : "https://news.cgtn.com/resource/default/img/breaking.png"
            }
            className="card-img-top"
            alt="..."
            onError={(e) => {
              e.target.src =
                "https://news.cgtn.com/resource/default/img/breaking.png";
            }}
          />
         </div>
          <div className="card-body">
            <h5 className="card-title">
              {title}
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "UnKnown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a href={newsUrl} className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
