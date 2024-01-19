import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    
  constructor(){
    super();
    
    this.state = {
        articles: [],
        loading: true,
        page: 1,
    };
  }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=153fb61f0fad4b3d9ede93b127c53a80";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  clickToPrevious = async () =>{


    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=153fb61f0fad4b3d9ede93b127c53a80&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    //console.log(parsedData);
    //this.setState({articles: parsedData.articles})

    this.setState( {
       page: this.state.page - 1,
       articles: parsedData.articles
    })


  }
  clickToNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=153fb61f0fad4b3d9ede93b127c53a80&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    
    if(parsedData.articles.length > 0){
       
        //console.log(parsedData);
        //this.setState({articles: parsedData.articles})
    
        this.setState( {
           page: this.state.page + 1,
           articles: parsedData.articles
        })
    
    }else{
        document.getElementById("errorMsg").innerText="No more articles on the next page";

    }
   
  }
  
  render() {
    return (
      <div className="container my-3"> 
        this is news components.
        {this.state.loading && <Spinner/>}
        <div className="row ">
       
            {!this.state.loading && this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0, 30): " "} description={element.description?element.description.slice(0,90): " "} imageUrl={element.urlToImage } newsUrl={element.url} />
                    </div>
            })}
            
            
                </div>
                <h1 id="errorMsg"></h1>
                <div className="d-flex justify-content-between mt-3">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.clickToPrevious} > &larr; Previous</button>
                <button type="button" className="btn btn-dark"  onClick={this.clickToNext} >Next &rarr;</button>
               
                </div>
                <h1 id="errorMsg"></h1>
                
      </div>
     
     
    )
  }
}

export default News
