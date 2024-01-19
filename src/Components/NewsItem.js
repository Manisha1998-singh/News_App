import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl} = this.props;
    return (
      
        <div>
       
            <div  className="card" style={{width: "18rem"}}>
  <img src={imageUrl?  imageUrl: "https://news.cgtn.com/resource/default/img/breaking.png"}  className="card-img-top" alt="..."  onError={(e) => {
    e.target.src = "https://news.cgtn.com/resource/default/img/breaking.png"} }/>
  <div  className="card-body">
    <h5  className="card-title">{title}...</h5>
    <p  className="card-text">{description}...</p>
    <a href={newsUrl}  className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
            </div>
           
       
    )
  }
}

export default NewsItem
