import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

  capatilize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      results:[],
      page: 1,
      loading: true,
      totalResults: 0,
    }

    document.title = `${this.capatilize(this.props.category)} - WorldNews`;
  }

  updateNews = async () => {
    this.props.setProgress(0);
    this.setState({ loading: true });
    this.props.setProgress(30)
    let url=`https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=in&category=${this.props.category}&page=${this.state.page}`;
   
    this.props.setProgress(50)
    let data = await fetch(url);
    this.props.setProgress(70)
    let parsedData = await data.json();
    this.props.setProgress(85);
     this.setState({
      results:parsedData.results,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }


  fetchMoreData = async () => {

    let url=`https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=in&category=${this.props.category}&page=${this.state.page+1}`;
    this.setState({ page: this.state.page + 1 })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      results: this.state.results.concat(parsedData.results),
      totalResults: parsedData.totalResults,
    })
  }


  render() {

    return (
      <>
      <h1 style={{marginTop:"80px"}} className='  text-center' >{`WorldNews - Top ${this.props.category==="top"?"General":this.capatilize(this.props.category)}  Headlines`}</h1>

      {this.state.loading && <Spinner />}

      <InfiniteScroll
        dataLength={this.state.results.length}
        next={this.fetchMoreData}
        hasMore={this.state.results.length !==this.state.totalResults}
        loader={!this.state.loading && < Spinner />}

      >
        <div className="my-2 container">

          <div className="row ">
            {this.state.results.map((element) => {
              return <div key={element.link} className="col-md-4 " >
                <NewsItem mode={this.props.mode} title={element.title ? `${element.title}`:""} desc={element.description?`${element.description.slice(0,88)}...`:""} imgUrl={element.image_url?element.image_url:"https://www.elmex.net/images/no-thumb.jpg"}
                  newsUrl={element.link} author={element.creator} date={element.pubDate} />
              </div>
            })}

          </div>
        </div>
      </InfiniteScroll>
    </>
    )
  }
}
