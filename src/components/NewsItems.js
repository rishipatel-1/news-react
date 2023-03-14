import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,url} = this.props;
    return (
     
      <>
       
        <div className="card" >
          <img className="card-img-top" src={imageUrl?imageUrl:"https://i-invdn-com.investing.com/news/LYNXMPEB1N0X1_L.jpg"} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
      </>
    )
  }
}

export default NewsItems;