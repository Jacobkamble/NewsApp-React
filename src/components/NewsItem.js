import React, { Component } from 'react'


export default class NewsItem extends Component {

  render() {
    let { title, desc, imgUrl, newsUrl, author, date } = this.props
    return (
      <>
        <div  className="my-2">
          <div className="card" >
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div style={{backgroundColor:""}} className={`${this.props.mode==="light"?"bg-dark text-light":"bg-light text-dark"} card-body position-relative`}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on 
                {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank"  className={`${this.props.mode==="light"?"bg-success":"bg-dark"} btn  btn-sm btn-primary`} rel='noreferrer'>Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
