import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
         country: 'in',
         pageSize: 8,
         category: 'general',
  }
  static PropsTypes = {
             country: PropTypes.string,
             pageSize: PropTypes.number,
             category: PropTypes.string
  }
    
  constructor(){
    super();
    
    this.state = {
        articles: [],
        loading: true,
        page: 1,
        totalsReault: 0
    };
  }

  async update(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153fb61f0fad4b3d9ede93b127c53a80&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalsReault: parsedData.totalsReault,
      loading: false,
      
    })

    this.props.setProgress(100);

  }
 async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153fb61f0fad4b3d9ede93b127c53a80&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles})
    this.update();
  }


  //clickToPrevious = async () =>{
   
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153fb61f0fad4b3d9ede93b127c53a80&page=${this.state.page - 1}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // //console.log(parsedData);
    // //this.setState({articles: parsedData.articles})

    // this.setState( {
    //    page: this.state.page - 1,
    //    articles: parsedData.articles
    // })

    //this.setState({page: this.state.page - 1});
    //this.update();

  //}
  //clickToNext = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153fb61f0fad4b3d9ede93b127c53a80&page=${this.state.page + 1}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    
    // if(parsedData.articles.length > 0){
       
    //     //console.log(parsedData);
    //     //this.setState({articles: parsedData.articles})
    
    //     this.setState( {
    //        page: this.state.page + 1,
    //        articles: parsedData.articles
    //     })
    
    // }else{
    //     document.getElementById("errorMsg").innerText="No more articles on the next page";

    // }
    //this.setState({page: this.state.page + 1});
    //this.update();
   
  //}
  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=153fb61f0fad4b3d9ede93b127c53a80&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalsReault: parsedData.totalsReault,
      loading: false,
      
    })
  };
  
  render() {
    return (
      <div className="container my-3"> 
        this is news components.
        {this.state.loading && <Spinner/>}
      <h3 class="mt-4 mb-4 text-center">NewsEntertainment - Top Headlines</h3>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalsReault}
          loader={<Spinner/>}
        >
          <div className="cantanier">
        <div className="row ">
       
            { this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0, 30): " "} description={element.description?element.description.slice(0,90): " "} imageUrl={element.urlToImage } newsUrl={element.url}  author={element.author}  date={element.publishedAt} source={element.source.name}/>
                    </div>
            })}
            
            
                </div>
                </div>
                </InfiniteScroll>

                {/* <h1 id="errorMsg"></h1>
                <div className="d-flex justify-content-between mt-3">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.clickToPrevious} > &larr; Previous</button>
                <button type="button" className="btn btn-dark"  onClick={this.clickToNext} >Next &rarr;</button>
               
                </div> */}
                <h1 id="errorMsg"></h1>
                
      </div>
     
     
    )
  }
}

export default News
